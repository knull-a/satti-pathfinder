import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import EmployerSection from "@/components/EmployerSection";
import UniversitySection from "@/components/UniversitySection";
import ActivitiesSection from "@/components/ActivitiesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <EmployerSection />
        <UniversitySection />
        <ActivitiesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
