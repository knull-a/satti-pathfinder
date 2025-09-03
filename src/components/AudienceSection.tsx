import { Card } from "@/components/ui/card";
import { 
  Users, 
  Briefcase, 
  Shield,
  CheckCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AudienceSection = () => {
  const { t } = useLanguage();
  const userTypes = [
    {
      title: t('audience.students.title'),
      description: t('audience.students.desc'),
      features: [
        t('features.testing.title'),
        "Цифровой профиль и портфолио", 
        "Поиск стажировок и вакансий",
        t('features.mentoring.title')
      ],
      icon: Users,
      gradient: "bg-gradient-to-br from-primary/20 to-accent/20"
    },
    {
      title: t('audience.universities.title'),
      description: t('audience.universities.desc'),
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
      title: t('audience.mentors.title'),
      description: t('audience.mentors.desc'),
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
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('audience.title').split(' ').slice(0, -1).join(' ')}
              <span className="bg-gradient-primary bg-clip-text text-transparent"> {t('audience.title').split(' ').slice(-1).join(' ')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая роль имеет свои уникальные возможности и инструменты для достижения целей
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <Card key={index} className={`p-8 ${type.gradient} text-accent-foreground border-0 hover:shadow-glow transition-all duration-300`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{type.title}</h3>
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;