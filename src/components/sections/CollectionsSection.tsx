import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CollectionsSectionProps {
  translations: any;
}

const CollectionsSection = ({ translations }: CollectionsSectionProps) => {
  const t = translations;

  return (
    <section className="py-40 relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-secondary/30 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <div className="text-[10px] tracking-[0.4em] text-accent mb-6 uppercase font-light luxury-line inline-block">
            {t.tag}
          </div>
          <h3 
            className="text-6xl font-light tracking-[0.05em] text-white mb-6"
          >
            <span className="lg:inline-block" style={window.innerWidth >= 1024 ? { display: 'inline-block', transform: 'translateZ(25px)' } : {}}>{t.title}</span>
          </h3>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {[
            { icon: "Gem" },
            { icon: "Droplets" },
            { icon: "Palette" }
          ].map((item, idx) => (
            <Card
              key={idx}
              className="bg-white/5 backdrop-blur-sm border-0 p-12 lg:hover:bg-white/10 transition-all duration-700 group cursor-pointer relative overflow-hidden lg:hover:shadow-[0_0_60px_rgba(201,169,97,0.15)]"
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
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
              
              <div className="mb-8 relative">
                <div className="w-20 h-20 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 transition-colors duration-700 group-hover:rotate-45 transition-transform">
                  <Icon name={item.icon} size={32} className="text-accent group-hover:-rotate-45 transition-transform duration-700" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-light tracking-[0.08em] text-white mb-2">
                    {t.items[idx].title}
                  </h4>
                  <div className="text-[10px] tracking-[0.25em] text-accent uppercase font-light">
                    {t.items[idx].subtitle}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
                  {t.items[idx].desc}
                </p>
              </div>

              <div className="mt-8 flex items-center text-[10px] tracking-[0.3em] text-accent uppercase font-light group-hover:tracking-[0.35em] transition-all duration-500">
                En savoir plus
                <Icon name="ArrowRight" size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;