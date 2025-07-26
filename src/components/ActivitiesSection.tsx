import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      emoji: "🌱",
      title: "Shadowing",
      description: "Наблюдение за работой профессионалов в реальной рабочей среде"
    },
    {
      emoji: "🎓",
      title: "Мастер-класс",
      description: "Практические занятия от экспертов индустрии"
    },
    {
      emoji: "🛠",
      title: "Реальный кейс",
      description: "Решение настоящих бизнес-задач под руководством наставников"
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
            Открытые активности
            <span className="bg-gradient-primary bg-clip-text text-transparent"> для подростков</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Разнообразные форматы погружения в профессии — от наблюдения до практических проектов
          </p>
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

        <div className="text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Готов попробовать себя в деле?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Участвуй в активностях, находи наставников и открывай новые горизонты для своей карьеры
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Посмотреть активности
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Календарь событий
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;