import { DirtPoliceError, ValidationError, type ErrorCode } from "../errors.js";

export class NotVerifiedError extends DirtPoliceError {
  override readonly code: ErrorCode = "not_verified";
}

export class NoLocalBodyError extends DirtPoliceError {
  override readonly code: ErrorCode = "no_local_body";
}

export class RateLimitedError extends DirtPoliceError {
  override readonly code: ErrorCode = "rate_limited";
}

export class ChannelNotApplicableError extends ValidationError {}
