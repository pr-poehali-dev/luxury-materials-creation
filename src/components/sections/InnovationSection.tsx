import Icon from "@/components/ui/icon";

interface InnovationSectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const InnovationSection = ({ scrollY, theme, translations }: InnovationSectionProps) => {
  const t = translations;

  return (
    <section className={`py-40 ${theme === 'dark' ? 'bg-secondary/20' : 'bg-gray-100'} relative overflow-hidden`}>
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://cdn.poehali.dev/files/96502297-55a5-4f1b-9094-15f929d959bf.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${(scrollY - 2400) * 0.3}px)`,
        }}
      />
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-black/80 via-black/60 to-black/80' : 'bg-gradient-to-b from-white/80 via-white/60 to-white/80'}`} />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="relative overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/96502297-55a5-4f1b-9094-15f929d959bf.jpg"
                alt="Innovation - Marble texture"
                className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-t from-white/60 to-transparent'}`} />
              <div className={`absolute inset-0 border ${theme === 'dark' ? 'border-accent/20' : 'border-accent/30'} group-hover:border-accent/40 transition-colors duration-700`} />
            </div>
            <div className={`absolute -bottom-8 -right-8 w-64 h-64 border ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} pointer-events-none`} />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="text-[10px] tracking-[0.4em] text-accent mb-6 uppercase font-light luxury-line inline-block">
                {t.tag}
              </div>
              <h3 className={`text-6xl leading-tight font-light tracking-[0.05em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8`}>
                {t.title1}
                <br />
                <span className="text-gradient-gold">{t.title2}</span>
              </h3>
            </div>

            <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/80' : 'text-black/70'} font-light tracking-wide`}>
              {t.desc}
            </p>

            <div className="space-y-6 pt-8">
              {[
                { icon: "Shield" },
                { icon: "Sparkles" },
                { icon: "Leaf" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-6 group cursor-pointer">
                  <div className={`w-14 h-14 border ${theme === 'dark' ? 'border-accent/20' : 'border-accent/30'} flex items-center justify-center flex-shrink-0 group-hover:border-accent/60 transition-colors duration-500`}>
                    <Icon name={feature.icon} size={20} className="text-accent" />
                  </div>
                  <div className="pt-1">
                    <div className={`text-lg font-light tracking-[0.08em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-2`}>
                      {t.features[idx].title}
                    </div>
                    <div className={`text-xs tracking-wide ${theme === 'dark' ? 'text-foreground/50' : 'text-black/50'} font-light`}>
                      {t.features[idx].desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
