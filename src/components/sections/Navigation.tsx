import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface NavigationProps {
  scrolled: boolean;
  theme: 'dark' | 'light';
  language: 'en' | 'ru';
  translations: any;
  onLanguageChange: (lang: 'en' | 'ru') => void;
  onThemeChange: () => void;
  onNavigate: (section: 'hero' | 'philosophy' | 'collections' | 'innovation' | 'contact') => void;
}

const Navigation = ({ 
  scrolled, 
  theme, 
  language, 
  translations, 
  onLanguageChange, 
  onThemeChange,
  onNavigate 
}: NavigationProps) => {
  const t = translations;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigate = (section: 'hero' | 'philosophy' | 'collections' | 'innovation' | 'contact') => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <>
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
              onClick={() => handleNavigate('hero')}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-accent/40 to-transparent transition-all duration-700 group-hover:h-20 group-hover:via-accent/60" />
              <div>
                <div className={`text-[9px] tracking-[0.4em] ${theme === 'dark' ? 'text-accent/60' : 'text-accent/70'} uppercase font-extralight`}>
                  Est. 1999
                </div>
                <h1 className={`text-[22px] tracking-[0.2em] ${theme === 'dark' ? 'text-foreground' : 'text-black'} font-extralight`}>
                  MAISON DE PIERRE
                </h1>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-12">
                {t.nav.map((name: string, idx: number) => {
                  const sections: ('hero' | 'philosophy' | 'collections' | 'innovation' | 'contact')[] = 
                    ['hero', 'philosophy', 'collections', 'innovation', 'contact'];
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavigate(sections[idx])}
                      className={`relative text-[10px] tracking-[0.3em] ${theme === 'dark' ? 'text-foreground/50 hover:text-foreground' : 'text-black/50 hover:text-black'} transition-all duration-700 uppercase font-extralight group`}
                    >
                      {name}
                      <span className="absolute -bottom-1 left-0 w-0 h-[0.5px] bg-gradient-to-r from-transparent via-accent/80 to-transparent group-hover:w-full transition-all duration-1000" />
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-secondary/10' : 'bg-gray-50'} backdrop-blur-md border ${theme === 'dark' ? 'border-accent/5' : 'border-accent/10'} px-3 py-2`}>
                  <button
                    onClick={() => onLanguageChange('en')}
                    className={`text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 px-2 py-1 ${
                      language === 'en' ? 'text-accent' : theme === 'dark' ? 'text-foreground/40 hover:text-foreground/60' : 'text-black/40 hover:text-black/60'
                    }`}
                  >
                    EN
                  </button>
                  <div className="w-px h-3 bg-accent/20" />
                  <button
                    onClick={() => onLanguageChange('ru')}
                    className={`text-[10px] tracking-[0.2em] uppercase font-light transition-all duration-300 px-2 py-1 ${
                      language === 'ru' ? 'text-accent' : theme === 'dark' ? 'text-foreground/40 hover:text-foreground/60' : 'text-black/40 hover:text-black/60'
                    }`}
                  >
                    RU
                  </button>
                </div>
                <button
                  onClick={onThemeChange}
                  className={`w-10 h-10 border ${theme === 'dark' ? 'border-accent/10 hover:border-accent/30 bg-secondary/10' : 'border-accent/20 hover:border-accent/40 bg-gray-50'} flex items-center justify-center transition-all duration-700 group backdrop-blur-md`}
                >
                  <Icon 
                    name={theme === 'dark' ? 'Sun' : 'Moon'} 
                    size={16} 
                    className="text-accent group-hover:rotate-180 transition-transform duration-700" 
                  />
                </button>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-12 h-12 border ${theme === 'dark' ? 'border-accent/20 hover:border-accent/40 bg-secondary/20' : 'border-accent/30 hover:border-accent/50 bg-gray-100'} flex items-center justify-center transition-all duration-500 backdrop-blur-sm`}
            >
              <Icon 
                name={mobileMenuOpen ? 'X' : 'Menu'} 
                size={20} 
                className="text-accent transition-transform duration-300" 
              />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div 
          className={`fixed inset-0 z-40 lg:hidden ${theme === 'dark' ? 'bg-black/98' : 'bg-white/98'} backdrop-blur-xl`}
          style={{ paddingTop: '100px' }}
        >
          <div className="container mx-auto px-8 py-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              {t.nav.map((name: string, idx: number) => {
                const sections: ('hero' | 'philosophy' | 'collections' | 'innovation' | 'contact')[] = 
                  ['hero', 'philosophy', 'collections', 'innovation', 'contact'];
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleNavigate(sections[idx])}
                    className={`text-left text-2xl tracking-[0.15em] ${theme === 'dark' ? 'text-foreground/80 hover:text-foreground' : 'text-black/80 hover:text-black'} transition-all duration-500 uppercase font-light border-b ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} pb-4`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-6 pt-8 border-t border-accent/20">
              <div className="flex items-center gap-4">
                <span className={`text-xs tracking-[0.2em] uppercase font-light ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'}`}>
                  Language:
                </span>
                <div className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-secondary/20' : 'bg-gray-100'} backdrop-blur-sm border ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} rounded-sm px-4 py-3`}>
                  <button
                    onClick={() => onLanguageChange('en')}
                    className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 px-3 py-1 ${
                      language === 'en' ? 'text-accent' : theme === 'dark' ? 'text-foreground/40 hover:text-foreground/60' : 'text-black/40 hover:text-black/60'
                    }`}
                  >
                    EN
                  </button>
                  <div className="w-px h-4 bg-accent/20" />
                  <button
                    onClick={() => onLanguageChange('ru')}
                    className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-300 px-3 py-1 ${
                      language === 'ru' ? 'text-accent' : theme === 'dark' ? 'text-foreground/40 hover:text-foreground/60' : 'text-black/40 hover:text-black/60'
                    }`}
                  >
                    RU
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className={`text-xs tracking-[0.2em] uppercase font-light ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'}`}>
                  Theme:
                </span>
                <button
                  onClick={onThemeChange}
                  className={`flex items-center gap-3 ${theme === 'dark' ? 'bg-secondary/20' : 'bg-gray-100'} backdrop-blur-sm border ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} px-6 py-3 transition-all duration-500 rounded-sm`}
                >
                  <Icon 
                    name={theme === 'dark' ? 'Sun' : 'Moon'} 
                    size={18} 
                    className="text-accent" 
                  />
                  <span className={`text-sm tracking-[0.2em] uppercase font-light ${theme === 'dark' ? 'text-foreground/60' : 'text-black/60'}`}>
                    {theme === 'dark' ? 'Light' : 'Dark'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;