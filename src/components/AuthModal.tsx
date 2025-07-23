import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { 
  User, 
  Briefcase, 
  Users, 
  Shield,
  Mail,
  Lock,
  UserPlus,
  LogIn,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  onClose: () => void;
}

const AuthModal = ({ onClose }: AuthModalProps) => {
  const { login, register, isLoading } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("login");
  const [selectedRole, setSelectedRole] = useState<UserRole>("teenager");
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const roles = [
    {
      id: "teenager" as UserRole,
      title: "Подросток",
      description: "12-17 лет, ищу возможности для развития",
      icon: User,
      color: "text-primary",
      demoCredentials: { email: "alex@student.com", password: "demo123" }
    },
    {
      id: "employer" as UserRole,
      title: "Работодатель",
      description: "Предлагаю вакансии и стажировки",
      icon: Briefcase,
      color: "text-success",
      demoCredentials: { email: "company@tech.com", password: "demo123" }
    },
    {
      id: "mentor" as UserRole,
      title: "Наставник",
      description: "Делюсь опытом и знаниями",
      icon: Users,
      color: "text-accent",
      demoCredentials: { email: "mentor@expert.com", password: "demo123" }
    },
    {
      id: "admin" as UserRole,
      title: "Администратор",
      description: "Управляю платформой",
      icon: Shield,
      color: "text-warning",
      demoCredentials: { email: "admin@sattilink.com", password: "demo123" }
    }
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!loginForm.email || !loginForm.password) {
      setError("Заполните все поля");
      return;
    }

    const success = await login(loginForm.email, loginForm.password, selectedRole);
    
    if (success) {
      toast({
        title: "Успешный вход",
        description: `Добро пожаловать в Satti Link!`,
      });
      onClose();
    } else {
      setError("Неверные данные для входа");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!registerForm.email || !registerForm.password || !registerForm.name) {
      setError("Заполните все поля");
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (registerForm.password.length < 6) {
      setError("Пароль должен содержать минимум 6 символов");
      return;
    }

    const success = await register(registerForm.email, registerForm.password, registerForm.name, selectedRole);
    
    if (success) {
      toast({
        title: "Регистрация успешна",
        description: `Добро пожаловать в Satti Link, ${registerForm.name}!`,
      });
      onClose();
    } else {
      setError("Ошибка при регистрации");
    }
  };

  const fillDemoCredentials = (role: UserRole) => {
    const roleData = roles.find(r => r.id === role);
    if (roleData) {
      setLoginForm({
        email: roleData.demoCredentials.email,
        password: roleData.demoCredentials.password,
      });
      setSelectedRole(role);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Satti Link</h2>
                <p className="text-sm text-muted-foreground">Вход в личный кабинет</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              ×
            </Button>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <Label className="text-base font-semibold mb-3 block">Выберите роль</Label>
            <div className="grid grid-cols-2 gap-3">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedRole === role.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <role.icon className={`w-5 h-5 mt-0.5 ${role.color}`} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{role.title}</div>
                      <div className="text-xs text-muted-foreground">{role.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Credentials */}
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Демо-версия:</strong> Нажмите на роль ниже для автозаполнения данных
              <div className="flex flex-wrap gap-2 mt-2">
                {roles.map((role) => (
                  <Button
                    key={role.id}
                    variant="outline"
                    size="sm"
                    onClick={() => fillDemoCredentials(role.id)}
                    className="text-xs"
                  >
                    {role.title}
                  </Button>
                ))}
              </div>
            </AlertDescription>
          </Alert>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login" className="flex items-center space-x-2">
                <LogIn className="w-4 h-4" />
                <span>Вход</span>
              </TabsTrigger>
              <TabsTrigger value="register" className="flex items-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>Регистрация</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="your@email.com"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="login-password">Пароль</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" variant="hero" disabled={isLoading}>
                  {isLoading ? "Вход..." : "Войти"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register" className="mt-6">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-name">Имя</Label>
                  <Input
                    id="register-name"
                    type="text"
                    placeholder="Ваше имя"
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="your@email.com"
                      value={registerForm.email}
                      onChange={(e) => setRegisterForm(prev => ({ ...prev, email: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-password">Пароль</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerForm.password}
                      onChange={(e) => setRegisterForm(prev => ({ ...prev, password: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="register-confirm-password">Подтвердите пароль</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="register-confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={registerForm.confirmPassword}
                      onChange={(e) => setRegisterForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="pl-10"
                    />
                  </div>
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" className="w-full" variant="hero" disabled={isLoading}>
                  {isLoading ? "Регистрация..." : "Зарегистрироваться"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default AuthModal;