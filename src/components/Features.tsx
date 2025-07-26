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

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Профориентационный тест",
      description: "Узнай свои склонности и способности с помощью научно обоснованного тестирования",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Наставники и эксперты",
      description: "Общайся с профессионалами из разных сфер и получай ценные советы",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Briefcase,
      title: "Вакансии и стажировки",
      description: "Найди первые возможности для работы и стажировок по интересующим направлениям",
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
      title: "Отслеживание прогресса",
      description: "Следи за своим развитием и получай персональные рекомендации",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  const userTypes = [
    {
      title: "Для подростков 12-17 лет",
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
      title: "Для работодателей",
      description: "Найдите талантливых молодых специалистов для своей команды",
      features: [
        "Размещение вакансий и задач",
        "Поиск кандидатов по критериям",
        "Безопасное взаимодействие",
        "Модерация всех активностей"
      ],
      icon: Briefcase,
      gradient: "bg-gradient-to-br from-success/20 to-primary/20"
    },
    {
      title: "Для наставников",
      description: "Делитесь опытом и помогайте молодым людям найти свой путь",
      features: [
        "Профиль эксперта",
        "Система менторинга",
        "Публикация советов",
        "Рейтинговая система"
      ],
      icon: Shield,
      gradient: "bg-gradient-to-br from-accent/20 to-success/20"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Все для успешного
            <span className="bg-gradient-primary bg-clip-text text-transparent"> старта карьеры</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Платформа объединяет подростков, наставников и работодателей для создания 
            безопасной экосистемы профориентации и карьерного развития
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

        {/* User Types Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Для кого создана платформа</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждая роль имеет свои уникальные возможности и инструменты для достижения целей
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <Card key={index} className={`p-8 ${type.gradient} border-0 hover:shadow-glow transition-all duration-300`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold">Для студентов и подростков</h4>
                  </div>
                  
                  <p className="text-muted-foreground">{type.description}</p>
                  
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group">
                    Узнать больше
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;