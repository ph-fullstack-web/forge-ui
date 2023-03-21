export enum UserTypes {
  Guest = 'Guest',
  Employee = 'Employee',
  CommunityManager = 'Community Manager',
}

export enum NotificationType {
  Success = 'success',
  Error = 'error',
}

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum TableRowDataType {
  CECRequestDraft = 'cec-request-draft',
  CECRequestPending = 'cec-request-pending',
  CECRequest = 'cec-request',
}

export enum PageTitle {
  CECTracker = 'CEC Request Dashboard',
  CECReviewer = 'Approve/Reject CEC Request',
  AccountDetails = 'Account Details',
  Skills = 'Skills',
}

export enum CECRequestStatus {
  Approved = 'Approved',
  Pending = 'Pending for Approval',
  Rejected = 'Rejected',
  Draft = 'Draft',
}

export enum CECCategory {
  MasterClass = 'Master Class',
  Udemy = 'Udemy',
}

export enum TableActions {
  Edit = 'Edit',
  Review = 'Review',
  View = 'View',
  Delete = 'Delete',
}

export enum ModalType {
  Information = 'Information',
  Warning = 'Warning',
}
