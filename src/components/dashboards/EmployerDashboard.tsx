import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Plus,
  Users,
  Eye,
  MessageCircle,
  Clock,
  CheckCircle,
  XCircle,
  Building,
  MapPin,
  Calendar
} from "lucide-react";

const EmployerDashboard = () => {
  const { user } = useAuth();

  const vacancies = [
    {
      id: 1,
      title: "Junior Frontend Developer",
      status: "active",
      applications: 12,
      views: 45,
      created: "2024-01-15",
      location: "Москва",
      type: "Стажировка",
      duration: "3 месяца"
    },
    {
      id: 2,
      title: "UX/UI Design Intern",
      status: "pending",
      applications: 0,
      views: 8,
      created: "2024-01-20",
      location: "Удаленно",
      type: "Проект",
      duration: "2 месяца"
    },
    {
      id: 3,
      title: "Marketing Assistant",
      status: "draft",
      applications: 0,
      views: 0,
      created: "2024-01-22",
      location: "Москва",
      type: "Стажировка",
      duration: "4 месяца"
    }
  ];

  const candidates = [
    {
      id: 1,
      name: "Александр Петров",
      age: 16,
      location: "Москва",
      skills: ["JavaScript", "React", "HTML/CSS"],
      match: 95,
      status: "new",
      appliedFor: "Junior Frontend Developer",
      appliedDate: "2024-01-23"
    },
    {
      id: 2,
      name: "Мария Смирнова",
      age: 17,
      location: "СПб",
      skills: ["Python", "Django", "SQL"],
      match: 88,
      status: "reviewed",
      appliedFor: "Junior Frontend Developer",
      appliedDate: "2024-01-22"
    },
    {
      id: 3,
      name: "Дмитрий Козлов",
      age: 16,
      location: "Москва",
      skills: ["Figma", "Photoshop", "UI Design"],
      match: 92,
      status: "interview",
      appliedFor: "UX/UI Design Intern",
      appliedDate: "2024-01-21"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-success";
      case "pending": return "text-warning";
      case "draft": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active": return "Активна";
      case "pending": return "На модерации";
      case "draft": return "Черновик";
      default: return status;
    }
  };

  const getCandidateStatus = (status: string) => {
    switch (status) {
      case "new": return { label: "Новый", color: "bg-primary" };
      case "reviewed": return { label: "Рассмотрен", color: "bg-warning" };
      case "interview": return { label: "Собеседование", color: "bg-success" };
      case "rejected": return { label: "Отклонен", color: "bg-destructive" };
      default: return { label: status, color: "bg-muted" };
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Панель работодателя
            </h1>
            <p className="text-muted-foreground">
              Добро пожаловать, {user?.name}! Управляйте вакансиями и кандидатами.
            </p>
          </div>
          <Button variant="hero" className="gap-2">
            <Plus className="w-4 h-4" />
            Создать вакансию
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Активных вакансий</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Новых откликов</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">53</div>
                <div className="text-sm text-muted-foreground">Просмотров</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Собеседований</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vacancies */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Мои вакансии</h2>
                <Button variant="outline" size="sm">
                  Все вакансии
                </Button>
              </div>

              <div className="space-y-4">
                {vacancies.map((vacancy) => (
                  <div key={vacancy.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{vacancy.title}</h3>
                          <Badge variant="secondary">{vacancy.type}</Badge>
                          <span className={`text-sm ${getStatusColor(vacancy.status)}`}>
                            {getStatusLabel(vacancy.status)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{vacancy.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{vacancy.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>Создана {vacancy.created}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{vacancy.applications} откликов</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                          <span>{vacancy.views} просмотров</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Редактировать
                        </Button>
                        <Button size="sm" variant="gradient">
                          Просмотр
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Candidates */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Новые кандидаты</h2>
                <Button variant="outline" size="sm">
                  Все кандидаты
                </Button>
              </div>

              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{candidate.name}</h3>
                          <span className="text-sm text-muted-foreground">
                            {candidate.age} лет
                          </span>
                          <div className={`px-2 py-1 rounded-full text-xs text-white ${getCandidateStatus(candidate.status).color}`}>
                            {getCandidateStatus(candidate.status).label}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          Отклик на: {candidate.appliedFor}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{candidate.location}</span>
                          </div>
                          <div className="text-success font-medium">
                            {candidate.match}% совпадение
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{candidate.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <XCircle className="w-3 h-3 mr-1" />
                          Отклонить
                        </Button>
                        <Button size="sm" variant="success">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Одобрить
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Profile */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Профиль компании</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Компания</div>
                  <div className="font-medium">{user?.profile?.company}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Должность</div>
                  <div className="font-medium">{user?.profile?.position}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">О компании</div>
                  <div className="text-sm">{user?.profile?.experience}</div>
                </div>
                <Button variant="outline" className="w-full">
                  Редактировать профиль
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Статистика месяца</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Просмотры профиля</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Новые отклики</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Проведено интервью</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Принято кандидатов</span>
                  <span className="font-medium">2</span>
                </div>
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-semibold mb-2">💡 Совет дня</h3>
              <p className="text-sm text-muted-foreground">
                Добавьте подробное описание задач и требований к кандидатам. 
                Это увеличит качество откликов на 40%.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;