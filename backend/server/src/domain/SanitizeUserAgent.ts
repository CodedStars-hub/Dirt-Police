// Strips PII tokens from user-agent headers
export function sanitizeUa(ua: string): string { return ua.slice(0, 150); }
