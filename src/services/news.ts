import type { NewsArticle, PaginatedResponse } from '@/types/news';
import { apiFetch } from './api';

export type NewsListParams = {
  query?: string;
  page?: number;
  size?: number;
  sort?: string;
};

export async function fetchNewsList(
  params: NewsListParams = {},
): Promise<PaginatedResponse<NewsArticle>> {
  const sp = new URLSearchParams();
  if (params.query) sp.set('query', params.query);
  if (params.page !== undefined) sp.set('page', String(params.page));
  if (params.size !== undefined) sp.set('size', String(params.size));
  if (params.sort) sp.set('sort', params.sort);

  const qs = sp.toString();
  return apiFetch<PaginatedResponse<NewsArticle>>(
    `/news${qs ? `?${qs}` : ''}`,
  );
}

export async function fetchNewsById(id: number): Promise<NewsArticle> {
  return apiFetch<NewsArticle>(`/news/${id}`);
}
