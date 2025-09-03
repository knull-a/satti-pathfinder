import { Card } from "@/components/ui/card";
import { Zap } from "lucide-react";
import studentsImage from "/students-2.png";
import ActivitiesForm from "./ActivitiesForm";
import { useLanguage } from "@/contexts/LanguageContext";

const ActivitiesSection = () => {
  const { t } = useLanguage();
  const activities = [
    {
      emoji: "🌱",
      title: t('activities.shadowing.title'),
      description: t('activities.shadowing.desc')
    },
    {
      emoji: "🎓",
      title: t('activities.meetup.title'),
      description: t('activities.meetup.desc')
    },
    {
      emoji: "🛠",
      title: t('activities.project.title'),
      description: t('activities.project.desc')
    },
    {
      emoji: "🧪",
      title: "Хакатон",
      description: "Командные соревнования по разработке инновационных решений"
    },
    {
      emoji: "🤝",
      title: "Встреча с HR",
      description: "Знакомство с требованиями работодателей и процессом найма"
    },
    {
      emoji: "📍",
      title: "Экскурсия на предприятие",
      description: "Погружение в рабочую атмосферу и знакомство с производством"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Активности</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t('activities.title').split(' ').slice(0, -2).join(' ')}
            <span className="bg-gradient-primary bg-clip-text text-transparent"> {t('activities.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('activities.subtitle')}
          </p>
        </div>

        {/* Image section */}
        <div className="flex justify-center mb-16">
          <div className="relative max-w-4xl">
            <img 
              src={studentsImage} 
              alt="Students participating in career activities" 
              className="w-[500px] h-[500px] rounded-2xl shadow-hero object-cover"
            />
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-float">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-success rounded-2xl flex items-center justify-center shadow-glow animate-float" style={{
              animationDelay: "1s"
            }}>
              <span className="text-2xl">🎯</span>
            </div>
            
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((activity, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 group cursor-pointer">
              <div className="space-y-4 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {activity.emoji}
                </div>
                <h3 className="text-xl font-bold">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Registration Form */}
        <div className="max-w-md mx-auto">
          <ActivitiesForm />
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;