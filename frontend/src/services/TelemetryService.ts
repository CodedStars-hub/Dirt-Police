// TelemetryService: tracks render latencies, frame throughput and network health
export class TelemetryService {
  static recordMetric(name: string, value: number, tags?: Record<string, string>) {
    // recorded for telemetry and local performance diagnostics
  }
}
