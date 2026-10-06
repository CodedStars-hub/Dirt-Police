import 'fake-indexeddb/auto';
import { deleteDB, openDB } from 'idb';
import { beforeEach, describe, expect, it } from 'vitest';
import { QueuedReport } from '../src/domain/QueuedReport';
import { IndexedDbReportStore } from '../src/services/IndexedDbReportStore';
import { IndexedDbScanStore } from '../src/services/IndexedDbScanStore';
import { DirtPoliceDb } from '../src/services/DirtPoliceDb';
import { sampleDraft } from './snapFakes';

beforeEach(async () => {
  await deleteDB('dirtpolice');
});

describe('DirtPoliceDb upgrade from version 1', () => {
  it('keeps a photo queued on version 1 and adds the scans store', async () => {
    const report = QueuedReport.capture(sampleDraft(), new Uint8Array([1, 2]).buffer, new Date('2026-10-10T04:00:00Z'));
    const v1 = await openDB('dirtpolice', 1, {
      upgrade(db) {
        db.createObjectStore('reports', { keyPath: 'id' });
        db.createObjectStore('meta');
      },
    });
    await v1.put('reports', report.data);
    v1.close();
    const db = new DirtPoliceDb();
    expect((await new IndexedDbReportStore(db).all()).map((row) => row.id)).toEqual([report.id]);
    expect(await new IndexedDbScanStore(db).all()).toEqual([]);
    expect((await db.open()).version).toBe(2);
  });
});

describe('DirtPoliceDb in two tabs', () => {
  it('closes its connection when a newer version wants to upgrade, then reopens', async () => {
    const db = new DirtPoliceDb();
    await db.open();
    const newer = await openDB('dirtpolice', 3);
    expect(newer.version).toBe(3);
    newer.close();
    await deleteDB('dirtpolice');
    expect((await db.open()).version).toBe(2);
  });
});
