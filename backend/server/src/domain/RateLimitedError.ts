import { DirtPoliceError, type ErrorCode } from "./errors.js";

export class RateLimitedError extends DirtPoliceError {
  override readonly code: ErrorCode = "rate_limited";
}
