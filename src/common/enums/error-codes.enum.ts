export enum ErrorCode {
  EMAIL_ALREADY_REGISTERED = 'EMAIL_ALREADY_REGISTERED',
  REGISTRATION_FAILED = 'REGISTRATION_FAILED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  EMAIL_NO_AUTHENTICATED = 'EMAIL_NO_AUTHENTICATED',
  INVALID_LINK_EMAIL_VERIFICATION = 'INVALID_LINK_EMAIL_VERIFICATION',
  INVALID_LINK_CONFIRM_INVITATION = 'INVALID_LINK_CONFIRM_INVITATION',
  INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
  SERVER_ERROR = 'SERVER_ERROR',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL',
  OTP_INVALID = 'OTP_INVALID',
  MISSING_INPUT = 'MISSING_INPUT_INVALID',
  ACCOUNT_NOT_FOUND = 'ACCOUNT_NOT_FOUND',
  WORKSPACE_NOT_FOUND = 'WORKSPACE_NOT_FOUND',
  INVITATION_NOT_FOUND = 'INVITATION_NOT_FOUND',
  EMAIL_DEACTIVATED = 'EMAIL_DEACTIVATED',
  TOTP_INVALID = 'TOTP_INVALID',
  CONTACT_INFO_NOT_FOUND = 'CONTACT_INFO_NOT_FOUND',
  NO_SHARING_MEMBERS_PROVIDED = 'NO_SHARING_MEMBERS_PROVIDED',
  MEMBER_NOT_FOUND = 'MEMBER_NOT_FOUND',
  HIGH_LEVEL_PASSWORD_NOT_FOUND = 'HIGH_LEVEL_PASSWORD_NOT_FOUND',
  NOTIFICATION_NOT_FOUND = 'NOTIFICATION_NOT_FOUND',
  ACCOUNT_VERSION_NOT_FOUND = 'ACCOUNT_VERSION_NOT_FOUND',
  NEW_SUBSCRIPTION_HAS_LOWER_TIER_THAN_CURRENT_SUBSCRIPTION = 'NEW_SUBSCRIPTION_HAS_LOWER_TIER_THAN_CURRENT_SUBSCRIPTION',
}