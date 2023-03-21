export type CommunityApprover = {
  userId: string;
};

export type Community = {
  id: string;
  name: string;
  approvers?: CommunityApprover[];
};

export type Position =
  | 'Jr. Software Engineer'
  | 'Software Engineer'
  | 'Sr. Software Engineer 1'
  | 'Sr. Software Engineer 2'
  | 'Lead Software Engineer'
  | 'Principal Software Engineer'
  | 'Chief Software Engineer'
  | 'Distinguished Software Engineer';

export interface User {
  userId: string;
  email: string;
  status: 'Active' | 'Inactive';
  userRoles: UserRole[];
}

export interface Employee {
  employeeId: string;
  firstName: string;
  lastName: string;
  fullname: string;
  softvisionEmail: string;
  dateHired: string;
  managerName: string;
  position: Position;
  community: Community;
}

export interface GoogleUser {
  email: string;
  familyName: string;
  givenName: string;
  name: string;
  pictureSource: string;
}

export type UserRole = 'admin' | 'employee' | 'approver';

export interface Activity {
  activityCategory: string;
  activityId: string;
  name: string;
  points: number;
}

export interface ActivityCategory {
  activityCategoryId: number;
  name: string;
}

export type CECRequestStatus =
  | 'Pending for Approval'
  | 'Draft'
  | 'Rejected'
  | 'Approved';

export type CECRequestAttachment = {
  fileName: string;
  fileSize: number;
  signedUrl: string;
};

export type CECRequest = {
  cecRequestId: string;
  userId: string;
  activity: Activity;
  activityDescription: string;
  dateCreated: string;
  dateStarted: string;
  dateCompleted: string;
  status: CECRequestStatus;
  attachments: CECRequestAttachment[];
  dateEvaluated?: string;
  approverUserId?: string;
  approverComment?: string;
};
