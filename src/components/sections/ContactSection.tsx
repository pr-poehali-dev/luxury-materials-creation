import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ContactSectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const ContactSection = ({ scrollY, theme, translations }: ContactSectionProps) => {
  const t = translations;
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className={`py-40 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black to-transparent pointer-events-none z-20" />
      
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[150px]"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-8 text-center relative z-10">
        <motion.div 
          ref={contentRef as any}
          initial={{ opacity: 0, y: 60 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl mx-auto space-y-12"
          style={{
            transform: window.innerWidth >= 1024 ? `translateY(${(scrollY - 4200) * -0.08}px)` : 'none'
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

          <p className={`text-[15px] leading-[2] ${theme === 'dark' ? 'text-foreground/70' : 'text-black/70'} font-extralight tracking-[0.02em] max-w-2xl mx-auto`}>
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black px-16 py-8 text-[10px] tracking-[0.35em] uppercase font-extralight transition-all duration-1000 hover:shadow-[0_0_60px_rgba(212,181,116,0.4)] hover:scale-105"
            >
              {t.appointment}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`bg-transparent border ${theme === 'dark' ? 'border-accent/20 hover:border-accent/50 hover:bg-accent/5 text-foreground' : 'border-accent/30 hover:border-accent hover:bg-accent/10 text-black'} px-16 py-8 text-[10px] tracking-[0.35em] uppercase font-extralight transition-all duration-1000 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,181,116,0.2)]`}
            >
              {t.catalog}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;