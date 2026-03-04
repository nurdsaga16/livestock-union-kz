import { useCallback, useEffect, useState } from 'react';
import type { NewsArticle } from '@/types/news';
import { fetchNewsList, type NewsListParams } from '@/services/news';

type UseNewsReturn = {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  totalElements: number;
  totalPages: number;
  refetch: () => void;
};

export function useNews(params: NewsListParams = {}): UseNewsReturn {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const serializedParams = JSON.stringify(params);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNewsList(JSON.parse(serializedParams) as NewsListParams);
      setArticles(data.content);
      setTotalElements(data.totalElements);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось загрузить новости');
    } finally {
      setLoading(false);
    }
  }, [serializedParams]);

  useEffect(() => {
    load();
  }, [load]);

  return { articles, loading, error, totalElements, totalPages, refetch: load };
}
