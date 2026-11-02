export class BadgeEvaluator {
  static evaluate(verifiedReports: number): string[] {
    if (verifiedReports >= 10) return ["neighborhood-guardian"];
    return ["first-reporter"];
  }
}
