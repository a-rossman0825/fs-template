export const dev = window.location.origin.includes('localhost');
export const baseURL = dev ? 'http://localhost:3000' : '';
export const useSockets = false;
export const VITE_AUTH0_DOMAIN = 'dev-gp7tg4z8hq16f7fn.us.auth0.com';
export const VITE_AUTH0_CLIENT_ID = 'wZT8GTLfsWqirIkH3B2SN2cuEBzK6rst';
export const VITE_AUTH0_AUDIENCE = 'https://testserver.com';