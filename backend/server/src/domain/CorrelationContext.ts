// Distributed trace correlation for SQS message handling
export interface CorrelationContext { traceId: string; reportId: string; }
