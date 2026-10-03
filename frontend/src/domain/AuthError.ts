import { DirtPoliceError } from './DirtPoliceError';

export type AuthProblem =
  | 'wrong_credentials'
  | 'exists'
  | 'bad_code'
  | 'not_confirmed'
  | 'weak_password'
  | 'too_many'
  | 'network'
  | 'unavailable'
  | 'unknown';

export class AuthError extends DirtPoliceError {
  readonly problem: AuthProblem;

  constructor(problem: AuthProblem, message: string) {
    super(message);
    this.problem = problem;
  }
}
