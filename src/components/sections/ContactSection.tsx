import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  scrollY: number;
  theme: 'dark' | 'light';
  translations: any;
}

const ContactSection = ({ scrollY, theme, translations }: ContactSectionProps) => {
  const t = translations;

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
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <div className="text-[10px] tracking-[0.4em] text-accent mb-8 uppercase font-light luxury-line inline-block">
              {t.tag}
            </div>
            <h3 className={`text-6xl leading-tight font-light tracking-[0.05em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8`}>
              {t.title1}
              <br />
              <span className="text-gradient-gold">{t.title2}</span>
            </h3>
          </div>

          <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} font-light tracking-wide max-w-2xl mx-auto`}>
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black px-16 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-700 hover:shadow-[0_0_50px_rgba(201,169,97,0.4)] hover:scale-105"
            >
              {t.appointment}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`bg-transparent border ${theme === 'dark' ? 'border-accent/40 hover:border-accent hover:bg-accent/5 text-foreground' : 'border-accent/50 hover:border-accent hover:bg-accent/10 text-black'} px-16 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,97,0.15)]`}
            >
              {t.catalog}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;