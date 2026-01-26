import HeroSection from '@/components/sections/HeroSection';
import BioSection from '@/components/sections/BioSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Footer from '@/components/Footer';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
