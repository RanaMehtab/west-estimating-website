/**
 * Tiny fetch wrapper for the backend API routes under app/api/*.
 * Same-origin, no CORS needed — works identically in dev and on
 * Cloudflare Workers.
 */

const BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }
  if (!res.ok) {
    const error = new Error(data?.error || 'Request failed');
    error.status = res.status;
    error.body = data;
    throw error;
  }
  return data;
}

export const api = {
  listServices: () => request('/services'),
  getService: (slug) => request(`/services/${slug}`),
  submitContact: (payload) => request('/contact', { method: 'POST', body: JSON.stringify(payload) })
};
