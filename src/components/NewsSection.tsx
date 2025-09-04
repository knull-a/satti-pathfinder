import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Newspaper,
  Star,
  TrendingUp
} from "lucide-react";
import NewsletterForm from "./NewsletterForm";
import { useLanguage } from "@/contexts/LanguageContext";

const NewsSection = () => {
  const { t } = useLanguage();
  
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News - BALA STORE */}
          <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 hover:shadow-glow transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  {t('news.bala.badge')}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  {t('news.bala.date')}
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold">
                {t('news.bala.title')}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('news.bala.desc')}
              </p>
              
              {/* Instagram Video */}
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                <iframe
                  src="https://www.instagram.com/reel/DMh8v6sTY3n/embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  title="BALA STORE Instagram Reel"
                  loading="lazy"
                />
              </div>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-lg">🔧 {t('news.bala.benefits.title')}</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>{t('news.bala.benefits.sell')}</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>{t('news.bala.benefits.experience')}</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>{t('news.bala.benefits.business')}</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>{t('news.bala.benefits.earn')}</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>{t('news.bala.benefits.participate')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-lg">📅 {t('news.bala.formats.title')}</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    {t('news.bala.formats.battle')}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    {t('news.bala.formats.fairs')}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    {t('news.bala.formats.masterclass')}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    {t('news.bala.formats.challenges')}
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-3">🎯 {t('news.bala.mission.title')}</h4>
                <p className="text-muted-foreground">
                  {t('news.bala.mission.desc')}
                </p>
              </div>
              
            </div>
          </Card>

          {/* Sidebar with course cards and banners */}
          <div className="space-y-6">
            {/* Mini Course Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-background border-primary/20">
              <div className="space-y-4">
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium w-fit">
                  {t('news.courses.career.badge')}
                </div>
                <h4 className="text-lg font-bold">{t('news.courses.career.title')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('news.courses.career.desc')}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
                >
                  {t('news.courses.career.cta')}
                </Button>
              </div>
            </Card>

            {/* Promotional Banner */}
            <Card className="p-6 bg-gradient-to-br from-success/5 to-background border-success/20">
              <div className="space-y-4">
                <div className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium w-fit">
                  {t('news.events.jobFair.badge')}
                </div>
                <h4 className="text-lg font-bold">{t('news.events.jobFair.title')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('news.events.jobFair.desc')}
                </p>
                <div className="text-xs text-muted-foreground">
                  {t('news.events.jobFair.date')}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
                >
                  {t('news.events.jobFair.cta')}
                </Button>
              </div>
            </Card>

            {/* Another News Card */}
            <Card className="p-6 bg-gradient-card">
              <div className="space-y-4">
                <h4 className="text-lg font-bold">{t('news.events.internships.title')}</h4>
                <p className="text-sm text-muted-foreground">
                  {t('news.events.internships.desc')}
                </p>
                <div className="text-xs text-muted-foreground">
                  {t('news.events.internships.date')}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
                >
                  {t('news.events.internships.cta')}
                </Button>
              </div>
            </Card>
          </div>
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