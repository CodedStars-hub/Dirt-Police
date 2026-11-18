export const DataAnonymizer = {
  anonymize(row: Readonly<Record<string, unknown>>): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(row).filter(([key]) => key !== "device_id" && key !== "reporter_email"),
    );
  },
};
