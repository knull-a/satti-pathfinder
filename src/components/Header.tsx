import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoIcon from "./icon/LogoIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <LogoIcon />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                О платформе
              </a>
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Подросткам и студентам
              </a>
              <a
                href="#universities"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Учебным заведениям
              </a>
              <a
                href="#employers"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Работодателям
              </a>
              <a
                href="#news"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Новости, курсы
              </a>
            </div>

            {/* CTA Section */}
            <div className="hidden md:flex items-center">
              <Button
                variant="hero"
                size="sm"
                onClick={() =>
                  window.open("https://app.orkenlink.kz", "_blank")
                }
              >
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
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  О платформе
                </a>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Подросткам и студентам
                </a>
                <a
                  href="#universities"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Учебным заведениям
                </a>
                <a
                  href="#employers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Работодателям
                </a>
                <a
                  href="#news"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Новости, курсы
                </a>

                <div className="pt-4 border-t border-border">
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      window.open("https://app.orkenlink.kz", "_blank")
                    }
                  >
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
