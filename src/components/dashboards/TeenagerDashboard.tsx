import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { 
  User, 
  MapPin, 
  School, 
  Star, 
  Brain, 
  Trophy,
  Plus,
  Edit3,
  Target,
  Briefcase
} from "lucide-react";

const TeenagerDashboard = () => {
  const { user } = useAuth();

  const interests = user?.profile?.interests || ['программирование', 'дизайн'];
  const skills = user?.profile?.skills || ['JavaScript', 'Python'];

  const recommendations = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      company: "ТехСтарт",
      type: "Стажировка",
      duration: "3 месяца",
      location: "Астана",
      match: 95,
      tags: ["JavaScript", "React", "HTML/CSS"]
    },
    {
      id: 2,
      title: "UX/UI Design Intern",
      company: "Креатив Студия",
      type: "Проект",
      duration: "2 месяца",
      location: "Удаленно",
      match: 87,
      tags: ["Figma", "Design Thinking", "Prototyping"]
    },
    {
      id: 3,
      title: "Python Developer",
      company: "Data Solutions",
      type: "Стажировка",
      duration: "4 месяца",
      location: "СПб",
      match: 82,
      tags: ["Python", "Django", "API"]
    }
  ];

  const achievements = [
    { title: "Профиль заполнен", completed: true },
    { title: "Тест пройден", completed: true },
    { title: "Первый отклик", completed: false },
    { title: "Собеседование", completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Привет, {user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-muted-foreground">
            Готов к новым возможностям? Вот что тебя ждет сегодня.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Summary */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold">Твой профиль</h2>
                <Button variant="outline" size="sm">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Редактировать
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{user?.name}</div>
                      <div className="text-sm text-muted-foreground">{user?.profile?.age} лет</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{user?.profile?.city}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <School className="w-4 h-4" />
                    <span className="text-sm">{user?.profile?.school}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Интересы</h4>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest, index) => (
                        <Badge key={index} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Навыки</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                      <Button variant="ghost" size="sm" className="h-6 px-2">
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Рекомендации для тебя</h2>
                <Button variant="outline" size="sm">
                  Все возможности
                </Button>
              </div>

              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="border border-border rounded-lg p-4 hover:shadow-glow transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{rec.title}</h3>
                          <Badge variant="secondary">{rec.type}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{rec.company}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <div className="text-sm font-medium text-success">{rec.match}% совпадение</div>
                          <div className="text-xs text-muted-foreground">{rec.duration}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{rec.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {rec.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" variant="gradient">
                        Откликнуться
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Быстрые действия</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="w-4 h-4 mr-2" />
                  Пройти тест заново
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Найти наставника
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Поиск стажировок
                </Button>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-warning" />
                Достижения
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      achievement.completed 
                        ? 'bg-success border-success' 
                        : 'border-muted-foreground'
                    }`}>
                      {achievement.completed && (
                        <div className="w-full h-full rounded-full bg-white scale-50"></div>
                      )}
                    </div>
                    <span className={`text-sm ${
                      achievement.completed 
                        ? 'text-foreground' 
                        : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Profile Completion */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Заполненность профиля</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Прогресс</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Добавь больше навыков для лучших рекомендаций
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeenagerDashboard;