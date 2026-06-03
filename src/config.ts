export const PORT = Number(process.env.PORT) || 3000;

export const JWT_SECRET = process.env.JWT_SECRET || 'xyz123';

export const ORIGIN = process.env.ORIGIN || "http://localhost:5173";

export const ALLOWED_ORIGINS = [
  'https://eventime.vercel.app',
  'https://eventime-jqfzrmvt2-gabriel-emiliano-facios-projects.vercel.app'
];

export const WHITELIST = [ORIGIN, ...ALLOWED_ORIGINS];
