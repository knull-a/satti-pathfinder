import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AudienceSection from "@/components/AudienceSection";
import Features from "@/components/Features";
import ActivitiesSection from "@/components/ActivitiesSection";
import UniversitySection from "@/components/UniversitySection";
import EmployerSection from "@/components/EmployerSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import { TextMarquee } from "@/components/TextMarquee";

const Index = () => {
  const textItems = [
    "Развитие",
    "Лидерство", 
    "Будущее",
    "Партнёрство",
    "Карьерa",
    "Инновации",
    "Образование",
    "Экосистема",
    "Возможности",
    "Успех"
  ];

  const featuresItems = [
    "Развивайся здесь!",
    "Строй будущее!",
    "Начни карьеру!",
    "Стань лидером!",
    "Открой возможности!",
    "Создавай успех!",
    "Достигай большего!",
    "Выбирай развитие!",
    "Расти вместе!",
    "Лидируй сегодня!"
  ]
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TextMarquee textItems={textItems} />
        <AudienceSection />
        <Features />
        <TextMarquee textItems={featuresItems} />
        <ActivitiesSection />
        <UniversitySection />
        <EmployerSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
