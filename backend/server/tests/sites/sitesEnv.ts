// Every variable the sites routes read (SitesSettings and AuthSettings), with placeholder ids.
export const SITES_ENV = {
  DIRTPOLICE_STAGE: "dev",
  SITES_TABLE: "dirtpolice-dev-sites",
  VOTES_TABLE: "dirtpolice-dev-votes",
  CLEANUPS_TABLE: "dirtpolice-dev-cleanups",
  REPORTS_TABLE: "dirtpolice-dev-reports",
  DEVICES_TABLE: "dirtpolice-dev-devices",
  USERS_TABLE: "dirtpolice-dev-users",
  SCORES_TABLE: "dirtpolice-dev-scores",
  ORIGINALS_BUCKET: "dirtpolice-dev-originals-000000000000",
  PUBLIC_BASE_URL: "https://d111111abcdef8.cloudfront.net",
  REPORTS_QUEUE_URL: "https://sqs.ap-south-1.amazonaws.com/000000000000/dirtpolice-dev-reports",
  COGNITO_USER_POOL_ID: "ap-south-1_AbCdEf123",
  COGNITO_CLIENT_ID: "test-client-id",
};
