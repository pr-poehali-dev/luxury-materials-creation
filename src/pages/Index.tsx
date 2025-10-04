import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A961] to-[#8B7355] flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <h1 className="text-2xl font-bold text-primary-foreground tracking-wider">
                MAISON DE PIERRE
              </h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {["Главная", "О бренде", "Материалы", "Технологии", "Контакт"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors relative group text-sm tracking-wide"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/img/709a65a5-9076-4bed-97a8-a8700f3813e8.jpg')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h2 className="text-7xl md:text-9xl font-bold text-primary-foreground mb-6 tracking-tight">
            MAISON DE PIERRE
          </h2>
          <p className="text-2xl md:text-3xl text-gradient-gold font-light mb-8 italic tracking-wide">
            Où le luxe rencontre l'innovation
          </p>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Эксклюзивные строительные материалы премиум-класса для самых взыскательных проектов
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary px-12 py-6 text-lg font-semibold tracking-wider transition-all hover:scale-105"
          >
            Исследовать коллекцию
          </Button>
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="text-sm tracking-widest text-accent mb-4 uppercase">О бренде</div>
              <h3 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Философия совершенства
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Maison de Pierre — это не просто поставщик строительных материалов. Это философия,
                где каждый элемент создан для воплощения вашей мечты о безупречном пространстве.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы тщательно отбираем материалы со всего мира, сотрудничая только с мастерами,
                которые разделяют нашу страсть к качеству и инновациям.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">25+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Лет опыта
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Материалов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    Премиум
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] animate-scale-in">
              <img
                src="/img/009006cb-e8db-4011-bf6f-04d36ffb74de.jpg"
                alt="Premium materials"
                className="w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 border-4 border-accent/30 -translate-x-4 -translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-sm tracking-widest text-accent mb-4 uppercase">Наши категории</div>
            <h3 className="text-5xl font-bold text-foreground mb-6">Премиум материалы</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая категория представляет собой вершину качества и эстетики
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Gem",
                title: "Натуральный камень",
                description: "Мрамор, гранит и эксклюзивные породы из лучших карьеров мира"
              },
              {
                icon: "Palette",
                title: "Инновационные краски",
                description: "Технология нового поколения с микрокапсулами и защитой 50+ лет"
              },
              {
                icon: "Brush",
                title: "Декоративные покрытия",
                description: "Венецианская штукатурка и эксклюзивные текстуры ручной работы"
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-accent/20 bg-card"
              >
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name={item.icon} size={32} className="text-accent" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] order-2 md:order-1">
              <img
                src="/img/008411f8-a6b8-4270-a572-db8475b51c55.jpg"
                alt="Innovative paint technology"
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="text-sm tracking-widest text-accent mb-4 uppercase">Инновации</div>
              <h3 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Технология будущего
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наши краски премиум-класса созданы с использованием революционной технологии
                микрокапсулирования пигментов.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: "Shield",
                    title: "Защита 50+ лет",
                    desc: "Стойкость к УФ и атмосферным воздействиям"
                  },
                  {
                    icon: "Droplet",
                    title: "Самоочищение",
                    desc: "Нанотехнология отталкивания загрязнений"
                  },
                  {
                    icon: "Sparkles",
                    title: "Глубина цвета",
                    desc: "Уникальная насыщенность и переливы"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-1">{feature.title}</div>
                      <div className="text-sm text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-primary px-8 py-5 text-base tracking-wide"
              >
                Подробнее о технологии
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold mb-6">Создайте своё совершенство</h3>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Свяжитесь с нашими экспертами для индивидуальной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary px-12 py-6 text-lg font-semibold tracking-wider"
            >
              Записаться на консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-12 py-6 text-lg font-semibold tracking-wider"
            >
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-16 border-t border-accent/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-6 tracking-wider">MAISON DE PIERRE</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                Эксклюзивные материалы для создания пространств вашей мечты
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 tracking-wide">Категории</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="hover:opacity-100 cursor-pointer transition-opacity">
                  Натуральный камень
                </li>
                <li className="hover:opacity-100 cursor-pointer transition-opacity">Краски</li>
                <li className="hover:opacity-100 cursor-pointer transition-opacity">
                  Декоративные покрытия
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 tracking-wide">Компания</h5>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="hover:opacity-100 cursor-pointer transition-opacity">О нас</li>
                <li className="hover:opacity-100 cursor-pointer transition-opacity">Проекты</li>
                <li className="hover:opacity-100 cursor-pointer transition-opacity">Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 tracking-wide">Контакты</h5>
              <div className="space-y-3 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@maisondepierre.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-70">
            © 2024 Maison de Pierre. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
