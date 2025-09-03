import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LogoIcon from "./icon/LogoIcon";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

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
                {t('nav.about')}
              </a>
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.students')}
              </a>
              <a
                href="#universities"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.universities')}
              </a>
              <a
                href="#employers"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.employers')}
              </a>
              <a
                href="#news"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('nav.news')}
              </a>
            </div>

            {/* CTA Section */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Button
                variant="hero"
                size="sm"
                onClick={() =>
                  window.open("https://app.orkenlink.kz", "_blank")
                }
              >
                {t('nav.try')}
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
                  {t('nav.about')}
                </a>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.students')}
                </a>
                <a
                  href="#universities"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.universities')}
                </a>
                <a
                  href="#employers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.employers')}
                </a>
                <a
                  href="#news"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t('nav.news')}
                </a>

                <div className="pt-4 border-t border-border flex flex-col gap-4">
                  <LanguageSwitcher />
                  <Button
                    variant="hero"
                    size="sm"
                    className="w-full"
                    onClick={() =>
                      window.open("https://app.orkenlink.kz", "_blank")
                    }
                  >
                    {t('nav.try')}
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
