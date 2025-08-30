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
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TextMarquee />
        <AudienceSection />
        <Features />
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
