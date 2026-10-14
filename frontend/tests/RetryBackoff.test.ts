import { describe, it, expect } from "vitest";
import { calculateBackoff } from "../src/services/RetryBackoff";
describe("RetryBackoff", () => { it("scales within upper bound", () => { expect(calculateBackoff(5)).toBeLessThanOrEqual(30500); }); });
