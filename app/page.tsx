import HeroSection from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import FeatureSection from "@/components/FeatureSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";

const Home = () => {
  return (
    <main className="flex min-h-screen py-10 justify-center flex-col">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <FeatureSection />
      <ContactSection />
    </main>
  );
};

export default Home;
