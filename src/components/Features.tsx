import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Users, 
  Briefcase, 
  Shield, 
  MessageCircle, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Brain,
      title: t('features.testing.title'),
      description: t('features.testing.desc'),
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: t('features.mentoring.title'),
      description: t('features.mentoring.desc'),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Briefcase,
      title: t('features.opportunities.title'),
      description: t('features.opportunities.desc'),
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Shield,
      title: "Безопасная среда",
      description: "Все контакты проходят модерацию для обеспечения безопасности подростков",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      icon: MessageCircle,
      title: "Система уведомлений",
      description: "Получай уведомления о новых возможностях и откликах на твой профиль",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: TrendingUp,
      title: t('features.networking.title'),
      description: t('features.networking.desc'),
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const userTypes = [
    {
      title: "Для подростков и студентов",
      description: "Открой свои таланты и найди направление для будущей карьеры",
      features: [
        "Профориентационное тестирование",
        "Цифровой профиль и портфолио", 
        "Поиск стажировок и вакансий",
        "Общение с наставниками"
      ],
      icon: Users,
      gradient: "bg-gradient-to-br from-primary/20 to-accent/20"
    },
    {
      title: "Для университетов и работодателей",
      description: "Найдите талантливых молодых специалистов для своей команды",
      features: [
        "Размещение вакансий и задач",
        "Поиск кандидатов по критериям",
        "Безопасное взаимодействие",
        "Модерация всех активностей"
      ],
      icon: Briefcase,
      gradient: "bg-gradient-to-br from-[hsl(40,85%,60%)]/20 to-primary/20"
    },
    {
      title: "Для менторов",
      description: "Делитесь опытом и помогайте молодым людям найти свой путь",
      features: [
        "Профиль эксперта",
        "Система менторинга",
        "Публикация советов",
        "Рейтинговая система"
      ],
      icon: Shield,
      gradient: "bg-gradient-to-br from-accent/20 to-[hsl(14,65%,50%)]/20"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Users className="w-4 h-4" />
            <span>{t('features.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('features.title').split(' ').slice(0, -2).join(' ')}
            <span className="bg-gradient-primary bg-clip-text text-transparent"> {t('features.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <div className="space-y-4">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;