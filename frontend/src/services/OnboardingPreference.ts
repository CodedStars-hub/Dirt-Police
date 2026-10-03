import type { KeyValueStore } from '../i18n/LanguagePreference';

const STORAGE_KEY = 'dirtpolice.onboarding';
const SEEN = 'seen';

/** Whether this browser has seen the "How DirtPolice works" cards, so they open by themselves only once. */
export class OnboardingPreference {
  readonly #store: KeyValueStore;

  constructor(store: KeyValueStore) {
    this.#store = store;
  }

  seen(): boolean {
    return this.#store.getItem(STORAGE_KEY) === SEEN;
  }

  markSeen(): void {
    this.#store.setItem(STORAGE_KEY, SEEN);
  }
}
