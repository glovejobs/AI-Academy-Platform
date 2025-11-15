import { pgTable, uuid, varchar, text, timestamp, boolean, integer, decimal, jsonb, date, inet, pgEnum } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const userRoleEnum = pgEnum('user_role', ['student', 'parent', 'teacher', 'admin']);
export const enrollmentStatusEnum = pgEnum('enrollment_status', ['active', 'completed', 'dropped', 'on_hold']);
export const tierEnum = pgEnum('tier', ['base', 'premium']);
export const cohortStatusEnum = pgEnum('cohort_status', ['upcoming', 'active', 'completed', 'cancelled']);
export const sessionTypeEnum = pgEnum('session_type', ['live', 'recorded', 'workshop', 'office_hours']);
export const sessionStatusEnum = pgEnum('session_status', ['scheduled', 'in_progress', 'completed', 'cancelled']);
export const attendanceStatusEnum = pgEnum('attendance_status', ['present', 'absent', 'late', 'excused']);
export const submissionStatusEnum = pgEnum('submission_status', ['draft', 'submitted', 'under_review', 'revision_needed', 'approved', 'rejected']);
export const contentTypeEnum = pgEnum('content_type', ['video', 'reading', 'interactive', 'quiz', 'project']);
export const rewardTypeEnum = pgEnum('reward_type', ['cash', 'robux', 'gift_card', 'badge', 'certificate']);
export const rewardStatusEnum = pgEnum('reward_status', ['pending', 'approved', 'paid', 'declined']);
export const rarityEnum = pgEnum('rarity', ['common', 'uncommon', 'rare', 'epic', 'legendary']);
export const priorityEnum = pgEnum('priority', ['low', 'normal', 'high', 'urgent']);

// Users Table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: varchar('password_hash', { length: 255 }).notNull(),
  role: userRoleEnum('role').notNull(),
  firstName: varchar('first_name', { length: 100 }).notNull(),
  lastName: varchar('last_name', { length: 100 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 20 }),
  avatarUrl: text('avatar_url'),
  timezone: varchar('timezone', { length: 50 }).default('UTC'),
  isActive: boolean('is_active').default(true),
  isVerified: boolean('is_verified').default(false),
  lastLogin: timestamp('last_login'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  metadata: jsonb('metadata').default({}),
});

// Student Profiles
export const studentProfiles = pgTable('student_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  parentId: uuid('parent_id').references(() => users.id),
  dateOfBirth: date('date_of_birth').notNull(),
  gradeLevel: integer('grade_level'),
  schoolName: varchar('school_name', { length: 255 }),
  interests: text('interests').array(),
  learningStyle: varchar('learning_style', { length: 50 }),
  aiAssistantPreferences: jsonb('ai_assistant_preferences').default({}),
  resumeUrl: text('resume_url'),
  portfolioUrl: text('portfolio_url'),
  greenlightCardId: varchar('greenlight_card_id', { length: 100 }),
  totalPoints: integer('total_points').default(0),
  level: integer('level').default(1),
  experiencePoints: integer('experience_points').default(0),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Parent Profiles
export const parentProfiles = pgTable('parent_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  occupation: varchar('occupation', { length: 255 }),
  notificationPreferences: jsonb('notification_preferences').default({}),
  parentalControls: jsonb('parental_controls').default({}),
  stripeCustomerId: varchar('stripe_customer_id', { length: 100 }),
  subscriptionStatus: varchar('subscription_status', { length: 50 }),
  billingAddress: jsonb('billing_address'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Teacher Profiles
export const teacherProfiles = pgTable('teacher_profiles', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }).notNull(),
  bio: text('bio'),
  expertise: text('expertise').array(),
  yearsExperience: integer('years_experience'),
  certifications: text('certifications').array(),
  availability: jsonb('availability'),
  hourlyRate: decimal('hourly_rate', { precision: 10, scale: 2 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Bootcamps
export const bootcamps = pgTable('bootcamps', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  category: varchar('category', { length: 100 }),
  durationWeeks: integer('duration_weeks').default(8),
  ageMin: integer('age_min').default(12),
  ageMax: integer('age_max').default(17),
  maxStudents: integer('max_students').default(20),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  premiumPrice: decimal('premium_price', { precision: 10, scale: 2 }),
  curriculumOutline: jsonb('curriculum_outline'),
  learningObjectives: text('learning_objectives').array(),
  requiredTools: text('required_tools').array(),
  isActive: boolean('is_active').default(true),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Cohorts
export const cohorts = pgTable('cohorts', {
  id: uuid('id').primaryKey().defaultRandom(),
  bootcampId: uuid('bootcamp_id').references(() => bootcamps.id).notNull(),
  cohortName: varchar('cohort_name', { length: 255 }).notNull(),
  teacherId: uuid('teacher_id').references(() => users.id),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  currentWeek: integer('current_week').default(1),
  maxStudents: integer('max_students').default(20),
  enrolledCount: integer('enrolled_count').default(0),
  status: cohortStatusEnum('status').default('upcoming'),
  meetingSchedule: jsonb('meeting_schedule'),
  zoomLink: text('zoom_link'),
  slackChannel: text('slack_channel'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Enrollments
export const enrollments = pgTable('enrollments', {
  id: uuid('id').primaryKey().defaultRandom(),
  studentId: uuid('student_id').references(() => users.id).notNull(),
  cohortId: uuid('cohort_id').references(() => cohorts.id).notNull(),
  enrollmentDate: timestamp('enrollment_date').defaultNow(),
  completionDate: timestamp('completion_date'),
  status: enrollmentStatusEnum('status').default('active'),
  tier: tierEnum('tier').default('base'),
  paymentStatus: varchar('payment_status', { length: 50 }),
  stripeSubscriptionId: varchar('stripe_subscription_id', { length: 100 }),
  progressPercentage: decimal('progress_percentage', { precision: 5, scale: 2 }).default('0'),
  attendanceRate: decimal('attendance_rate', { precision: 5, scale: 2 }),
  finalGrade: varchar('final_grade', { length: 5 }),
  certificateIssued: boolean('certificate_issued').default(false),
  certificateUrl: text('certificate_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Lessons
export const lessons = pgTable('lessons', {
  id: uuid('id').primaryKey().defaultRandom(),
  bootcampId: uuid('bootcamp_id').references(() => bootcamps.id).notNull(),
  weekNumber: integer('week_number').notNull(),
  lessonNumber: integer('lesson_number').notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  learningObjectives: text('learning_objectives').array(),
  contentType: contentTypeEnum('content_type'),
  contentUrl: text('content_url'),
  videoUrl: text('video_url'),
  durationMinutes: integer('duration_minutes'),
  isRequired: boolean('is_required').default(true),
  prerequisites: uuid('prerequisites').array(),
  resources: jsonb('resources'),
  aiTutorContext: text('ai_tutor_context'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Projects
export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  bootcampId: uuid('bootcamp_id').references(() => bootcamps.id).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  clientName: varchar('client_name', { length: 255 }),
  clientBrief: text('client_brief'),
  weekAssigned: integer('week_assigned'),
  dueDateOffsetDays: integer('due_date_offset_days'),
  requirements: jsonb('requirements'),
  rubric: jsonb('rubric'),
  maxPoints: integer('max_points').default(100),
  submissionFormat: varchar('submission_format', { length: 50 }),
  isTeamProject: boolean('is_team_project').default(false),
  teamSize: integer('team_size'),
  estimatedHours: integer('estimated_hours'),
  resources: text('resources').array(),
  exampleSubmissions: text('example_submissions').array(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Project Submissions
export const projectSubmissions = pgTable('project_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  enrollmentId: uuid('enrollment_id').references(() => enrollments.id).notNull(),
  studentId: uuid('student_id').references(() => users.id).notNull(),
  submissionUrl: text('submission_url'),
  submissionFiles: text('submission_files').array(),
  submissionText: text('submission_text'),
  studentNotes: text('student_notes'),
  submittedAt: timestamp('submitted_at'),
  status: submissionStatusEnum('status').default('draft'),
  score: integer('score'),
  feedback: text('feedback'),
  feedbackData: jsonb('feedback_data'),
  reviewedBy: uuid('reviewed_by').references(() => users.id),
  reviewedAt: timestamp('reviewed_at'),
  revisionCount: integer('revision_count').default(0),
  aiPreliminaryFeedback: text('ai_preliminary_feedback'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Class Sessions
export const classSessions = pgTable('class_sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  cohortId: uuid('cohort_id').references(() => cohorts.id).notNull(),
  lessonId: uuid('lesson_id').references(() => lessons.id),
  sessionType: sessionTypeEnum('session_type'),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  scheduledStart: timestamp('scheduled_start').notNull(),
  scheduledEnd: timestamp('scheduled_end').notNull(),
  actualStart: timestamp('actual_start'),
  actualEnd: timestamp('actual_end'),
  zoomMeetingId: varchar('zoom_meeting_id', { length: 100 }),
  zoomJoinUrl: text('zoom_join_url'),
  recordingUrl: text('recording_url'),
  materials: jsonb('materials'),
  aiSummary: text('ai_summary'),
  status: sessionStatusEnum('status').default('scheduled'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Attendance
export const attendance = pgTable('attendance', {
  id: uuid('id').primaryKey().defaultRandom(),
  classSessionId: uuid('class_session_id').references(() => classSessions.id).notNull(),
  studentId: uuid('student_id').references(() => users.id).notNull(),
  checkInTime: timestamp('check_in_time'),
  checkOutTime: timestamp('check_out_time'),
  durationMinutes: integer('duration_minutes'),
  attendanceStatus: attendanceStatusEnum('attendance_status').default('absent'),
  participationScore: integer('participation_score'),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Achievements
export const achievements = pgTable('achievements', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  badgeIconUrl: text('badge_icon_url'),
  category: varchar('category', { length: 100 }),
  criteria: jsonb('criteria').notNull(),
  pointsValue: integer('points_value').default(0),
  rarity: rarityEnum('rarity'),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
});

// Student Achievements
export const studentAchievements = pgTable('student_achievements', {
  id: uuid('id').primaryKey().defaultRandom(),
  studentId: uuid('student_id').references(() => users.id).notNull(),
  achievementId: uuid('achievement_id').references(() => achievements.id).notNull(),
  earnedAt: timestamp('earned_at').defaultNow(),
  progressPercentage: decimal('progress_percentage', { precision: 5, scale: 2 }).default('100'),
  metadata: jsonb('metadata'),
});

// Rewards
export const rewards = pgTable('rewards', {
  id: uuid('id').primaryKey().defaultRandom(),
  studentId: uuid('student_id').references(() => users.id).notNull(),
  rewardType: rewardTypeEnum('reward_type'),
  amount: decimal('amount', { precision: 10, scale: 2 }),
  currency: varchar('currency', { length: 10 }),
  description: text('description'),
  earnedFor: varchar('earned_for', { length: 255 }),
  status: rewardStatusEnum('status').default('pending'),
  greenlightTransactionId: varchar('greenlight_transaction_id', { length: 100 }),
  approvedBy: uuid('approved_by').references(() => users.id),
  approvedAt: timestamp('approved_at'),
  paidAt: timestamp('paid_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

// AI Conversations
export const aiConversations = pgTable('ai_conversations', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  conversationContext: varchar('conversation_context', { length: 100 }),
  sessionId: uuid('session_id'),
  messages: jsonb('messages').array(),
  sentimentAnalysis: jsonb('sentiment_analysis'),
  topicsDiscussed: text('topics_discussed').array(),
  aiInsights: text('ai_insights'),
  flaggedForReview: boolean('flagged_for_review').default(false),
  flagReason: text('flag_reason'),
  reviewedBy: uuid('reviewed_by').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Notifications
export const notifications = pgTable('notifications', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  notificationType: varchar('notification_type', { length: 100 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  message: text('message').notNull(),
  link: text('link'),
  priority: priorityEnum('priority').default('normal'),
  isRead: boolean('is_read').default(false),
  readAt: timestamp('read_at'),
  expiresAt: timestamp('expires_at'),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Messages
export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  senderId: uuid('sender_id').references(() => users.id).notNull(),
  recipientId: uuid('recipient_id').references(() => users.id).notNull(),
  subject: varchar('subject', { length: 255 }),
  body: text('body').notNull(),
  parentMessageId: uuid('parent_message_id').references(() => messages.id),
  isRead: boolean('is_read').default(false),
  readAt: timestamp('read_at'),
  attachments: text('attachments').array(),
  createdAt: timestamp('created_at').defaultNow(),
  deletedBySender: boolean('deleted_by_sender').default(false),
  deletedByRecipient: boolean('deleted_by_recipient').default(false),
});

// Activity Logs
export const activityLogs = pgTable('activity_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  activityType: varchar('activity_type', { length: 100 }).notNull(),
  entityType: varchar('entity_type', { length: 50 }),
  entityId: uuid('entity_id'),
  description: text('description'),
  metadata: jsonb('metadata'),
  ipAddress: inet('ip_address'),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Progress Snapshots
export const progressSnapshots = pgTable('progress_snapshots', {
  id: uuid('id').primaryKey().defaultRandom(),
  enrollmentId: uuid('enrollment_id').references(() => enrollments.id).notNull(),
  weekNumber: integer('week_number').notNull(),
  attendanceRate: decimal('attendance_rate', { precision: 5, scale: 2 }),
  assignmentsCompleted: integer('assignments_completed'),
  assignmentsTotal: integer('assignments_total'),
  averageScore: decimal('average_score', { precision: 5, scale: 2 }),
  pointsEarned: integer('points_earned'),
  achievementsCount: integer('achievements_count'),
  engagementScore: decimal('engagement_score', { precision: 5, scale: 2 }),
  aiInsights: text('ai_insights'),
  createdAt: timestamp('created_at').defaultNow(),
});
