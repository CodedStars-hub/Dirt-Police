import type { DirtPoliceDb } from './DirtPoliceDb';
import type { MetaStore } from './ReportStore';

export class IndexedDbMetaStore implements MetaStore {
  readonly #db: DirtPoliceDb;

  constructor(db: DirtPoliceDb) {
    this.#db = db;
  }

  async get(key: string): Promise<string | undefined> {
    return (await this.#db.open()).get('meta', key);
  }

  async set(key: string, value: string): Promise<void> {
    await (await this.#db.open()).put('meta', value, key);
  }
}
