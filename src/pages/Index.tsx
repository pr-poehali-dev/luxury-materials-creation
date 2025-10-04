import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const collectionsRef = useRef<HTMLElement>(null);
  const innovationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-accent/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => scrollToSection(heroRef)}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-0.5 h-12 bg-gradient-to-b from-transparent via-accent to-transparent transition-all duration-500 group-hover:h-16" />
              <div>
                <div className="text-[11px] tracking-[0.3em] text-accent/80 uppercase font-light">
                  Est. 1999
                </div>
                <h1 className="text-2xl tracking-[0.15em] text-foreground font-light">
                  MAISON DE PIERRE
                </h1>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-12">
              {[
                { name: "Accueil", ref: heroRef },
                { name: "Philosophie", ref: philosophyRef },
                { name: "Collections", ref: collectionsRef },
                { name: "Innovation", ref: innovationRef },
                { name: "Contact", ref: contactRef }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.ref)}
                  className="relative text-[11px] tracking-[0.25em] text-foreground/60 hover:text-foreground transition-all duration-500 uppercase font-light group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-full transition-all duration-700" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-black"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img
            src="/img/709a65a5-9076-4bed-97a8-a8700f3813e8.jpg"
            alt="Luxury materials"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        </div>

        <div 
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            opacity: 1 - scrollY / 600,
          }}
        >
          <div className="mb-12 animate-fade-in">
            <div className="inline-block">
              <div className="text-[10px] tracking-[0.4em] text-accent mb-6 uppercase font-light luxury-line">
                Depuis 1999
              </div>
            </div>
          </div>
          
          <h2 className="text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-light tracking-[0.08em] text-foreground mb-8 animate-fade-in">
            MAISON
            <br />
            <span className="text-gradient-gold">DE PIERRE</span>
          </h2>

          <p className="text-lg tracking-[0.15em] text-foreground/70 mb-16 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up">
            Où l'excellence architecturale rencontre l'innovation intemporelle
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in">
            <Button
              size="lg"
              onClick={() => scrollToSection(collectionsRef)}
              className="bg-transparent border border-accent/40 hover:border-accent hover:bg-accent/5 text-foreground px-14 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,169,97,0.15)]"
            >
              Explorer
            </Button>
            <button 
              onClick={() => scrollToSection(philosophyRef)}
              className="text-xs tracking-[0.3em] text-foreground/60 hover:text-accent uppercase font-light transition-all duration-500 flex items-center gap-3 group"
            >
              Découvrir
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection(philosophyRef)}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent/60 to-transparent" />
        </button>
      </section>

      <section ref={philosophyRef} className="py-40 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
            style={{
              transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)`,
            }}
          />
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div>
                <div className="text-[10px] tracking-[0.4em] text-accent mb-6 uppercase font-light luxury-line inline-block">
                  Notre Vision
                </div>
                <h3 className="text-6xl leading-tight font-light tracking-[0.05em] text-foreground mb-8">
                  L'art de bâtir
                  <br />
                  <span className="text-gradient-gold">l'éternité</span>
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-base leading-loose text-foreground/60 font-light tracking-wide">
                  Depuis plus d'un quart de siècle, Maison de Pierre incarne l'excellence dans la sélection 
                  de matériaux architecturaux d'exception. Chaque pierre, chaque pigment est choisi avec la 
                  précision d'un joaillier.
                </p>
                <p className="text-base leading-loose text-foreground/60 font-light tracking-wide">
                  Nous ne vendons pas des matériaux. Nous offrons des fragments d'éternité, 
                  destinés aux projets qui transcendent les époques.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-accent/10">
                {[
                  { value: "25+", label: "Années d'excellence" },
                  { value: "∞", label: "Qualité intemporelle" },
                  { value: "100%", label: "Sur mesure" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="text-5xl font-light text-accent mb-3 group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </div>
                    <div className="text-[10px] tracking-[0.2em] text-foreground/50 uppercase font-light">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
              <div 
                className="relative overflow-hidden"
                style={{
                  transform: `translateY(${(scrollY - 800) * -0.1}px)`,
                }}
              >
                <img
                  src="/img/009006cb-e8db-4011-bf6f-04d36ffb74de.jpg"
                  alt="Premium materials"
                  className="w-full h-[700px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 border border-accent/20 group-hover:border-accent/40 transition-colors duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={collectionsRef} className="py-40 bg-black relative">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 uppercase font-light luxury-line inline-block">
              Collections Exclusives
            </div>
            <h3 className="text-6xl font-light tracking-[0.05em] text-foreground mb-6">
              Matériaux d'exception
            </h3>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                icon: "Gem",
                title: "Pierres naturelles",
                subtitle: "Carrara · Calacatta · Statuario",
                desc: "Marbres et granits extraits des carrières les plus prestigieuses du monde"
              },
              {
                icon: "Droplets",
                title: "Peintures innovantes",
                subtitle: "Technologie NanoShield™",
                desc: "Formulations révolutionnaires avec garantie de performance 50+ ans"
              },
              {
                icon: "Palette",
                title: "Finitions d'art",
                subtitle: "Stucco Veneziano · Tadelakt",
                desc: "Techniques ancestrales réinventées par nos maîtres artisans"
              }
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-secondary/20 border-0 p-12 hover:bg-secondary/30 transition-all duration-700 group cursor-pointer relative overflow-hidden"
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
                    <h4 className="text-2xl font-light tracking-[0.08em] text-foreground mb-2">
                      {item.title}
                    </h4>
                    <div className="text-[10px] tracking-[0.25em] text-accent uppercase font-light">
                      {item.subtitle}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/50 font-light tracking-wide">
                    {item.desc}
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

      <section ref={innovationRef} className="py-40 bg-secondary/20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/files/96502297-55a5-4f1b-9094-15f929d959bf.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${(scrollY - 2400) * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1 group">
              <div className="relative overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/96502297-55a5-4f1b-9094-15f929d959bf.jpg"
                  alt="Innovation - Marble texture"
                  className="w-full h-[600px] object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 border border-accent/20 group-hover:border-accent/40 transition-colors duration-700" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-accent/10 pointer-events-none" />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="text-[10px] tracking-[0.4em] text-accent mb-6 uppercase font-light luxury-line inline-block">
                  Innovation
                </div>
                <h3 className="text-6xl leading-tight font-light tracking-[0.05em] text-foreground mb-8">
                  La science au service
                  <br />
                  <span className="text-gradient-gold">de la beauté</span>
                </h3>
              </div>

              <p className="text-base leading-loose text-foreground/80 font-light tracking-wide">
                Nos peintures intègrent la technologie NanoShield™ : une révolution silencieuse 
                qui garantit une protection optimale pendant plus d'un demi-siècle.
              </p>

              <div className="space-y-6 pt-8">
                {[
                  {
                    icon: "Shield",
                    title: "Protection ultime",
                    desc: "Résistance UV · Hydrofuge · Anti-pollution"
                  },
                  {
                    icon: "Sparkles",
                    title: "Pigments purs",
                    desc: "Couleurs authentiques sans altération dans le temps"
                  },
                  {
                    icon: "Leaf",
                    title: "Éco-responsable",
                    desc: "Formulations à base d'ingrédients naturels certifiés"
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-6 group cursor-pointer">
                    <div className="w-14 h-14 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent/60 transition-colors duration-500">
                      <Icon name={feature.icon} size={20} className="text-accent" />
                    </div>
                    <div className="pt-1">
                      <div className="text-lg font-light tracking-[0.08em] text-foreground mb-2">
                        {feature.title}
                      </div>
                      <div className="text-xs tracking-wide text-foreground/50 font-light">
                        {feature.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="py-40 bg-black relative">
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
                Rejoignez l'excellence
              </div>
              <h3 className="text-6xl leading-tight font-light tracking-[0.05em] text-foreground mb-8">
                Créons ensemble
                <br />
                <span className="text-gradient-gold">votre chef-d'œuvre</span>
              </h3>
            </div>

            <p className="text-base leading-loose text-foreground/60 font-light tracking-wide max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour une consultation personnalisée 
              et vous accompagner dans la réalisation de vos projets les plus ambitieux.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black px-16 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,97,0.3)]"
              >
                Prendre rendez-vous
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border border-accent/40 hover:border-accent hover:bg-accent/5 text-foreground px-16 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500"
              >
                Catalogue 2024
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-accent/10 py-20">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <div className="text-[10px] tracking-[0.3em] text-accent/60 uppercase font-light mb-2">
                  Est. 1999
                </div>
                <h4 className="text-xl tracking-[0.15em] text-foreground font-light">
                  MAISON DE PIERRE
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-foreground/40 font-light tracking-wide">
                L'excellence architecturale depuis plus de 25 ans
              </p>
            </div>

            {[
              {
                title: "Collections",
                items: ["Pierres naturelles", "Peintures", "Finitions", "Sur mesure"]
              },
              {
                title: "Entreprise",
                items: ["Notre histoire", "Philosophie", "Projets", "Carrières"]
              },
              {
                title: "Contact",
                items: ["Paris · London · Milano", "+33 1 00 00 00 00", "contact@maisondepierre.fr"]
              }
            ].map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h5 className="text-[10px] tracking-[0.3em] text-foreground uppercase font-light">
                  {section.title}
                </h5>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs text-foreground/40 hover:text-accent cursor-pointer transition-colors duration-300 font-light tracking-wide"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-12 border-t border-accent/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] tracking-[0.2em] text-foreground/30 uppercase font-light">
                © MMXXIV Maison de Pierre. Tous droits réservés.
              </p>
              <div className="flex items-center gap-8">
                {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                  <button
                    key={social}
                    className="text-[10px] tracking-[0.2em] text-foreground/30 hover:text-accent uppercase font-light transition-colors duration-300"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
