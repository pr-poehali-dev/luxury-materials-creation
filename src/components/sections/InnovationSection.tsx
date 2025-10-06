import Icon from "@/components/ui/icon";
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface InnovationSectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const InnovationSection = ({ scrollY, theme, translations }: InnovationSectionProps) => {
  const t = translations;
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-48 relative overflow-hidden" style={{
      background: theme === 'dark'
        ? 'linear-gradient(135deg, #0a0506 0%, #0f0a0d 25%, #1a0f15 50%, #0f0a0d 75%, #0a0506 100%)'
        : 'linear-gradient(135deg, #faf8f9 0%, #f5f0f3 25%, #ede5ea 50%, #f5f0f3 75%, #faf8f9 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-[180px]"
          style={{
            background: 'radial-gradient(circle, rgba(201,169,97,1) 0%, transparent 70%)',
            transform: window.innerWidth >= 1024 ? `translate(${Math.sin(scrollY * 0.0005) * 150}px, ${Math.cos(scrollY * 0.0005) * 150}px)` : 'none'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{
            background: 'radial-gradient(circle, rgba(150,100,180,0.8) 0%, transparent 70%)',
            transform: window.innerWidth >= 1024 ? `translate(${Math.cos(scrollY * 0.0007) * -120}px, ${Math.sin(scrollY * 0.0007) * 120}px)` : 'none'
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            ref={leftRef as any}
            initial={{ opacity: 0, x: -200, rotate: -20 }}
            animate={leftVisible ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative order-2 lg:order-1 flex items-center justify-center"
          >
            <div 
              className="relative transition-all duration-700 hover:scale-105"
              style={{
                transform: window.innerWidth >= 1024 ? `translateY(${(scrollY - 3200) * 0.1}px) rotate(${Math.sin(scrollY * 0.001) * 2}deg)` : 'none',
              }}
            >
              <div className="relative w-[500px] h-[500px]">
                <div className="absolute inset-0 bg-gradient-radial from-accent/30 via-accent/10 to-transparent blur-[100px] scale-150" />
                <img 
                  src="https://cdn.poehali.dev/files/aea1c5e5-3e59-4e0f-b777-d253aa730be9.png" 
                  alt="Luxury Turtle" 
                  className="relative z-10 w-full h-full object-contain transition-all duration-700 hover:rotate-2"
                  style={{
                    filter: 'drop-shadow(0 40px 100px rgba(201,169,97,0.6)) drop-shadow(0 0 60px rgba(201,169,97,0.4))'
                  }}
                />
                <div className="absolute -bottom-12 -right-12 w-80 h-80 border border-accent/10 pointer-events-none" />
                <div className="absolute -top-12 -left-12 w-60 h-60 border border-accent/5 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            ref={rightRef as any}
            initial={{ opacity: 0, x: 50 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-10 order-1 lg:order-2"
            style={{
              transform: window.innerWidth >= 1024 ? `translateY(${(scrollY - 3200) * -0.08}px)` : 'none'
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