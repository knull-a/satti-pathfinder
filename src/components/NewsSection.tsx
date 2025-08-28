import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Newspaper,
  Star,
  TrendingUp
} from "lucide-react";
import NewsletterForm from "./NewsletterForm";

const NewsSection = () => {
  return (
    <section id="news" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Newspaper className="w-4 h-4" />
            <span>Новости и курсы</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Актуальные возможности
            <span className="bg-gradient-primary bg-clip-text text-transparent"> для развития</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Следите за новостями платформы, участвуйте в курсах и не пропускайте важные события
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News - BALA STORE */}
          <Card className="lg:col-span-2 p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 hover:shadow-glow transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  Рекомендуем
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  25 января 2025
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold">
                BALA STORE — предпринимательство для подростков
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Первая в Казахстане офлайн- и онлайн-платформа, где подростки могут зарабатывать и развивать 
                предпринимательское мышление. Это не просто маркет — это учебная и практическая среда для 
                юных бизнесменов 12–17 лет.
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
                <h4 className="font-semibold text-lg">🔧 Что дает BALA STORE подростку:</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>Продавать свои товары или услуги (ручная работа, стикеры, консультации, выпечка и др.)</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>Получать опыт реальных продаж — с арендой, рекламой и фидбеком</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>Понимать основы бизнеса: идея → упаковка → продвижение → сделка</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>Зарабатывать первые реальные деньги</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-4 h-4 mr-2 text-success mt-1 flex-shrink-0" />
                    <span>Участвовать в маркетах, челленджах, презентациях, шоу-питчингах</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-lg">📅 Регулярные форматы:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    BALA BATTLE — соревнования по продажам
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    Бизнес-ярмарки в ТРЦ и коворкингах
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    Мастер-классы от предпринимателей
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-accent" />
                    Онлайн-челленджи с наставничеством
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-3">🎯 Миссия проекта:</h4>
                <p className="text-muted-foreground">
                  Развивать лидерство, самостоятельность и креативность у подростков. 
                  Платформа становится частью экосистемы осознанного взросления.
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
                  Мини-курс
                </div>
                <h4 className="text-lg font-bold">Основы карьерного планирования</h4>
                <p className="text-sm text-muted-foreground">
                  5-дневный курс о том, как правильно выбрать профессию и построить карьерный путь
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
                >
                  Записаться
                </Button>
              </div>
            </Card>

            {/* Promotional Banner */}
            <Card className="p-6 bg-gradient-to-br from-success/5 to-background border-success/20">
              <div className="space-y-4">
                <div className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium w-fit">
                  Job Fair 2025
                </div>
                <h4 className="text-lg font-bold">Ярмарка профессий</h4>
                <p className="text-sm text-muted-foreground">
                  Встречайся с работодателями, участвуй в мастер-классах и находи стажировки
                </p>
                <div className="text-xs text-muted-foreground">
                  15-16 февраля, Астана
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
                >
                  Участвовать
                </Button>
              </div>
            </Card>

            {/* Another News Card */}
            <Card className="p-6 bg-gradient-card">
              <div className="space-y-4">
                <h4 className="text-lg font-bold">IT-стажировки от ведущих компаний</h4>
                <p className="text-sm text-muted-foreground">
                  Новые возможности для молодых разработчиков в крупнейших IT-компаниях Казахстана
                </p>
                <div className="text-xs text-muted-foreground">
                  20 января 2025
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
                >
                  Подробнее
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