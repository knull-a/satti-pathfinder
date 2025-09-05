import apiClient from '@/lib/api';

export interface NewsletterData {
  name: string;
  email: string;
}

export interface NewsletterResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const newsletterService = {
  toggleUser: async (data: NewsletterData): Promise<NewsletterResponse> => {
    const response = await apiClient.post<NewsletterResponse>('/newsletter/subscribe', data);
    return response.data;
  },
};
