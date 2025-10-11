import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: {
    title: string;
    subtitle: string;
    explore: string;
    discover: string;
  };
  onNavigate: (section: 'philosophy' | 'collections') => void;
}

const HeroSection = ({ scrollY, theme, translations, onNavigate }: HeroSectionProps) => {
  const t = translations;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className={theme === 'dark' ? "absolute inset-0 bg-black" : "absolute inset-0 bg-gray-50"}
        style={{
          transform: !isMobile ? `translateY(${scrollY * 0.6}px) scale(${1 + scrollY * 0.0002})` : 'none',
        }}
      >
        <img
          src="/img/709a65a5-9076-4bed-97a8-a8700f3813e8.jpg"
          alt="Luxury materials"
          className={`w-full h-full object-cover ${theme === 'dark' ? 'opacity-40' : 'opacity-20'}`}
        />
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-black/60 via-black/20 to-transparent' : 'bg-gradient-to-b from-white/60 via-white/20 to-transparent'}`} />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-secondary/60 to-transparent pointer-events-none z-20" />

      <div 
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{
          transform: !isMobile ? `translateY(${scrollY * 0.25}px) scale(${1 - scrollY * 0.0001})` : 'none',
          opacity: !isMobile ? Math.max(0, 1 - scrollY / 600) : 1,
        }}
      >
        <div className="mb-3 animate-fade-in flex justify-center items-center">
          <img 
            src="https://cdn.poehali.dev/files/26b1b23b-db8d-4ab7-a7f4-957af803b57a.png" 
            alt="Turtle Logo" 
            className="w-24 h-24 md:w-36 md:h-36 object-contain opacity-90 hover:opacity-100 transition-all duration-700 hover:scale-110"
            style={!isMobile ? {
              filter: 'drop-shadow(0 0 40px rgba(201,169,97,0.3))'
            } : {}}
          />
        </div>
        
        <h2 
          className={`text-[clamp(2.5rem,8vw,7rem)] leading-[1.1] font-extralight tracking-[0.12em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8 animate-fade-in`}
          style={!isMobile ? {
            transform: `perspective(1000px) rotateX(${scrollY * 0.02}deg)`,
            transformStyle: 'preserve-3d'
          } : {}}
        >
          MAISON
          <br />
          <span className="text-gradient-gold" style={!isMobile ? { display: 'inline-block', transform: 'translateZ(30px)' } : {}}>DE PIERRE</span>
        </h2>

        <p className={`text-base tracking-[0.2em] ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} mb-20 max-w-2xl mx-auto font-extralight leading-[1.8] animate-slide-up`}>
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in">
          <Button
            size="lg"
            onClick={() => onNavigate('collections')}
            className={`bg-transparent border ${theme === 'dark' ? 'border-accent/20 hover:border-accent/50 hover:bg-accent/5 text-foreground' : 'border-accent/30 hover:border-accent hover:bg-accent/10 text-black'} px-16 py-8 text-[10px] tracking-[0.35em] uppercase font-extralight transition-all duration-1000 hover:shadow-[0_0_50px_rgba(212,181,116,0.2)] hover:scale-105`}
          >
            {t.explore}
          </Button>
          <button 
            onClick={() => onNavigate('philosophy')}
            className={`text-[10px] tracking-[0.35em] ${theme === 'dark' ? 'text-foreground/50' : 'text-black/50'} hover:text-accent/80 uppercase font-extralight transition-all duration-700 flex items-center gap-3 group`}
          >
            {t.discover}
            <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform duration-700" />
          </button>
        </div>
      </div>

      <button
        onClick={() => onNavigate('philosophy')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
      >
        <div className="w-px h-16 bg-gradient-to-b from-accent/60 to-transparent" />
      </button>
    </section>
  );
};

export default HeroSection;