import { Response, Router } from 'express';
import { db, users, studentProfiles, enrollments, cohorts, projectSubmissions, classSessions, attendance, rewards } from '../db';
import { eq, and, desc } from 'drizzle-orm';
import { authMiddleware, requireRole, AuthRequest } from '../lib/auth';

const router = Router();

// Apply authentication middleware to all routes
router.use(authMiddleware);
router.use(requireRole('parent'));

/**
 * GET /api/parents/dashboard
 * Get parent dashboard for monitoring child
 */
router.get('/dashboard', async (req: AuthRequest, res: Response) => {
  try {
    const parentId = req.user!.userId;
    const { studentId } = req.query;

    // Get children for this parent
    const children = await db.query.studentProfiles.findMany({
      where: eq(studentProfiles.parentId, parentId),
    });

    if (children.length === 0) {
      res.status(200).json({
        success: true,
        data: {
          student: null,
          cohortInfo: null,
          progressSummary: null,
          message: 'No children enrolled',
        },
      });
      return;
    }

    // Use first child if studentId not specified
    const targetStudentId = studentId as string || children[0].userId;
    const studentProfile = children.find(c => c.userId === targetStudentId);

    if (!studentProfile) {
      res.status(404).json({
        success: false,
        error: {
          code: 'STUDENT_NOT_FOUND',
          message: 'Student not found',
        },
      });
      return;
    }

    // Get student user data
    const student = await db.query.users.findFirst({
      where: eq(users.id, targetStudentId),
    });

    // Get current enrollment
    const enrollment = await db.query.enrollments.findFirst({
      where: and(
        eq(enrollments.studentId, targetStudentId),
        eq(enrollments.status, 'active')
      ),
    });

    let cohortInfo = null;
    let upcomingActivities = [];

    if (enrollment) {
      const cohort = await db.query.cohorts.findFirst({
        where: eq(cohorts.id, enrollment.cohortId),
      });

      if (cohort) {
        cohortInfo = {
          name: cohort.cohortName,
          currentWeek: cohort.currentWeek,
          totalWeeks: 8,
          status: cohort.status,
        };

        // Get upcoming classes
        upcomingActivities = await db.query.classSessions.findMany({
          where: and(
            eq(classSessions.cohortId, cohort.id),
            eq(classSessions.status, 'scheduled')
          ),
          orderBy: [classSessions.scheduledStart],
          limit: 5,
        });
      }
    }

    // Get recent activity logs (simplified for now)
    const recentActivity = [];

    // Get badges/achievements
    const badges = await db.query.studentAchievements.findMany({
      where: eq(studentProfiles.userId, targetStudentId),
      orderBy: [desc(studentProfiles.createdAt)],
      limit: 5,
    });

    // Get rewards/greenlight account info
    const studentRewards = await db.query.rewards.findMany({
      where: eq(rewards.studentId, targetStudentId),
      orderBy: [desc(rewards.createdAt)],
      limit: 5,
    });

    const greenlightBalance = studentRewards
      .filter(r => r.status === 'paid')
      .reduce((sum, r) => sum + Number(r.amount || 0), 0);

    res.status(200).json({
      success: true,
      data: {
        student: {
          id: student?.id,
          firstName: student?.firstName,
          lastName: student?.lastName,
          totalPoints: studentProfile.totalPoints,
          level: studentProfile.level,
        },
        cohortInfo,
        progressSummary: {
          attendanceRate: Number(enrollment?.attendanceRate || 0),
          progressPercentage: Number(enrollment?.progressPercentage || 0),
          weekNumber: cohortInfo?.currentWeek || 0,
        },
        upcomingActivities: upcomingActivities.map(a => ({
          id: a.id,
          title: a.title,
          type: a.sessionType,
          scheduledStart: a.scheduledStart,
        })),
        recentActivity,
        badges: badges.map(b => ({
          id: b.id,
          earnedAt: b.earnedAt,
        })),
        concerns: [],
        greenlightAccount: {
          balance: greenlightBalance,
          recentTransactions: studentRewards.map(r => ({
            id: r.id,
            amount: Number(r.amount || 0),
            type: r.rewardType,
            date: r.createdAt,
            status: r.status,
          })),
        },
      },
    });
  } catch (error) {
    console.error('Parent dashboard error:', error);
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
 * GET /api/parents/children
 * Get all enrolled children
 */
router.get('/children', async (req: AuthRequest, res: Response) => {
  try {
    const parentId = req.user!.userId;

    const children = await db.query.studentProfiles.findMany({
      where: eq(studentProfiles.parentId, parentId),
    });

    const childrenWithDetails = await Promise.all(
      children.map(async (child) => {
        const user = await db.query.users.findFirst({
          where: eq(users.id, child.userId),
        });

        const enrollment = await db.query.enrollments.findFirst({
          where: and(
            eq(enrollments.studentId, child.userId),
            eq(enrollments.status, 'active')
          ),
        });

        return {
          id: child.userId,
          firstName: user?.firstName,
          lastName: user?.lastName,
          totalPoints: child.totalPoints,
          level: child.level,
          hasActiveEnrollment: !!enrollment,
        };
      })
    );

    res.status(200).json({
      success: true,
      data: {
        children: childrenWithDetails,
      },
    });
  } catch (error) {
    console.error('Children error:', error);
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to load children',
      },
    });
  }
});

/**
 * GET /api/parents/progress/:studentId
 * Get detailed progress for specific child
 */
router.get('/progress/:studentId', async (req: AuthRequest, res: Response) => {
  try {
    const parentId = req.user!.userId;
    const { studentId } = req.params;

    // Verify parent owns this child
    const studentProfile = await db.query.studentProfiles.findFirst({
      where: and(
        eq(studentProfiles.userId, studentId),
        eq(studentProfiles.parentId, parentId)
      ),
    });

    if (!studentProfile) {
      res.status(403).json({
        success: false,
        error: {
          code: 'FORBIDDEN',
          message: 'Not authorized to view this student',
        },
      });
      return;
    }

    // Get attendance records
    const attendanceRecords = await db.query.attendance.findMany({
      where: eq(attendance.studentId, studentId),
      orderBy: [desc(attendance.createdAt)],
    });

    // Get project submissions
    const submissions = await db.query.projectSubmissions.findMany({
      where: eq(projectSubmissions.studentId, studentId),
      orderBy: [desc(projectSubmissions.createdAt)],
    });

    res.status(200).json({
      success: true,
      data: {
        weeklyReports: [],
        attendance: attendanceRecords.map(a => ({
          id: a.id,
          classSessionId: a.classSessionId,
          status: a.attendanceStatus,
          checkInTime: a.checkInTime,
          durationMinutes: a.durationMinutes,
        })),
        projectSubmissions: submissions.map(s => ({
          id: s.id,
          projectId: s.projectId,
          status: s.status,
          score: s.score,
          feedback: s.feedback,
          submittedAt: s.submittedAt,
        })),
        teacherComments: [],
        aiInsights: 'Your child is making excellent progress!',
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

export default router;
