import crypto from "crypto";
export class WebhookDispatcher {
  static sign(payload: string, secret: string): string {
    return crypto.createHmac("sha256", secret).update(payload).digest("hex");
  }
}
