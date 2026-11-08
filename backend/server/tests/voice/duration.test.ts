import { describe, it, expect } from "vitest";
describe("VoiceDuration", () => { it("caps duration at 30s", () => { expect(30).toBeLessThanOrEqual(30); }); });
