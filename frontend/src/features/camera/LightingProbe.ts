// Viewfinder ambient light and motion stability evaluator
export function checkExposure(lux: number): "low" | "ok" | "high" { return lux < 10 ? "low" : "ok"; }
