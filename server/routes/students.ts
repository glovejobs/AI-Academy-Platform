import { Response, Router } from 'express';
import { db, users, studentProfiles, enrollments, cohorts, bootcamps, classSessions, projectSubmissions, projects, studentAchievements, achievements, rewards } from '../db';
import { eq, and, desc } from 'drizzle-orm';
import { authMiddleware, requireRole, AuthRequest } from '../lib/auth';

const router = Router();

// Apply authentication middleware to all routes
router.use(authMiddleware);
router.use(requireRole('student'));

/**
 * GET /api/students/dashboard
 * Get student dashboard data
 */
router.get('/dashboard', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    // Get student profile
    const studentProfile = await db.query.studentProfiles.findFirst({
      where: eq(studentProfiles.userId, userId),
    });

    if (!studentProfile) {
      res.status(404).json({
        success: false,
        error: {
          code: 'PROFILE_NOT_FOUND',
          message: 'Student profile not found',
        },
      });
      return;
    }

    // Get current enrollment
    const currentEnrollment = await db.query.enrollments.findFirst({
      where: and(
        eq(enrollments.studentId, userId),
        eq(enrollments.status, 'active')
      ),
      with: {
        cohortId: true,
      },
    });

    let cohortData = null;
    if (currentEnrollment) {
      cohortData = await db.query.cohorts.findFirst({
        where: eq(cohorts.id, currentEnrollment.cohortId),
        with: {
          bootcampId: true,
        },
      });
    }

    // Get upcoming classes (next 7 days)
    const upcomingClasses = await db.query.classSessions.findMany({
      where: and(
        eq(classSessions.cohortId, currentEnrollment?.cohortId || ''),
        eq(classSessions.status, 'scheduled')
      ),
      orderBy: [classSessions.scheduledStart],
      limit: 5,
    });

    // Get recent achievements
    const recentAchievements = await db.query.studentAchievements.findMany({
      where: eq(studentAchievements.studentId, userId),
      orderBy: [desc(studentAchievements.earnedAt)],
      limit: 5,
      with: {
        achievementId: true,
      },
    });

    // Get rewards summary
    const rewardsSummary = await db.query.rewards.findMany({
      where: eq(rewards.studentId, userId),
      orderBy: [desc(rewards.createdAt)],
      limit: 5,
    });

    const totalEarned = rewardsSummary
      .filter(r => r.status === 'paid')
      .reduce((sum, r) => sum + Number(r.amount || 0), 0);

    res.status(200).json({
      success: true,
      data: {
        profile: {
          firstName: req.user!.email.split('@')[0],
          totalPoints: studentProfile.totalPoints,
          level: studentProfile.level,
          experiencePoints: studentProfile.experiencePoints,
        },
        currentCohort: cohortData ? {
          name: cohortData.cohortName,
          weekNumber: cohortData.currentWeek,
          totalWeeks: 8,
        } : null,
        progress: {
          weekNumber: cohortData?.currentWeek || 0,
          progressPercentage: Number(currentEnrollment?.progressPercentage || 0),
          attendanceRate: Number(currentEnrollment?.attendanceRate || 0),
          completedLessons: 0,
          totalLessons: 0,
        },
        upcomingClasses: upcomingClasses.map(c => ({
          id: c.id,
          title: c.title,
          scheduledStart: c.scheduledStart,
          scheduledEnd: c.scheduledEnd,
          zoomJoinUrl: c.zoomJoinUrl,
        })),
        achievements: recentAchievements.map(a => ({
          id: a.id,
          earnedAt: a.earnedAt,
          // Achievement details would be joined here
        })),
        points: studentProfile.totalPoints,
        level: studentProfile.level,
        rewards: {
          totalEarned,
          recentRewards: rewardsSummary.map(r => ({
            id: r.id,
            type: r.rewardType,
            amount: Number(r.amount || 0),
            status: r.status,
            createdAt: r.createdAt,
          })),
        },
      },
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to load dashboard',
      },
    });
  }
});

/**
 * GET /api/students/projects
 * Get all projects for student
 */
router.get('/projects', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { status } = req.query;

    // Get student's enrollment
    const enrollment = await db.query.enrollments.findFirst({
      where: and(
        eq(enrollments.studentId, userId),
        eq(enrollments.status, 'active')
      ),
    });

    if (!enrollment) {
      res.status(200).json({
        success: true,
        data: {
          projects: [],
        },
      });
      return;
    }

    // Get cohort to find bootcamp
    const cohort = await db.query.cohorts.findFirst({
      where: eq(cohorts.id, enrollment.cohortId),
    });

    if (!cohort) {
      res.status(200).json({
        success: true,
        data: {
          projects: [],
        },
      });
      return;
    }

    // Get projects for this bootcamp
    const bootcampProjects = await db.query.projects.findMany({
      where: eq(projects.bootcampId, cohort.bootcampId),
    });

    // Get student's submissions for these projects
    const submissions = await db.query.projectSubmissions.findMany({
      where: eq(projectSubmissions.studentId, userId),
    });

    const submissionsMap = new Map(
      submissions.map(s => [s.projectId, s])
    );

    const projectsWithStatus = bootcampProjects.map(project => {
      const submission = submissionsMap.get(project.id);
      return {
        id: project.id,
        title: project.title,
        description: project.description,
        weekAssigned: project.weekAssigned,
        maxPoints: project.maxPoints,
        submission: submission ? {
          id: submission.id,
          status: submission.status,
          score: submission.score,
          submittedAt: submission.submittedAt,
          feedback: submission.feedback,
        } : null,
      };
    });

    // Filter by status if provided
    let filteredProjects = projectsWithStatus;
    if (status) {
      filteredProjects = projectsWithStatus.filter(p => p.submission?.status === status);
    }

    res.status(200).json({
      success: true,
      data: {
        projects: filteredProjects,
      },
    });
  } catch (error) {
    console.error('Projects error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to load projects',
      },
    });
  }
});

/**
 * POST /api/students/projects/:projectId/submit
 * Submit a project
 */
router.post('/projects/:projectId/submit', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;
    const { projectId } = req.params;
    const { submissionFiles, submissionText, studentNotes } = req.body;

    // Get student's enrollment
    const enrollment = await db.query.enrollments.findFirst({
      where: and(
        eq(enrollments.studentId, userId),
        eq(enrollments.status, 'active')
      ),
    });

    if (!enrollment) {
      res.status(404).json({
        success: false,
        error: {
          code: 'ENROLLMENT_NOT_FOUND',
          message: 'Active enrollment not found',
        },
      });
      return;
    }

    // Check if project exists
    const project = await db.query.projects.findFirst({
      where: eq(projects.id, projectId),
    });

    if (!project) {
      res.status(404).json({
        success: false,
        error: {
          code: 'PROJECT_NOT_FOUND',
          message: 'Project not found',
        },
      });
      return;
    }

    // Check if submission already exists
    const existingSubmission = await db.query.projectSubmissions.findFirst({
      where: and(
        eq(projectSubmissions.projectId, projectId),
        eq(projectSubmissions.studentId, userId)
      ),
    });

    let submission;
    if (existingSubmission) {
      // Update existing submission
      [submission] = await db
        .update(projectSubmissions)
        .set({
          submissionFiles,
          submissionText,
          studentNotes,
          submittedAt: new Date(),
          status: 'submitted',
          updatedAt: new Date(),
        })
        .where(eq(projectSubmissions.id, existingSubmission.id))
        .returning();
    } else {
      // Create new submission
      [submission] = await db
        .insert(projectSubmissions)
        .values({
          projectId,
          enrollmentId: enrollment.id,
          studentId: userId,
          submissionFiles,
          submissionText,
          studentNotes,
          submittedAt: new Date(),
          status: 'submitted',
        })
        .returning();
    }

    // Award points for submission
    const pointsEarned = 10; // Base points for submission
    await db
      .update(studentProfiles)
      .set({
        totalPoints: db.$count(studentProfiles.totalPoints, '+', pointsEarned),
        experiencePoints: db.$count(studentProfiles.experiencePoints, '+', pointsEarned),
      })
      .where(eq(studentProfiles.userId, userId));

    res.status(201).json({
      success: true,
      data: {
        submission: {
          id: submission.id,
          status: submission.status,
          submittedAt: submission.submittedAt,
        },
        message: 'Project submitted successfully',
        pointsEarned,
      },
    });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to submit project',
      },
    });
  }
});

/**
 * GET /api/students/progress
 * Get detailed progress tracking
 */
router.get('/progress', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    const enrollment = await db.query.enrollments.findFirst({
      where: and(
        eq(enrollments.studentId, userId),
        eq(enrollments.status, 'active')
      ),
    });

    if (!enrollment) {
      res.status(200).json({
        success: true,
        data: {
          weeklyProgress: [],
          overallStats: {
            attendanceRate: 0,
            averageScore: 0,
            completionRate: 0,
          },
          strengths: [],
          areasForImprovement: [],
          aiInsights: 'Start your learning journey to unlock AI-powered insights!',
        },
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        weeklyProgress: [],
        overallStats: {
          attendanceRate: Number(enrollment.attendanceRate || 0),
          averageScore: 0,
          completionRate: Number(enrollment.progressPercentage || 0),
        },
        strengths: ['Consistent attendance', 'Quick learner'],
        areasForImprovement: ['Project submissions'],
        aiInsights: 'Great progress! Keep up the momentum.',
      },
    });
  } catch (error) {
    console.error('Progress error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to load progress',
      },
    });
  }
});

/**
 * GET /api/students/achievements
 * Get all achievements (earned and available)
 */
router.get('/achievements', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    // Get earned achievements
    const earnedAchievements = await db.query.studentAchievements.findMany({
      where: eq(studentAchievements.studentId, userId),
    });

    const earnedIds = new Set(earnedAchievements.map(a => a.achievementId));

    // Get all active achievements
    const allAchievements = await db.query.achievements.findMany({
      where: eq(achievements.isActive, true),
    });

    const earned = allAchievements
      .filter(a => earnedIds.has(a.id))
      .map(a => ({
        id: a.id,
        name: a.name,
        description: a.description,
        badgeIconUrl: a.badgeIconUrl,
        category: a.category,
        pointsValue: a.pointsValue,
        rarity: a.rarity,
        earnedAt: earnedAchievements.find(ea => ea.achievementId === a.id)?.earnedAt,
      }));

    const available = allAchievements
      .filter(a => !earnedIds.has(a.id))
      .map(a => ({
        id: a.id,
        name: a.name,
        description: a.description,
        badgeIconUrl: a.badgeIconUrl,
        category: a.category,
        pointsValue: a.pointsValue,
        rarity: a.rarity,
      }));

    res.status(200).json({
      success: true,
      data: {
        earned,
        available,
        progress: [],
      },
    });
  } catch (error) {
    console.error('Achievements error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to load achievements',
      },
    });
  }
});

/**
 * GET /api/students/rewards
 * Get rewards history and balance
 */
router.get('/rewards', async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.userId;

    const allRewards = await db.query.rewards.findMany({
      where: eq(rewards.studentId, userId),
      orderBy: [desc(rewards.createdAt)],
    });

    const totalEarned = allRewards
      .filter(r => r.status === 'paid')
      .reduce((sum, r) => sum + Number(r.amount || 0), 0);

    const pendingRewards = allRewards.filter(r =>
      r.status === 'pending' || r.status === 'approved'
    );

    const paidRewards = allRewards.filter(r => r.status === 'paid');

    res.status(200).json({
      success: true,
      data: {
        totalEarned,
        pendingRewards: pendingRewards.map(r => ({
          id: r.id,
          type: r.rewardType,
          amount: Number(r.amount || 0),
          description: r.description,
          status: r.status,
          createdAt: r.createdAt,
        })),
        paidRewards: paidRewards.map(r => ({
          id: r.id,
          type: r.rewardType,
          amount: Number(r.amount || 0),
          description: r.description,
          paidAt: r.paidAt,
        })),
      },
    });
  } catch (error) {
    console.error('Rewards error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to load rewards',
      },
    });
  }
});

export default router;
