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
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  const textItems = [
    t('marquee.development'),
    t('marquee.leadership'),
    t('marquee.future'),
    t('marquee.partnership'),
    t('marquee.career'),
    t('marquee.innovations'),
    t('marquee.education'),
    t('marquee.ecosystem'),
    t('marquee.opportunities'),
    t('marquee.success')
  ];

  const featuresItems = [
    t('marquee.develop'),
    t('marquee.build'),
    t('marquee.start'),
    t('marquee.lead'),
    t('marquee.open'),
    t('marquee.create'),
    t('marquee.achieve'),
    t('marquee.choose'),
    t('marquee.grow'),
    t('marquee.leadToday')
  ];
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
