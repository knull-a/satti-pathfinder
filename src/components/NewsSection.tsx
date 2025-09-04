import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Newspaper,
  Star,
  AlertCircle
} from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNews } from "@/hooks/useNews";
import { format } from "date-fns";
import { getNewsTypeTranslationKey } from "@/lib/utils";

const NewsSection = () => {
  const { t } = useLanguage();
  const { data: newsData, isLoading, error } = useNews(1, 3);
  
  return (
    <section id="news" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Newspaper className="w-4 h-4" />
            <span>{t('news.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('news.title').split(' ').slice(0, -2).join(' ')}
            <span className="bg-gradient-primary bg-clip-text text-transparent"> {t('news.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        {error && (
          <Card className="p-8 border-destructive/20 bg-destructive/5">
            <div className="flex items-center space-x-3 text-destructive">
              <AlertCircle className="w-5 h-5" />
              <p>{t('news.error')}</p>
            </div>
          </Card>
        )}

        {isLoading ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 p-8">
              <div className="space-y-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-8 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
              </div>
            </Card>
            <div className="space-y-6">
              {Array.from({length: 2}).map((_, i) => (
                <Card key={i} className="p-6">
                  <div className="space-y-4 animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : newsData?.data?.news && newsData.data.news.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured News - First news item */}
            <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 hover:shadow-glow transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    {t(`news.types.${getNewsTypeTranslationKey(newsData.data.news[0].type)}`)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {format(new Date(newsData.data.news[0].publishedAt), 'dd.MM.yyyy')}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold">
                  {newsData.data.news[0].title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {newsData.data.news[0].summary}
                </p>
                
                {newsData.data.news[0].imageUrl && (
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <img
                      src={newsData.data.news[0].imageUrl}
                      alt={newsData.data.news[0].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                
                {newsData.data.news[0].tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {newsData.data.news[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Sidebar with other news items */}
            <div className="space-y-6">
              {newsData.data.news.slice(1).map((newsItem) => (
                <Card key={newsItem.id} className="p-6 bg-gradient-to-br from-primary/5 to-background border-primary/20">
                  <div className="space-y-4">
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                      {t(`news.types.${getNewsTypeTranslationKey(newsItem.type)}`)}
                    </div>
                    <h4 className="text-lg font-bold">{newsItem.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {newsItem.summary}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {format(new Date(newsItem.publishedAt), 'dd.MM.yyyy')}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-muted-foreground">
                        {newsItem.author.firstName} {newsItem.author.lastName}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">{t('news.empty')}</p>
          </Card>
        )}

        {/* More News Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="px-8 py-3"
            onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
          >
            {t('news.moreDetails')}
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="max-w-md mx-auto mt-12">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;