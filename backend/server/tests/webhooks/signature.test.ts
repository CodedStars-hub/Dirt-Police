import { describe, it, expect } from "vitest";
import { WebhookDispatcher } from "../../src/services/webhooks/WebhookDispatcher.js";
describe("WebhookDispatcher", () => { it("generates matching signature", () => { expect(WebhookDispatcher.sign("test", "secret")).toHaveLength(64); }); });
