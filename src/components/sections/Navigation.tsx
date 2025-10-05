import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

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

  return (
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
            onClick={() => onNavigate('hero')}
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
              {t.nav.map((name: string, idx: number) => {
                const sections: ('hero' | 'philosophy' | 'collections' | 'innovation' | 'contact')[] = 
                  ['hero', 'philosophy', 'collections', 'innovation', 'contact'];
                
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate(sections[idx])}
                    className={`relative text-[11px] tracking-[0.25em] ${theme === 'dark' ? 'text-foreground/60 hover:text-foreground' : 'text-black/60 hover:text-black'} transition-all duration-500 uppercase font-light group`}
                  >
                    {name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-full transition-all duration-700" />
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-secondary/20' : 'bg-gray-100'} backdrop-blur-sm border ${theme === 'dark' ? 'border-accent/10' : 'border-accent/20'} rounded-sm px-3 py-2`}>
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
  );
};

export default Navigation;
