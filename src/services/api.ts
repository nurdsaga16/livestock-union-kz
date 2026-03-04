export const API_BASE = import.meta.env.VITE_API_URL ?? '/api';

export async function apiFetch<T>(
  endpoint: string,
  init?: RequestInit,
): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  const res = await fetch(url, init);

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    const message =
      (body as { detail?: string })?.detail ?? `API error ${res.status}`;
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}

export function fileUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('http')) return path;
  return `${API_BASE}/files/${path.replace(/^\/?(files\/)?/, '')}`;
}
