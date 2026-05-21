import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <main style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
