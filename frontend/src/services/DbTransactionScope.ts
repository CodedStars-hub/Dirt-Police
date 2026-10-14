// Scoped transaction helper for IndexedDB operations
export async function runInTransaction<T>(scope: () => Promise<T>): Promise<T> { return await scope(); }
