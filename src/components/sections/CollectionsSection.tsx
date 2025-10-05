import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CollectionsSectionProps {
  translations: any;
}

const CollectionsSection = ({ translations }: CollectionsSectionProps) => {
  const t = translations;
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.2 });
  const card1 = useScrollReveal({ threshold: 0.2 });
  const card2 = useScrollReveal({ threshold: 0.2 });
  const card3 = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-48 relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #010101 0%, #080808 50%, #010101 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-accent rounded-full blur-[150px]" />
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <motion.div 
          ref={titleRef as any}
          initial={{ opacity: 0, y: 50 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-32"
          style={{
            transform: window.innerWidth >= 1024 ? `translateY(${(scrollY - 2400) * -0.12}px)` : 'none'
          }}
        >
          <div className="text-[9px] tracking-[0.5em] text-accent/60 mb-8 uppercase font-extralight luxury-line inline-block">
            {t.tag}
          </div>
          <h3 
            className="text-[clamp(2.5rem,6vw,5rem)] font-extralight tracking-[0.03em] text-white/95 mb-6"
          >
            <span className="lg:inline-block" style={window.innerWidth >= 1024 ? { display: 'inline-block', transform: 'translateZ(25px)' } : {}}>{t.title}</span>
          </h3>
          <div className="w-32 h-[0.5px] bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto mt-12" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px">
          {[
            { icon: "Gem" },
            { icon: "Droplets" },
            { icon: "Palette" }
          ].map((item, idx) => {
            const cards = [card1, card2, card3];
            const { ref, isVisible } = cards[idx];
            return (
            <motion.div
              key={idx}
              ref={ref as any}
              initial={{ opacity: 0, y: 60 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: 'easeOut' }}
            >
              <Card
              key={idx}
              className="bg-white/[0.02] backdrop-blur-md border-0 p-14 lg:hover:bg-white/[0.05] transition-all duration-1000 group cursor-pointer relative overflow-hidden lg:hover:shadow-[0_0_80px_rgba(212,181,116,0.1)]"
              onMouseEnter={(e) => {
                if (window.innerWidth >= 1024) {
                  e.currentTarget.style.transform = 'perspective(1000px) translateZ(20px) rotateY(2deg)';
                }
              }}
              onMouseLeave={(e) => {
                if (window.innerWidth >= 1024) {
                  e.currentTarget.style.transform = 'perspective(1000px) translateZ(0px) rotateY(0deg)';
                }
              }}
            >
              <div className="absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
              
              <div className="mb-10 relative">
                <div className="w-20 h-20 border border-accent/10 flex items-center justify-center group-hover:border-accent/25 transition-all duration-1000 group-hover:rotate-45">
                  <Icon name={item.icon} size={28} className="text-accent/70 group-hover:text-accent group-hover:-rotate-45 transition-all duration-1000" />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[26px] font-extralight tracking-[0.05em] text-white/95 mb-3">
                    {t.items[idx].title}
                  </h4>
                  <div className="text-[9px] tracking-[0.3em] text-accent/70 uppercase font-extralight">
                    {t.items[idx].subtitle}
                  </div>
                </div>
                <p className="text-[13px] leading-[1.9] text-white/60 font-extralight tracking-[0.01em]">
                  {t.items[idx].desc}
                </p>
              </div>

              <div className="mt-10 flex items-center text-[9px] tracking-[0.35em] text-accent/60 uppercase font-extralight group-hover:text-accent/80 group-hover:tracking-[0.4em] transition-all duration-700">
                En savoir plus
                <Icon name="ArrowRight" size={12} className="ml-3 group-hover:translate-x-2 transition-transform duration-700" />
              </div>
            </Card>
            </motion.div>
          );})
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;