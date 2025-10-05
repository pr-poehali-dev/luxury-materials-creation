import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import EarthSection from "@/components/sections/EarthSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import InnovationSection from "@/components/sections/InnovationSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import { translations } from "@/data/translations";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  const heroRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const earthRef = useRef<HTMLElement>(null);
  const collectionsRef = useRef<HTMLElement>(null);
  const innovationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const t = translations[language];

  const scrollToSection = (section: 'hero' | 'philosophy' | 'earth' | 'collections' | 'innovation' | 'contact') => {
    const refs = {
      hero: heroRef,
      philosophy: philosophyRef,
      earth: earthRef,
      collections: collectionsRef,
      innovation: innovationRef,
      contact: contactRef
    };
    
    refs[section].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLanguageChange = (lang: 'en' | 'ru') => {
    setLanguage(lang);
  };

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const bgClass = theme === 'dark' ? 'bg-background' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-foreground' : 'text-black';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} overflow-x-hidden transition-colors duration-700`}>
      <Navigation 
        scrolled={scrolled}
        theme={theme}
        language={language}
        translations={t}
        onLanguageChange={handleLanguageChange}
        onThemeChange={handleThemeChange}
        onNavigate={scrollToSection}
      />

      <section ref={heroRef}>
        <HeroSection 
          scrollY={scrollY}
          theme={theme}
          translations={t.hero}
          onNavigate={scrollToSection}
        />
      </section>

      <section ref={philosophyRef}>
        <PhilosophySection 
          scrollY={scrollY}
          theme={theme}
          translations={t.philosophy}
        />
      </section>

      <section ref={earthRef}>
        <EarthSection 
          scrollY={scrollY}
          theme={theme}
          translations={t.earth}
        />
      </section>

      <section ref={collectionsRef}>
        <CollectionsSection 
          translations={t.collections}
        />
      </section>

      <section ref={innovationRef}>
        <InnovationSection 
          scrollY={scrollY}
          theme={theme}
          translations={t.innovation}
        />
      </section>

      <section ref={contactRef}>
        <ContactSection 
          scrollY={scrollY}
          theme={theme}
          translations={t.contact}
        />
      </section>

      <Footer theme={theme} />
    </div>
  );
};

export default Index;