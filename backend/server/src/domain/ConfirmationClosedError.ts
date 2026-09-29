import { DirtPoliceError, type ErrorCode } from "./errors.js";

// The report is not waiting for its reporter's answer: answered otherwise, never asked, or its window passed (contracts v1.16).
export class ConfirmationClosedError extends DirtPoliceError {
  override readonly code: ErrorCode = "confirmation_closed";
}
