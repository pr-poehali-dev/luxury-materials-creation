interface PhilosophySectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const PhilosophySection = ({ scrollY, theme, translations }: PhilosophySectionProps) => {
  const t = translations;

  return (
    <section className={`py-48 ${theme === 'dark' ? 'bg-gradient-to-b from-background via-secondary/20 to-background' : 'bg-gradient-to-b from-white via-gray-50 to-white'} relative overflow-hidden`}>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none z-10" />
      
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div 
          className="absolute top-1/4 left-1/4 w-[900px] h-[900px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, rgba(201,169,97,1) 0%, transparent 70%)',
            filter: 'blur(120px)',
            transform: `translate(${Math.sin(scrollY * 0.0008) * 120}px, ${Math.cos(scrollY * 0.0008) * 120}px) scale(${1 + Math.sin(scrollY * 0.0015) * 0.25})`,
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] rounded-full opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, rgba(201,169,97,1) 0%, transparent 70%)',
            filter: 'blur(100px)',
            transform: `translate(${Math.cos(scrollY * 0.001) * -100}px, ${Math.sin(scrollY * 0.001) * 100}px) scale(${1 + Math.cos(scrollY * 0.0015) * 0.2})`,
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-24 items-center max-w-5xl mx-auto">
          <div className="space-y-12 text-center">
            <div>
              <div className="text-[9px] tracking-[0.5em] text-accent/80 mb-8 uppercase font-light luxury-line inline-block">
                {t.tag}
              </div>
              <h3 
                className={`text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] font-light tracking-[0.03em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-12`}
              >
                <span className="lg:inline-block" style={window.innerWidth >= 1024 ? { display: 'inline-block', transform: 'translateZ(10px)' } : {}}>{t.title1}</span>
                <br />
                <span className="text-gradient-gold lg:inline-block" style={window.innerWidth >= 1024 ? { display: 'inline-block', transform: 'translateZ(40px)' } : {}}>{t.title2}</span>
              </h3>
            </div>

            <div className="space-y-8 max-w-3xl mx-auto">
              <p className={`text-[15px] leading-[2] ${theme === 'dark' ? 'text-foreground/70' : 'text-black/70'} font-light tracking-[0.02em]`}>
                {t.desc1}
              </p>
              <p className={`text-[15px] leading-[2] ${theme === 'dark' ? 'text-foreground/70' : 'text-black/70'} font-light tracking-[0.02em]`}>
                {t.desc2}
              </p>
              <p className={`text-[15px] leading-[2] ${theme === 'dark' ? 'text-foreground/80' : 'text-black/80'} font-light tracking-[0.02em] italic`}>
                {t.desc3}
              </p>
            </div>

            <div className={`grid grid-cols-3 gap-12 pt-16 mt-4 border-t ${theme === 'dark' ? 'border-accent/5' : 'border-accent/10'} max-w-4xl mx-auto`}>
              {[
                { value: "25+" },
                { value: "∞" },
                { value: "100%" }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="text-center group cursor-pointer"
                >
                  <div 
                    className="text-6xl font-extralight text-accent/90 mb-4 lg:group-hover:scale-105 transition-all duration-1000 lg:group-hover:drop-shadow-[0_0_30px_rgba(201,169,97,0.4)]"
                    style={window.innerWidth >= 1024 ? {
                      transform: 'translateZ(30px)',
                      transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                    } : {}}
                  >
                    {stat.value}
                  </div>
                  <div className={`text-[9px] tracking-[0.3em] ${theme === 'dark' ? 'text-foreground/40' : 'text-black/40'} uppercase font-light group-hover:text-accent/80 transition-colors duration-700`}>
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