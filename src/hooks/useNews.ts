import { useQuery } from '@tanstack/react-query';
import { newsService } from '@/services/newsService';

export const useNews = (page: number = 1, limit: number = 3) => {
  return useQuery({
    queryKey: ['news', page, limit],
    queryFn: () => newsService.getNews(page, limit),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};