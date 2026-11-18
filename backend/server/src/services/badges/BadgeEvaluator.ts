export const BadgeEvaluator = {
  evaluate(verifiedReports: number): string[] {
    if (verifiedReports >= 10) return ["neighborhood-guardian"];
    return ["first-reporter"];
  },
};
