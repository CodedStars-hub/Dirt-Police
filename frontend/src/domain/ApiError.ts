import { DirtPoliceError } from './DirtPoliceError';

export class ApiError extends DirtPoliceError {
  readonly status: number;
  readonly code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
