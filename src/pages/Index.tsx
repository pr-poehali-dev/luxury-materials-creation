import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
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

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const translations = {
    en: {
      nav: ["Home", "Philosophy", "Collections", "Innovation", "Contact"],
      hero: {
        subtitle: "Where architectural excellence meets timeless innovation",
        explore: "Explore",
        discover: "Discover"
      },
      philosophy: {
        tag: "Our Vision",
        title1: "The art of building",
        title2: "eternity",
        desc1: "For over a quarter of a century, Maison de Pierre embodies excellence in the selection of exceptional architectural materials. Each stone, each pigment is chosen with a jeweler's precision.",
        desc2: "We don't sell materials. We offer fragments of eternity, destined for projects that transcend time.",
        stats: ["Years of excellence", "Timeless quality", "Custom made"]
      },
      collections: {
        tag: "Exclusive Collections",
        title: "Exceptional materials",
        items: [
          {
            title: "Natural stones",
            subtitle: "Carrara · Calacatta · Statuario",
            desc: "Marbles and granites extracted from the world's most prestigious quarries"
          },
          {
            title: "Innovative paints",
            subtitle: "NanoShield™ Technology",
            desc: "Revolutionary formulations with 50+ years performance guarantee"
          },
          {
            title: "Art finishes",
            subtitle: "Stucco Veneziano · Tadelakt",
            desc: "Ancestral techniques reinvented by our master craftsmen"
          }
        ]
      },
      innovation: {
        tag: "Innovation",
        title1: "Science in service",
        title2: "of beauty",
        desc: "Our paints integrate NanoShield™ technology: a silent revolution that guarantees optimal protection for over half a century.",
        features: [
          {
            title: "Ultimate protection",
            desc: "UV resistance · Waterproof · Anti-pollution"
          },
          {
            title: "Pure pigments",
            desc: "Authentic colors without alteration over time"
          },
          {
            title: "Eco-responsible",
            desc: "Formulations based on certified natural ingredients"
          }
        ]
      },
      contact: {
        tag: "Join excellence",
        title1: "Let's create together",
        title2: "your masterpiece",
        desc: "Our experts are at your disposal for personalized consultation and to support you in realizing your most ambitious projects.",
        appointment: "Make an appointment",
        catalog: "Catalog 2024"
      }
    },
    ru: {
      nav: ["Главная", "Философия", "Коллекции", "Инновации", "Контакты"],
      hero: {
        subtitle: "Где архитектурное совершенство встречается с вечными инновациями",
        explore: "Исследовать",
        discover: "Открыть"
      },
      philosophy: {
        tag: "Наше видение",
        title1: "Искусство строить",
        title2: "вечность",
        desc1: "Более четверти века Maison de Pierre воплощает совершенство в подборе исключительных архитектурных материалов. Каждый камень, каждый пигмент выбирается с точностью ювелира.",
        desc2: "Мы не продаём материалы. Мы предлагаем фрагменты вечности, предназначенные для проектов, которые выходят за рамки времени.",
        stats: ["Лет совершенства", "Вечное качество", "На заказ"]
      },
      collections: {
        tag: "Эксклюзивные коллекции",
        title: "Исключительные материалы",
        items: [
          {
            title: "Натуральный камень",
            subtitle: "Каррара · Калакатта · Статуарио",
            desc: "Мрамор и гранит из самых престижных карьеров мира"
          },
          {
            title: "Инновационные краски",
            subtitle: "Технология NanoShield™",
            desc: "Революционные формулы с гарантией более 50 лет"
          },
          {
            title: "Художественная отделка",
            subtitle: "Stucco Veneziano · Tadelakt",
            desc: "Древние техники в исполнении наших мастеров"
          }
        ]
      },
      innovation: {
        tag: "Инновации",
        title1: "Наука на службе",
        title2: "красоты",
        desc: "Наши краски включают технологию NanoShield™: тихая революция, которая гарантирует оптимальную защиту более полувека.",
        features: [
          {
            title: "Абсолютная защита",
            desc: "UV стойкость · Гидрофобность · Защита от загрязнений"
          },
          {
            title: "Чистые пигменты",
            desc: "Аутентичные цвета без изменений во времени"
          },
          {
            title: "Эко-ответственность",
            desc: "Формулы на основе сертифицированных природных компонентов"
          }
        ]
      },
      contact: {
        tag: "Присоединяйтесь к совершенству",
        title1: "Создадим вместе",
        title2: "ваш шедевр",
        desc: "Наши эксперты готовы провести персональную консультацию и помочь воплотить ваши самые амбициозные проекты.",
        appointment: "Записаться на консультацию",
        catalog: "Каталог 2024"
      }
    }
  };

  const t = translations[language];

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const bgClass = theme === 'dark' ? 'bg-background' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-foreground' : 'text-black';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} overflow-x-hidden transition-colors duration-700`}>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? theme === 'dark' ? "bg-black/95 backdrop-blur-xl border-b border-accent/10" : "bg-white/95 backdrop-blur-xl border-b border-accent/20"
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
                <div className={`text-[11px] tracking-[0.3em] ${theme === 'dark' ? 'text-accent/80' : 'text-accent'} uppercase font-light`}>
                  Est. 1999
                </div>
                <h1 className={`text-2xl tracking-[0.15em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} font-light`}>
                  MAISON DE PIERRE
                </h1>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-12">
                {[
                  { ref: heroRef },
                  { ref: philosophyRef },
                  { ref: collectionsRef },
                  { ref: innovationRef },
                  { ref: contactRef }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(item.ref)}
                    className={`relative text-[11px] tracking-[0.25em] ${theme === 'dark' ? 'text-foreground/60 hover:text-foreground' : 'text-black/60 hover:text-black'} transition-all duration-500 uppercase font-light group`}
                  >
                    {t.nav[idx]}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-full transition-all duration-700" />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-secondary/20' : 'bg-gray-100'} backdrop-blur-sm border ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} rounded-sm px-3 py-2`}>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 px-2 py-1 ${
                      language === 'en' ? 'text-accent' : theme === 'dark' ? 'text-foreground/40 hover:text-foreground/60' : 'text-black/40 hover:text-black/60'
                    }`}
                  >
                    EN
                  </button>
                  <div className="w-px h-3 bg-accent/20" />
                  <button
                    onClick={() => setLanguage('ru')}
                    className={`text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 px-2 py-1 ${
                      language === 'ru' ? 'text-accent' : theme === 'dark' ? 'text-foreground/40 hover:text-foreground/60' : 'text-black/40 hover:text-black/60'
                    }`}
                  >
                    RU
                  </button>
                </div>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`w-10 h-10 border ${theme === 'dark' ? 'border-accent/20 hover:border-accent/40 bg-secondary/20' : 'border-accent/30 hover:border-accent/50 bg-gray-100'} flex items-center justify-center transition-all duration-500 group backdrop-blur-sm`}
                >
                  <Icon 
                    name={theme === 'dark' ? 'Sun' : 'Moon'} 
                    size={16} 
                    className="text-accent group-hover:rotate-180 transition-transform duration-700" 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className={theme === 'dark' ? "absolute inset-0 bg-black" : "absolute inset-0 bg-gray-50"}
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img
            src="/img/709a65a5-9076-4bed-97a8-a8700f3813e8.jpg"
            alt="Luxury materials"
            className={`w-full h-full object-cover ${theme === 'dark' ? 'opacity-40' : 'opacity-20'}`}
          />
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-black/60 via-black/20 to-black' : 'bg-gradient-to-b from-white/60 via-white/20 to-white'}`} />
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
          
          <h2 className={`text-[clamp(3rem,10vw,9rem)] leading-[0.9] font-light tracking-[0.08em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8 animate-fade-in`}>
            MAISON
            <br />
            <span className="text-gradient-gold">DE PIERRE</span>
          </h2>

          <p className={`text-lg tracking-[0.15em] ${theme === 'dark' ? 'text-foreground/70' : 'text-black/70'} mb-16 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up`}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-scale-in">
            <Button
              size="lg"
              onClick={() => scrollToSection(collectionsRef)}
              className={`bg-transparent border ${theme === 'dark' ? 'border-accent/40 hover:border-accent hover:bg-accent/5 text-foreground' : 'border-accent/50 hover:border-accent hover:bg-accent/10 text-black'} px-14 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,169,97,0.15)]`}
            >
              {t.hero.explore}
            </Button>
            <button 
              onClick={() => scrollToSection(philosophyRef)}
              className={`text-xs tracking-[0.3em] ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} hover:text-accent uppercase font-light transition-all duration-500 flex items-center gap-3 group`}
            >
              {t.hero.discover}
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

      <section ref={philosophyRef} className={`py-40 ${theme === 'dark' ? 'bg-secondary/30' : 'bg-gray-50'} relative overflow-hidden`}>
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
                  {t.philosophy.tag}
                </div>
                <h3 className={`text-6xl leading-tight font-light tracking-[0.05em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8`}>
                  {t.philosophy.title1}
                  <br />
                  <span className="text-gradient-gold">{t.philosophy.title2}</span>
                </h3>
              </div>

              <div className="space-y-6 max-w-3xl mx-auto">
                <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} font-light tracking-wide`}>
                  {t.philosophy.desc1}
                </p>
                <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} font-light tracking-wide`}>
                  {t.philosophy.desc2}
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
                      {t.philosophy.stats[idx]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={collectionsRef} className="py-40 relative" style={{ backgroundColor: '#4a4e69' }}>
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <div className="text-[10px] tracking-[0.4em] text-accent mb-6 uppercase font-light luxury-line inline-block">
              {t.collections.tag}
            </div>
            <h3 className="text-6xl font-light tracking-[0.05em] text-white mb-6">
              {t.collections.title}
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
                className="bg-white/5 border-0 p-12 hover:bg-white/10 transition-all duration-700 group cursor-pointer relative overflow-hidden"
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
                      {t.collections.items[idx].title}
                    </h4>
                    <div className="text-[10px] tracking-[0.25em] text-accent uppercase font-light">
                      {t.collections.items[idx].subtitle}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
                    {t.collections.items[idx].desc}
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

      <section ref={innovationRef} className={`py-40 ${theme === 'dark' ? 'bg-secondary/20' : 'bg-gray-100'} relative overflow-hidden`}>
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
                  {t.innovation.tag}
                </div>
                <h3 className={`text-6xl leading-tight font-light tracking-[0.05em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8`}>
                  {t.innovation.title1}
                  <br />
                  <span className="text-gradient-gold">{t.innovation.title2}</span>
                </h3>
              </div>

              <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/80' : 'text-black/70'} font-light tracking-wide`}>
                {t.innovation.desc}
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
                        {t.innovation.features[idx].title}
                      </div>
                      <div className={`text-xs tracking-wide ${theme === 'dark' ? 'text-foreground/50' : 'text-black/50'} font-light`}>
                        {t.innovation.features[idx].desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className={`py-40 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
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
                {t.contact.tag}
              </div>
              <h3 className={`text-6xl leading-tight font-light tracking-[0.05em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} mb-8`}>
                {t.contact.title1}
                <br />
                <span className="text-gradient-gold">{t.contact.title2}</span>
              </h3>
            </div>

            <p className={`text-base leading-loose ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'} font-light tracking-wide max-w-2xl mx-auto`}>
              {t.contact.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black px-16 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,97,0.3)]"
              >
                {t.contact.appointment}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={`bg-transparent border ${theme === 'dark' ? 'border-accent/40 hover:border-accent hover:bg-accent/5 text-foreground' : 'border-accent/50 hover:border-accent hover:bg-accent/10 text-black'} px-16 py-7 text-xs tracking-[0.3em] uppercase font-light transition-all duration-500`}
              >
                {t.contact.catalog}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className={`${theme === 'dark' ? 'bg-black border-t border-accent/10' : 'bg-gray-50 border-t border-accent/20'} py-20`}>
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="space-y-6">
              <div>
                <div className={`text-[10px] tracking-[0.3em] ${theme === 'dark' ? 'text-accent/60' : 'text-accent'} uppercase font-light mb-2`}>
                  Est. 1999
                </div>
                <h4 className={`text-xl tracking-[0.15em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} font-light`}>
                  MAISON DE PIERRE
                </h4>
              </div>
              <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-foreground/40' : 'text-black/40'} font-light tracking-wide`}>
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
                <h5 className={`text-[10px] tracking-[0.3em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} uppercase font-light`}>
                  {section.title}
                </h5>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className={`text-xs ${theme === 'dark' ? 'text-foreground/40' : 'text-black/40'} hover:text-accent cursor-pointer transition-colors duration-300 font-light tracking-wide`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`pt-12 border-t ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className={`text-[10px] tracking-[0.2em] ${theme === 'dark' ? 'text-foreground/30' : 'text-black/30'} uppercase font-light`}>
                © MMXXIV Maison de Pierre. Tous droits réservés.
              </p>
              <div className="flex items-center gap-8">
                {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
                  <button
                    key={social}
                    className={`text-[10px] tracking-[0.2em] ${theme === 'dark' ? 'text-foreground/30' : 'text-black/30'} hover:text-accent uppercase font-light transition-colors duration-300`}
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
