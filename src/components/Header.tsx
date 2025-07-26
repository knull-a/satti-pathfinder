import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, UserCircle, Briefcase, Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, logout } = useAuth();

  const handleAuthClick = () => {
    if (user) {
      logout();
    } else {
      setShowAuthModal(true);
    }
  };

  const getRoleIcon = (role?: string) => {
    switch (role) {
      case 'teenager': return <UserCircle className="w-4 h-4" />;
      case 'employer': return <Briefcase className="w-4 h-4" />;
      case 'mentor': return <UserCircle className="w-4 h-4" />;
      case 'admin': return <Shield className="w-4 h-4" />;
      default: return <UserCircle className="w-4 h-4" />;
    }
  };

  const getRoleLabel = (role?: string) => {
    switch (role) {
      case 'teenager': return 'Подросток';
      case 'employer': return 'Работодатель';
      case 'mentor': return 'Наставник';
      case 'admin': return 'Администратор';
      default: return 'Пользователь';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-foreground">Satti Link</span>
                <span className="text-xs text-muted-foreground">by Daryndy Bala</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            {!user && (
              <div className="hidden md:flex items-center space-x-6">
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О платформе
                </a>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Возможности
                </a>
                <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Карьера
                </a>
                <a href="#mentors" className="text-muted-foreground hover:text-foreground transition-colors">
                  Наставники
                </a>
              </div>
            )}

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-secondary/50 rounded-lg px-3 py-2">
                    {getRoleIcon(user.role)}
                    <div className="text-sm">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{getRoleLabel(user.role)}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleAuthClick}>
                    Выйти
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="ghost" size="sm" onClick={() => setShowAuthModal(true)}>
                    Войти
                  </Button>
                  <Button variant="hero" size="sm" onClick={() => setShowAuthModal(true)}>
                    Регистрация
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-card rounded-lg border border-border">
              <div className="flex flex-col space-y-4">
                {!user && (
                  <>
                    <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                      О платформе
                    </a>
                    <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                      Возможности
                    </a>
                    <a href="#careers" className="text-muted-foreground hover:text-foreground transition-colors">
                      Карьера
                    </a>
                    <a href="#mentors" className="text-muted-foreground hover:text-foreground transition-colors">
                      Наставники
                    </a>
                  </>
                )}
                
                <div className="pt-4 border-t border-border">
                  {user ? (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 bg-secondary/50 rounded-lg px-3 py-2">
                        {getRoleIcon(user.role)}
                        <div className="text-sm">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{getRoleLabel(user.role)}</div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="w-full" onClick={handleAuthClick}>
                        Выйти
                      </Button>
                    </div>
                  ) : (
                    <div className="flex space-x-3">
                      <Button variant="ghost" size="sm" className="flex-1" onClick={() => setShowAuthModal(true)}>
                        Войти
                      </Button>
                      <Button variant="hero" size="sm" className="flex-1" onClick={() => setShowAuthModal(true)}>
                        Регистрация
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
};

export default Header;