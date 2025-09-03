import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Target } from "lucide-react";
import heroImage from "/students-1.png";
import { useLanguage } from "@/contexts/LanguageContext";
const Hero = () => {
  const { t } = useLanguage();
  return <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">
                {t('hero.subtitle').split('.')[0]}
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t('hero.title').split(' ').slice(0, -2).join(' ')}
                <span className="bg-gradient-primary bg-clip-text text-transparent"> {t('hero.title').split(' ').slice(-2, -1).join(' ')} </span>
                {t('hero.title').split(' ').slice(-1).join(' ')}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {t('hero.subtitle')}
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://app.orkenlink.kz', '_blank')}
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:block">
            <div className="relative">
              <img src={heroImage} alt="OrkenLink - Career guidance platform" className="w-full h-auto " />
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-float">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-secondary rounded-2xl flex items-center justify-center shadow-glow animate-float" style={{
              animationDelay: "1s"
            }}>
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;