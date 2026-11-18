import { describe, it, expect } from "vitest";
import { BadgeEvaluator } from "../../src/services/badges/BadgeEvaluator.js";
describe("BadgeEvaluator", () => { it("awards guardian on 10 reports", () => { expect(BadgeEvaluator.evaluate(10)).toContain("neighborhood-guardian"); }); });
