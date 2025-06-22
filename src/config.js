export const PORT = process.env.PORT || 3000;
export const PG_PORT = process.env.PG_PORT || 5432;
export const PG_HOST = process.env.PG_HOST || 'localhost';
export const PG_USER = process.env.PG_USER || 'postgres';
export const PG_PASSWORD = process.env.PG_PASSWORD || 'postgres';
export const PG_DB = process.env.PG_DB || 'railway';

export const ORIGIN = process.env.ORIGIN || "http://localhost:5173";

export const ALLOWED_ORIGINS = [
  'https://eventime.vercel.app',
  'https://eventime-jqfzrmvt2-gabriel-emiliano-facios-projects.vercel.app'
];

export const WHITELIST = [ORIGIN, ...ALLOWED_ORIGINS];
