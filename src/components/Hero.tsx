import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
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
                Платформа №1 для профориентации подростков
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Открой свой
                <span className="bg-gradient-primary bg-clip-text text-transparent"> путь </span>
                к будущей карьере
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Пройди тестирование, найди наставника и получи первые возможности 
                для развития в интересующей сфере
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">1000+</div>
                  <div className="text-sm text-muted-foreground">Студентов</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-lg">500+</div>
                  <div className="text-sm text-muted-foreground">Возможностей</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Начать путешествие
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5" />
                Смотреть видео
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:block">
            <div className="relative">
              <img src={heroImage} alt="Satti Link - Career guidance platform" className="w-full h-auto rounded-2xl shadow-hero" />
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-float">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center shadow-glow animate-float" style={{
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