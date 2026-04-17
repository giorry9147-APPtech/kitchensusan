import { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import heroImage from './assets/728642-Suriname-Flag-Stripes.jpg';
import featureBamiImage from './assets/surinaamse-nasi.jpg';
import featurePomImage from './assets/Surinaams-broodje-pom-3.jpg';
import featureRotiImage from './assets/Surinaamse-roti-3-1170x780.jpg';
import menuHeroImage from './assets/surinaamse-loempia.jpg';
import logo from './assets/SUSANLOGO1.png';

const featuredDishes = [
  {
    title: 'Roti Special',
    tag: 'Signature',
    description: 'Zachte roti, kruidige kip, aardappel en een warme masala saus met echte Surinaamse diepte.',
    price: 'EUR 14,00',
    image: featureRotiImage,
  },
  {
    title: 'Bami Kip',
    tag: 'Favoriet',
    description: 'Gebakken bami met malse kip, verse groenten en een rijke ketjap-kruiding.',
    price: 'EUR 13,50',
    image: featureBamiImage,
  },
  {
    title: 'Broodje Pom',
    tag: 'Klassieker',
    description: 'Een rijk belegd broodje met zachte pom, kruidige diepte en die herkenbare Surinaamse smaak.',
    price: 'EUR 5,00',
    image: featurePomImage,
  },
];

const contactDetails = {
  phoneLabel: '06 222 81 555',
  phoneHref: 'tel:0622281555',
  hours: 'Geopend van maandag t/m vrijdag van 11.30-20.30 uur',
  whatsappHref:
    'https://wa.me/31622281555?text=Hallo%20Kitchen%20Susan%2C%0A%0AIk%20wil%20graag%20een%20bestelling%20plaatsen%20of%20meer%20informatie%20ontvangen.%0A%0ANaam%3A%0ATelefoonnummer%3A%0ABestelling%3A%0AGewenste%20afhaal%20of%20bezorgtijd%3A',
  whatsappLabel: 'Bestel via WhatsApp',
};

const menuCategories = [
  {
    title: 'Hoofdgerechten',
    items: [
      {
        name: 'Roti kip speciaal',
        description: 'Zachte roti, kruidige kip, aardappel, kousenband en huisgemaakte masala.',
        price: 'EUR 14,00',
      },
      {
        name: 'Bami kip',
        description: 'Gebakken bami met malse kip, groenten en een rijke Surinaamse ketjap-smaak.',
        price: 'EUR 13,50',
      },
      {
        name: 'Witte rijst met pom',
        description: 'Surinaamse ovenschotel van pomtajer met witte rijst, sambal en zuur.',
        price: 'EUR 13,50',
      },
      {
        name: 'Nasi garnalen',
        description: 'Gebakken nasi met garnalen, groenten en huisgemaakte kruidenmix.',
        price: 'EUR 16,50',
      },
    ],
  },
  {
    title: 'Broodjes',
    items: [
      {
        name: 'Broodje kerrie kip',
        description: 'Vers broodje met romige kerrie kip en frisse toppings.',
        price: 'EUR 5,00',
      },
      {
        name: 'Broodje cha sieuw kip',
        description: 'Zoet-hartige kip op een zacht broodje met Surinaamse streetfood-vibe.',
        price: 'EUR 5,00',
      },
      {
        name: 'Broodje pom',
        description: 'Een geliefde klassieker, royaal belegd en perfect voor lunch.',
        price: 'EUR 5,00',
      },
      {
        name: 'Broodje garnalen kouseband',
        description: 'Malse garnalen met kouseband en kruidige saus op vers brood.',
        price: 'EUR 6,00',
      },
    ],
  },
  {
    title: 'Snacks',
    items: [
      {
        name: 'Pastei',
        description: 'Luchtig bladerdeeg gevuld met kruidige kip en aardappel.',
        price: 'EUR 3,00',
      },
      {
        name: 'Loempia',
        description: 'Krokant gebakken loempia met een hartige vulling en saus erbij.',
        price: 'EUR 4,00',
      },
      {
        name: 'Bara kip',
        description: 'Gebakken bara met malse kip, fris zuur en kruidige saus.',
        price: 'EUR 7,00',
      },
      {
        name: 'Bakabana pindasaus',
        description: 'Zoete gebakken banaan met warme pindasaus voor de perfecte bite.',
        price: 'EUR 4,00',
      },
    ],
  },
  {
    title: 'Dranken',
    items: [
      {
        name: 'Fernandes rood of groen',
        description: 'Surinaamse frisdrank die perfect past bij warme en kruidige gerechten.',
        price: 'EUR 3,00',
      },
      {
        name: 'Maaza mango',
        description: 'Tropische mangodrank met volle smaak en frisse afdronk.',
        price: 'EUR 3,00',
      },
      {
        name: 'Markoesa sap',
        description: 'Passievruchtensap met een frisse, fruitige punch.',
        price: 'EUR 4,00',
      },
      {
        name: 'Koffie of thee',
        description: 'Een warme afsluiter na je maaltijd of snack.',
        price: 'EUR 3,00',
      },
    ],
  },
  {
    title: 'Extras',
    items: [
      {
        name: 'Pindasaus',
        description: 'Romige pindasaus als extra dip of topping bij je gerecht.',
        price: 'EUR 2,50',
      },
      {
        name: 'Dhaal',
        description: 'Vol gekruide linzen, heerlijk naast roti of rijstgerechten.',
        price: 'EUR 5,00',
      },
      {
        name: 'Bojo',
        description: 'Zoete Surinaamse cassavecake als dessert of lekkernij.',
        price: 'EUR 3,50',
      },
      {
        name: 'Cocos ijs',
        description: 'Fris dessert met romige kokossmaak en een tropische twist.',
        price: 'EUR 7,00',
      },
    ],
  },
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseHash() {
  const rawHash = window.location.hash.replace('#', '');

  if (!rawHash) {
    return { page: 'home', section: '' };
  }

  const [page, section = ''] = rawHash.split('/');
  return {
    page: page === 'menu' ? 'menu' : 'home',
    section,
  };
}

function HomePage() {
  return (
    <>
      <section className="hero" id="home">
        <img className="hero__bg" src={heroImage} alt="Surinaamse kleuren als hero achtergrond" />
        <div className="hero__overlay" />

        <div className="hero__flag-glow hero__flag-glow--top" />
        <div className="hero__flag-glow hero__flag-glow--bottom" />

        <div className="hero__content">
          <p className="hero__eyebrow">Surinaams Restaurant</p>
          <h1>Kitchen Susan</h1>
          <p className="hero__intro">
            Welkom bij ons Surinaamse restaurant waar we heerlijke gerechten serveren zoals nasi,
            bami, roti en snacks. Geniet van de authentieke smaken en de warme sfeer.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#menu">
              Bekijk menu kaart
            </a>
            <a className="button button--secondary" href="#home/reserveer">
              Bestel online
            </a>
          </div>
        </div>
      </section>

      <section className="featured" id="featured">
        <div className="section-shell">
          <div className="section-heading">
            <p className="section-heading__eyebrow">Featured dishes</p>
            <h2>Onze favorieten</h2>
            <p>
              Een selectie van populaire gerechten met warme kruiden, rijke smaken en een
              verzorgde presentatie.
            </p>
          </div>

          <div className="featured__grid">
            {featuredDishes.map((dish, index) => (
              <article className="feature-card" key={dish.title}>
                <div className="feature-card__image-wrap">
                  <img className="feature-card__image" src={dish.image} alt={dish.title} />
                </div>
                <div className="feature-card__badge">
                  <span>{dish.tag}</span>
                  <strong>0{index + 1}</strong>
                </div>
                <h3>{dish.title}</h3>
                <p>{dish.description}</p>
                <div className="feature-card__footer">
                  <span>{dish.price}</span>
                  <a href="#menu">Bekijk menu</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reserve-strip" id="reserveer">
        <div className="section-shell reserve-strip__inner">
          <div>
            <p className="section-heading__eyebrow">Reserveren</p>
            <h2>Plan je lunch, diner of afhaalbestelling</h2>
            <p>
              Reserveer een tafel of plaats direct een bestelling voor afhalen. Duidelijk,
              snel en helemaal in de sfeer van Kitchen Susan.
            </p>
          </div>
          <div className="reserve-strip__actions">
            <a className="button button--primary" href="#menu">
              Naar menu
            </a>
            <a className="button button--secondary" href="#home/contact">
              Neem contact op
            </a>
          </div>
        </div>
      </section>

      <section className="info-grid" id="about">
        <div className="section-shell info-grid__layout">
          <article className="info-card">
            <p className="section-heading__eyebrow">Over ons</p>
            <h3>Surinaamse warmte in een moderne setting</h3>
            <p>
              Kitchen Susan brengt rijke familierecepten, kruidige marinades en een warme sfeer
              samen in een verzorgde, eigentijdse uitstraling.
            </p>
          </article>
          <article className="info-card" id="contact">
            <p className="section-heading__eyebrow">Contact</p>
            <h3>Bel ons of kom langs tijdens openingstijden</h3>
            <p>
              Gebruik de site als centrale plek voor reserveren, bezorgen, afhalen en het
              bekijken van de volledige menukaart.
            </p>
            <div className="contact-card__details">
              <div className="contact-card__item">
                <span className="contact-card__label">Openingstijden</span>
                <strong>{contactDetails.hours}</strong>
              </div>
              <div className="contact-card__item">
                <span className="contact-card__label">Telefoon</span>
                <a href={contactDetails.phoneHref}>{contactDetails.phoneLabel}</a>
              </div>
              <div className="contact-card__item">
                <span className="contact-card__label">WhatsApp</span>
                <a className="contact-card__whatsapp" href={contactDetails.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  <span>{contactDetails.whatsappLabel}</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].title);

  const scrollToCategory = (title) => {
    setActiveCategory(title);
    const element = document.getElementById(`menu-${slugify(title)}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="menu-page" id="menu-page">
      <div className="menu-page__hero-media">
        <img src={menuHeroImage} alt="Surinaamse loempia als menu hero" />
        <div className="menu-page__hero-media-overlay" />
      </div>
      <div className="section-shell menu-page__shell">
        <div className="menu-page__intro">
          <div>
            <p className="section-heading__eyebrow">Kitchen Susan menu</p>
            <h1>Menukaart</h1>
            <p>
              Kies direct een categorie en zie de gerechten meteen verschijnen. Geen lange scroll
              eerst, maar gelijk de inhoud zoals in je voorbeeld.
            </p>
          </div>
        </div>

        <div className="menu-page__tabs" role="tablist" aria-label="Menucategorieen">
          {menuCategories.map((category) => (
            <button
              key={category.title}
              type="button"
              className={`menu-pill ${category.title === activeCategory ? 'menu-pill--active' : ''}`}
              onClick={() => scrollToCategory(category.title)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <section className="menu-results">
          {menuCategories.map((category) => (
            <section
              key={category.title}
              id={`menu-${slugify(category.title)}`}
              className="menu-category-section"
            >
              <div className="menu-results__heading">
                <span className="menu-results__line" />
                <div>
                  <h2>{category.title}</h2>
                </div>
                <span className="menu-results__line" />
              </div>

              <div className="menu-results__grid">
                {category.items.map((item) => (
                  <article className="menu-result-card" key={item.name}>
                    <div className="menu-result-card__top">
                      <h3>{item.name}</h3>
                      <span className="menu-result-card__price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
          <div className="menu-results__footer">
            <span>Halal gerechten, sambal en zuur beschikbaar.</span>
            <span>Afhalen, bezorgen en catering op aanvraag.</span>
          </div>
        </section>
      </div>
    </section>
  );
}

function App() {
  const [route, setRoute] = useState(() => parseHash());
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (route.section) {
        const targetElement = document.getElementById(route.section);
        targetElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [route]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [route]);

  const isMenuPage = route.page === 'menu';

  return (
    <div className="page-shell">
      <header className={`site-header ${isMenuPage ? 'site-header--menu' : ''}`}>
        <div className="section-shell site-header__inner">
          <a className="brand" href="#home" aria-label="Kitchen Susan home">
            <img className="brand__full-logo" src={logo} alt="Kitchen Susan Surinaams Restaurant logo" />
          </a>

          <nav className="nav-links" aria-label="Hoofdnavigatie">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#home/reserveer">Reserveren</a>
            <a href="#home/about">Over ons</a>
            <a href="#home/contact">Contact</a>
          </nav>

          <a className="nav-cta nav-cta--desktop" href="#home/reserveer">
            Reserveer tafel
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={isNavOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isNavOpen && (
          <div className="mobile-nav">
            <nav className="mobile-nav__links" aria-label="Mobiele navigatie">
              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#home/reserveer">Reserveren</a>
              <a href="#home/about">Over ons</a>
              <a href="#home/contact">Contact</a>
            </nav>
            <a className="nav-cta mobile-nav__cta" href="#home/reserveer">
              Reserveer tafel
            </a>
          </div>
        )}
      </header>

      {isMenuPage ? <MenuPage /> : <HomePage />}

      <footer className="site-footer-contact">
        <div className="section-shell site-footer-contact__inner">
          <div>
            <p className="section-heading__eyebrow">Contact & openingstijden</p>
            <h2>{contactDetails.hours}</h2>
          </div>
          <a className="site-footer-contact__phone" href={contactDetails.phoneHref}>
            Telefoon: {contactDetails.phoneLabel}
          </a>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={contactDetails.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Open WhatsApp chat met Kitchen Susan"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

export default App;
