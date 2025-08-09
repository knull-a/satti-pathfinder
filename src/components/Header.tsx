import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTryClick = () => {
    window.open('https://app.satti-link.kz', '_blank');
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

            {/* CTA Section */}
            <div className="hidden md:flex items-center">
              <Button variant="hero" size="sm" onClick={handleTryClick}>
                Попробовать
              </Button>
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
                
                <div className="pt-4 border-t border-border">
                  <Button variant="hero" size="sm" className="w-full" onClick={handleTryClick}>
                    Попробовать
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

    </>
  );
};

export default Header;