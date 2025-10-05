interface PhilosophySectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const PhilosophySection = ({ scrollY, theme, translations }: PhilosophySectionProps) => {
  const t = translations;

  return (
    <section className={`py-40 ${theme === 'dark' ? 'bg-secondary/30' : 'bg-gray-50'} relative overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(201,169,97,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
            transform: `translate(${Math.sin(scrollY * 0.001) * 100}px, ${Math.cos(scrollY * 0.001) * 100}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.2})`,
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(201,169,97,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
            transform: `translate(${Math.cos(scrollY * 0.0015) * -80}px, ${Math.sin(scrollY * 0.0015) * 80}px) scale(${1 + Math.cos(scrollY * 0.002) * 0.15})`,
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'linear-gradient(45deg, rgba(201,169,97,0.2) 0%, rgba(201,169,97,0.05) 100%)',
            filter: 'blur(100px)',
            transform: `rotate(${scrollY * 0.05}deg) scale(${1 + Math.sin(scrollY * 0.003) * 0.3})`,
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-24 items-center max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
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

            <div className="space-y-6 max-w-3xl mx-auto">
              <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} font-light tracking-wide`}>
                {t.desc1}
              </p>
              <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} font-light tracking-wide`}>
                {t.desc2}
              </p>
            </div>

            <div className={`grid grid-cols-3 gap-8 pt-12 border-t ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} max-w-3xl mx-auto`}>
              {[
                { value: "25+" },
                { value: "∞" },
                { value: "100%" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="text-5xl font-light text-accent mb-3 group-hover:scale-110 transition-transform duration-500">
                    {stat.value}
                  </div>
                  <div className={`text-[10px] tracking-[0.2em] ${theme === 'dark' ? 'text-foreground/50' : 'text-black/50'} uppercase font-light`}>
                    {t.stats[idx]}
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

export default PhilosophySection;
