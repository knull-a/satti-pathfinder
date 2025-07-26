import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Calendar,
  ExternalLink,
  Newspaper,
  Star,
  TrendingUp
} from "lucide-react";

const NewsSection = () => {
  return (
    <section className="py-20 md:py-32">
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
                BALA STORE — первая площадка в Казахстане для заработка подростков
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Уникальная платформа, где подростки развивают предпринимательское мышление через реальную практику: 
                продажи, обучение, участие в ярмарках, челленджах и мастер-классах от экспертов.
              </p>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h4 className="font-semibold text-lg">Что включает участие:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-success" />
                    Обучение основам продаж и маркетинга
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-success" />
                    Участие в ярмарках и выставках
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-success" />
                    Челленджи и конкурсы с призами
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-success" />
                    Мастер-классы от успешных предпринимателей
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Оставить заявку
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  Узнать больше
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
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
                <Button variant="outline" size="sm" className="w-full">
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
                <Button variant="outline" size="sm" className="w-full">
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
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Показать все новости
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;