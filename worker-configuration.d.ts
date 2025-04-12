// Generated by Wrangler by running `wrangler types`

interface Env {
  file_drops: KVNamespace
  ENVIRONMENT: string
  SHARE_PORT: string
  SHARE_MAX_SIZE_IN_MB: string
  SHARE_DURATION: string
  ADMIN_TOKEN?: string
  DB: D1Database
  ASSETS: Fetcher
  UPLOAD_LIMIT?: RateLimit
}
