import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Globe, 
  Calendar, 
  Route,
  MessageSquare,
  ArrowRight,
  School,
  Sparkles
} from "lucide-react";

const UniversitySection = () => {
  const universityFeatures = [
    {
      icon: School,
      title: "Цифровая карточка учебного заведения",
      description: "Создайте привлекательный профиль вуза с описанием программ, преимуществ и достижений",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Globe,
      title: "Размещение онлайн-курсов и мероприятий",
      description: "Публикуйте открытые лекции, вебинары и курсы для демонстрации качества образования",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Route,
      title: "Участие в профориентационных треках",
      description: "Интегрируйтесь в образовательные маршруты и помогайте подросткам выбрать направление",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: MessageSquare,
      title: "Прямое общение с потенциальными абитуриентами",
      description: "Отвечайте на вопросы, проводите консультации и создавайте персональную связь",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            <span>Для колледжей и университетов</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Представьте свои программы тем,
            <span className="bg-gradient-primary bg-clip-text text-transparent"> кто выбирает уже сейчас</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Привлекайте мотивированных абитуриентов, демонстрируя качество образования и уникальные возможности вашего учебного заведения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {universityFeatures.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <div className="space-y-6">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold">Станьте частью образовательной экосистемы</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Подключайтесь к платформе и начните взаимодействие с будущими студентами уже сегодня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="group">
                Подключить учебное заведение
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;