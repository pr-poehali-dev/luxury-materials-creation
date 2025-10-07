import Icon from "@/components/ui/icon";
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';

interface InnovationSectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const InnovationSection = ({ scrollY, theme, translations }: InnovationSectionProps) => {
  const t = translations;
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.2 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <section className="py-48 relative overflow-hidden" style={{
      background: theme === 'dark'
        ? 'linear-gradient(135deg, #0a0506 0%, #0f0a0d 25%, #1a0f15 50%, #0f0a0d 75%, #0a0506 100%)'
        : 'linear-gradient(135deg, #faf8f9 0%, #f5f0f3 25%, #ede5ea 50%, #f5f0f3 75%, #faf8f9 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      
      {!isMobile && (
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[180px]"
            style={{
              background: 'radial-gradient(circle, rgba(201,169,97,1) 0%, transparent 70%)',
              transform: `translate(${Math.sin(scrollY * 0.0005) * 150}px, ${Math.cos(scrollY * 0.0005) * 150}px)`
            }}
          />
          <div 
            className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px]"
            style={{
              background: 'radial-gradient(circle, rgba(150,100,180,0.8) 0%, transparent 70%)',
              transform: `translate(${Math.cos(scrollY * 0.0007) * -120}px, ${Math.sin(scrollY * 0.0007) * 120}px)`
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            ref={leftRef as any}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={leftVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative order-2 lg:order-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] h-[300px] lg:h-[500px]">
              {!isMobile && <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-accent/5 to-transparent blur-[120px] scale-150 animate-pulse" />}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="absolute w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] border border-accent/20 transition-all duration-700 hover:border-accent/40"
                  style={{
                    transform: !isMobile ? `rotate(${scrollY * 0.05}deg)` : 'none'
                  }}
                />
                <div 
                  className="absolute w-[150px] h-[150px] lg:w-[280px] lg:h-[280px] border border-accent/15"
                  style={{
                    transform: !isMobile ? `rotate(${-scrollY * 0.08}deg)` : 'none'
                  }}
                />
                {!isMobile && (
                  <div 
                    className="absolute w-[210px] h-[210px] border border-accent/10"
                    style={{
                      transform: `rotate(${scrollY * 0.12}deg)`
                    }}
                  />
                )}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                  {!isMobile && <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/60 to-accent/40 blur-xl animate-pulse" />}
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-br from-accent/80 to-accent/40' : 'bg-gradient-to-br from-accent to-accent/60'} backdrop-blur-sm border border-accent/30 flex items-center justify-center group cursor-pointer transition-all duration-700 hover:scale-110`}>
                    <Icon name="Gem" size={isMobile ? 36 : 48} className="text-black/80 group-hover:rotate-12 transition-all duration-700" />
                  </div>
                </div>
              </div>

              {!isMobile && (
                <>
                  <div className="absolute top-10 right-10 w-2 h-2 bg-accent rounded-full animate-ping" />
                  <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/3 left-10 w-1 h-1 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-10 right-20 w-2 h-2 bg-accent/80 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
                </>
              )}
            </div>
          </motion.div>

          <motion.div 
            ref={rightRef as any}
            initial={{ opacity: 0, x: 50 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-10 order-1 lg:order-2"
            style={{
              transform: !isMobile ? `translateY(${(scrollY - 3200) * -0.08}px)` : 'none'
            }}
          >
            <div>
              <div className="text-[9px] tracking-[0.5em] text-accent/60 mb-8 uppercase font-extralight luxury-line inline-block">
                {t.tag}
              </div>
              <h3 className={`text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-extralight tracking-[0.03em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-10`}>
                {t.title1}
                <br />
                <span className="text-gradient-gold">{t.title2}</span>
              </h3>
            </div>

            <p className={`text-[15px] leading-[2] ${theme === 'dark' ? 'text-foreground/70' : 'text-black/70'} font-extralight tracking-[0.02em]`}>
              {t.desc}
            </p>

            <div className="space-y-8 pt-8">
              {[
                { icon: "Shield" },
                { icon: "Sparkles" },
                { icon: "Leaf" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-6 group cursor-pointer">
                  <div className={`w-16 h-16 border ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-all duration-1000 group-hover:rotate-45`}>
                    <Icon name={feature.icon} size={22} className="text-accent/70 group-hover:text-accent group-hover:-rotate-45 transition-all duration-1000" />
                  </div>
                  <div className="pt-2">
                    <div className={`text-xl font-extralight tracking-[0.05em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-2`}>
                      {t.features[idx].title}
                    </div>
                    <div className={`text-[13px] tracking-[0.01em] leading-relaxed ${theme === 'dark' ? 'text-foreground/50' : 'text-black/50'} font-extralight`}>
                      {t.features[idx].desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
