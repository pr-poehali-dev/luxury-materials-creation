import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';

interface EarthSectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const EarthSection = ({ scrollY, theme, translations }: EarthSectionProps) => {
  const t = translations;
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: earthRef, isVisible: earthVisible } = useScrollReveal({ threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);
  
  const sectionStart = 1800;
  const sectionEnd = 2800;
  const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
  
  const brightness = 0.3 + (progress * 0.7);
  const saturation = 0.2 + (progress * 0.8);
  const scale = 0.85 + (progress * 0.15);
  const rotateY = -20 + (progress * 20);

  return (
    <section className="py-48 relative overflow-hidden" style={{ 
      background: theme === 'dark' 
        ? 'linear-gradient(180deg, #010101 0%, #000510 50%, #010101 100%)'
        : 'linear-gradient(180deg, #ffffff 0%, #f0f4ff 50%, #ffffff 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[200px]"
            style={{
              opacity: progress * 0.3
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              ref={contentRef as any}
              initial={{ opacity: 0, x: -50 }}
              animate={contentVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div>
                <div className="text-[9px] tracking-[0.5em] text-accent/60 mb-8 uppercase font-extralight luxury-line inline-block">
                  {t.tag}
                </div>
                <h3 className={`text-[clamp(2rem,5vw,4rem)] leading-[1.1] font-extralight tracking-[0.03em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8`}>
                  {t.title1}
                  <br />
                  <span className="text-gradient-gold">{t.title2}</span>
                </h3>
              </div>

              <div className="space-y-6">
                <p className={`text-[15px] leading-[2] ${theme === 'dark' ? 'text-foreground/70' : 'text-black/70'} font-extralight tracking-[0.02em]`}>
                  {t.desc1}
                </p>
                <p className={`text-[15px] leading-[2] ${theme === 'dark' ? 'text-foreground/70' : 'text-black/70'} font-extralight tracking-[0.02em]`}>
                  {t.desc2}
                </p>
              </div>

              <div className={`grid grid-cols-2 gap-8 pt-8 border-t ${theme === 'dark' ? 'border-accent/5' : 'border-accent/10'}`}>
                {t.stats.map((stat: any, idx: number) => (
                  <div key={idx} className="space-y-2">
                    <div className="text-4xl font-extralight text-accent/90">
                      {stat.value}
                    </div>
                    <div className={`text-[9px] tracking-[0.3em] ${theme === 'dark' ? 'text-foreground/40' : 'text-black/40'} uppercase font-extralight`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              ref={earthRef as any}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={earthVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: 'easeOut' }} 
              className="relative order-1 lg:order-2 flex items-center justify-center py-12"
              style={{
                perspective: '1000px'
              }}
            >
              <div 
                className="relative w-full max-w-[500px] aspect-square"
                style={{
                  transform: !isMobile 
                    ? `scale(${scale}) rotateY(${rotateY}deg)` 
                    : 'none',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {!isMobile && (
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(circle at 30% 30%, rgba(100, 150, 255, 0.3), transparent 70%)',
                      filter: `blur(60px)`,
                      opacity: progress * 0.6
                    }}
                  />
                )}
                
                <div 
                  className="relative w-full h-full rounded-full overflow-hidden"
                  style={{
                    boxShadow: `0 0 ${60 + progress * 40}px rgba(100, 150, 255, ${0.2 + progress * 0.3})`,
                    filter: `brightness(${brightness}) saturate(${saturation})`,
                    transition: 'filter 0.3s ease-out'
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=800&fit=crop"
                    alt="Planet Earth"
                    className="w-full h-full object-cover"
                    style={{
                      transform: !isMobile ? `rotate(${scrollY * 0.05}deg)` : 'none'
                    }}
                  />
                  
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
                    style={{
                      opacity: progress * 0.3
                    }}
                  />
                </div>

                <div 
                  className="absolute inset-0 rounded-full border border-white/10"
                  style={{
                    opacity: progress
                  }}
                />

                {!isMobile && (
                  <div 
                    className="absolute -inset-20 rounded-full border border-accent/5 pointer-events-none"
                    style={{
                      opacity: progress * 0.5,
                      transform: `rotate(${scrollY * 0.02}deg)`
                    }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarthSection;