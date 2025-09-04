export interface NewsAuthor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  type: 'OPPORTUNITY' | 'EVENT' | 'ANNOUNCEMENT';
  status: 'PUBLISHED' | 'DRAFT';
  authorId: string;
  imageUrl?: string;
  summary: string;
  tags: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: NewsAuthor;
}

export interface NewsResponse {
  success: boolean;
  data: {
    news: NewsItem[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}