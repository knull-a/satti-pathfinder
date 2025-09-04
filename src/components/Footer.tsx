import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from "lucide-react";
import LogoIcon from "./icon/LogoIcon";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <LogoIcon />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.brand.desc')}
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => window.open('https://www.facebook.com/daryndybala.kz', '_blank')}>
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" onClick={() => window.open('https://www.instagram.com/daryndybala.kz', '_blank')}>
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.about')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.features')}
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.careers')}
                </a>
              </li>
              <li>
                <a href="#mentors" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.mentors')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.pricing')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('footer.support.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.support.help')}
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.support.privacy')}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.support.terms')}
                </a>
              </li>
              <li>
                <a href="#safety" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.support.safety')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.support.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h4 className="font-semibold text-lg">Новости и обновления</h4>
            <p className="text-muted-foreground text-sm">
              Подпишитесь на рассылку, чтобы получать последние новости и обновления платформы.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="flex-1"
                />
                <Button variant="gradient" size="icon">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div> */}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{t('footer.contact.email')}</div>
                <div className="text-sm text-muted-foreground">online@daryndybala.kz</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{t('footer.contact.phone')}</div>
                <div className="text-sm text-muted-foreground">+7 747 120 25 57</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-medium">{t('footer.contact.address')}</div>
                <div className="text-sm text-muted-foreground">{t('footer.contact.location')}</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;