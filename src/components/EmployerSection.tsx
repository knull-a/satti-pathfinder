import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Award, 
  Users2, 
  Target,
  ArrowRight,
  Building2,
  Zap
} from "lucide-react";

const EmployerSection = () => {
  const employerFeatures = [
    {
      icon: Target,
      title: "Ранний профориентационный отбор",
      description: "Участвуйте в формировании профессиональных предпочтений молодежи на раннем этапе",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Award,
      title: "Продвижение бренда работодателя",
      description: "Повышайте узнаваемость компании среди будущих специалистов и создавайте положительный имидж",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Users2,
      title: "Формирование кадрового резерва",
      description: "Готовьте будущих сотрудников заранее, снижая затраты на поиск и адаптацию персонала",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="employers" className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Building2 className="w-4 h-4" />
            <span>Для работодателей</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Привлекайте
            <span className="bg-gradient-primary bg-clip-text text-transparent"> талантливую молодежь</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Инвестируйте в свое будущее: формируйте профессиональную культуру и создавайте кадровый резерв для долгосрочного успеха компании
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {employerFeatures.map((feature, index) => (
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

        <div className="text-center space-y-6">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Начните сотрудничество уже сегодня</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Присоединяйтесь к ведущим компаниям Казахстана, которые уже инвестируют в будущие кадры
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="group"
                onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
              >
                Стать партнером
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerSection;