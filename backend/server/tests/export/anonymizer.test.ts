import { describe, it, expect } from "vitest";
import { DataAnonymizer } from "../../src/services/export/DataAnonymizer.js";
describe("Anonymizer", () => { it("removes email", () => { expect(DataAnonymizer.anonymize({ device_id: "1", reporter_email: "a@b.com", val: 5 })).toEqual({ val: 5 }); }); });
