import { Users, Briefcase, Star, TrendingUp } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: "1,500+",
      label: "Активных студентов",
      description: "Зарегистрированных пользователей 12-17 лет",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Briefcase,
      number: "500+",
      label: "Карьерных возможностей",
      description: "Вакансии, стажировки и проекты",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Star,
      number: "200+",
      label: "Проверенных наставников",
      description: "Экспертов из разных сфер деятельности",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Успешных соответствий",
      description: "Подростков нашли подходящие возможности",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Результаты которыми мы
            <span className="bg-gradient-primary bg-clip-text text-transparent"> гордимся</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Цифры говорят сами за себя - мы создаем реальную ценность для молодого поколения
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-background rounded-2xl shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;