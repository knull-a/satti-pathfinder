import apiClient from '@/lib/api';
import { NewsResponse } from '@/types/news';

export const newsService = {
  getNews: async (page: number = 1, limit: number = 12): Promise<NewsResponse> => {
    const response = await apiClient.get<NewsResponse>(`/news?page=${page}&limit=${limit}`);
    return response.data;
  },
};