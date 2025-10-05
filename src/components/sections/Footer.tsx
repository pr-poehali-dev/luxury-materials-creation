interface FooterProps {
  theme: 'dark' | 'light';
}

const Footer = ({ theme }: FooterProps) => {
  return (
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
              items: ["Produced in France", "+33 1 00 00 00 00", "contact@maisondepierre.fr"]
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
  );
};

export default Footer;