/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  readonly PUBLIC_SANITY_DATASET: string;
  readonly PUBLIC_SANITY_API_VERSION: string;
  readonly SANITY_API_TOKEN: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
  readonly RECAPTCHA_SECRET_KEY: string;
  readonly MAIL_USER: string;
  readonly MAIL_PASS: string;
  readonly MAIL_TO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
