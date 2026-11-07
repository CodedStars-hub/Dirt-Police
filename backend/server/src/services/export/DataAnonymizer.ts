export class DataAnonymizer {
  static anonymize(row: any) { const { device_id, reporter_email, ...safe } = row; return safe; }
}
