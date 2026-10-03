import { DirtPoliceError } from './DirtPoliceError';

/** denied: location is blocked for the app; unavailable: the phone's location is off or gives no fix; timeout: too slow. */
export type LocationProblem = 'denied' | 'unavailable' | 'timeout';

export class LocationError extends DirtPoliceError {
  readonly problem: LocationProblem;

  constructor(problem: LocationProblem, message: string) {
    super(message);
    this.problem = problem;
  }
}
