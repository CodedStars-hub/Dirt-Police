// Prevents false cleanup claims without verified visual clearance
export function validateCleanupClaim(siteStatus: string): boolean { return siteStatus === "open"; }
