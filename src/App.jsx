import { useEffect, useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import heroImage from './assets/728642-Suriname-Flag-Stripes.jpg';
import featureBamiImage from './assets/surinaamse-nasi.jpg';
import featurePomImage from './assets/Surinaams-broodje-pom-3.jpg';
import featureRotiImage from './assets/Surinaamse-roti-3-1170x780.jpg';
import menuHeroImage from './assets/surinaamse-loempia.jpg';
import partyBalloonsImage from './assets/Su-ballonen.png';
import thuisbezorgdLogo from './assets/thuisbezorgd_logo_app-e1672662946980.png';
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

const orderDetails = {
  href: 'https://mylightspeed.app/RWFNWBJG/C-ordering/menu',
  label: 'Bestel nu',
};

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/kitchensusan',
    shortLabel: 'f',
  },
  {
    label: 'Instagram',
    href: '',
    shortLabel: 'ig',
  },
  {
    label: 'TikTok',
    href: '',
    shortLabel: 'tt',
  },
];

const deliveryPartners = {
  thuisbezorgd: {
    href: 'https://www.thuisbezorgd.nl/menu/kitchen-susan',
    label: 'Bestel via Thuisbezorgd',
  },
};

const menuCategories = [
  {
    title: 'Belegde broodjes',
    items: [
      { name: 'Kerrie Kip', price: 'EUR 5,00' },
      { name: 'Ketjap Kip', price: 'EUR 5,00' },
      { name: 'Cha Sieuw Kip', price: 'EUR 5,00' },
      { name: 'Dynamite Kip', price: 'EUR 5,00' },
      { name: 'Hete Kip', price: 'EUR 5,00' },
      { name: 'Kerrie Ei', price: 'EUR 5,00' },
      { name: 'Pom', price: 'EUR 5,00' },
      { name: 'Kip Fashong', price: 'EUR 6,00' },
      { name: 'Garnalen', price: 'EUR 6,00' },
      { name: 'Garnalen Kouseband', price: 'EUR 6,00' },
      { name: 'Bakkeljauw', price: 'EUR 5,00' },
      { name: 'Tempe', price: 'EUR 5,00' },
      { name: 'Aardappel/Kouseband', price: 'EUR 5,00' },
    ],
  },
  {
    title: 'Soepen',
    items: [
      { name: 'Saoto Soep', price: 'EUR 7,50' },
      { name: 'Saoto Soep Vega', price: 'EUR 7,50' },
    ],
  },
  {
    title: 'Bruine nasi / witte nasi / bami',
    items: [
      { name: 'Ketjap Kip', price: 'EUR 12,50' },
      { name: 'Ketjap Kipfilet', price: 'EUR 13,50' },
      { name: 'Kip Sate', price: 'EUR 15,00' },
      { name: 'Cha Sieuw Kip', price: 'EUR 12,50' },
      { name: 'Cha Sieuw Kipfilet', price: 'EUR 13,50' },
      { name: 'Kerrie Kip', price: 'EUR 12,50' },
      { name: 'Kerrie Kipfilet', price: 'EUR 13,50' },
      { name: 'Garnalen', price: 'EUR 16,00' },
      { name: 'Vega', price: 'EUR 11,50' },
      { name: 'Blanco', price: 'EUR 9,00' },
    ],
  },
  {
    title: 'Witte rijst met groenten',
    items: [
      { name: 'Ketjap Kip', price: 'EUR 12,50' },
      { name: 'Ketjap Kipfilet', price: 'EUR 13,50' },
      { name: 'Cha Sieuw Kip', price: 'EUR 12,50' },
      { name: 'Cha Sieuw Kipfilet', price: 'EUR 13,50' },
      { name: 'Hete Kip', price: 'EUR 13,50' },
      { name: 'Kerrie Kip', price: 'EUR 12,50' },
      { name: 'Kerrie Kip Speciaal', price: 'EUR 13,50' },
      { name: 'Kerrie Kipfilet', price: 'EUR 13,50' },
      { name: 'Kerrie Kipfilet Speciaal', price: 'EUR 14,50' },
      { name: 'Pom', price: 'EUR 16,50' },
      { name: 'Doks', price: 'EUR 19,00' },
      { name: 'Garnalen', price: 'EUR 16,00' },
      { name: 'Bakkeljauw (vis)', price: 'EUR 16,00' },
      { name: 'Tempe', price: 'EUR 11,50' },
      { name: 'Vega', price: 'EUR 11,50' },
    ],
  },
  {
    title: "Roti's",
    items: [
      { name: 'Kerrie Kip', price: 'EUR 12,50' },
      { name: 'Kerrie Kip Speciaal', price: 'EUR 14,00' },
      { name: 'Kerrie Kipfilet', price: 'EUR 13,50' },
      { name: 'Kerrie Kipfilet Speciaal', price: 'EUR 15,00' },
      { name: 'Ketjap Kip', price: 'EUR 12,50' },
      { name: 'Ketjap Kipfilet', price: 'EUR 13,50' },
      { name: 'Doks', price: 'EUR 19,50' },
      { name: 'Vega', price: 'EUR 12,00' },
      { name: 'Rotirol Kipfilet', price: 'EUR 10,00' },
      { name: 'Rotirol Vega', price: 'EUR 9,00' },
      { name: 'Blanco', price: 'EUR 3,00' },
    ],
  },
  {
    title: 'Bruine bonen met rijst',
    items: [
      { name: 'Ketjap Kip', price: 'EUR 14,00' },
      { name: 'Ketjap Kipfilet', price: 'EUR 15,00' },
      { name: 'Cha Sieuw Kip', price: 'EUR 14,00' },
      { name: 'Cha Sieuw Kipfilet', price: 'EUR 15,00' },
      { name: 'Pom', price: 'EUR 17,00' },
      { name: 'Vega', price: 'EUR 13,00' },
    ],
  },
  {
    title: 'Snacks',
    items: [
      { name: 'Pastei', price: 'EUR 3,00' },
      { name: 'Loempia', price: 'EUR 4,00' },
      { name: 'Bakabana', price: 'EUR 3,00' },
      { name: 'Bakabana pindasaus', price: 'EUR 4,00' },
      { name: 'Bara', price: 'EUR 3,00' },
      { name: 'Bara Kip', price: 'EUR 7,00' },
      { name: 'Telo Bakkeljauw', price: 'EUR 7,00' },
      { name: 'Kippenworst', price: 'EUR 7,00' },
      { name: 'Kip Sate', price: 'EUR 7,00' },
      { name: 'Pitjel', price: 'EUR 8,50' },
      { name: 'Pitjel Speciaal', price: 'EUR 10,00' },
    ],
  },
  {
    title: 'Sambel',
    items: [
      { name: 'Ketjap', price: 'EUR 0,50' },
      { name: 'Peper geel', price: 'EUR 0,50' },
      { name: 'Sambel bami/nasi', price: 'EUR 0,50' },
      { name: 'Ketchup', price: 'EUR 0,50' },
      { name: 'Maagjes Sambel', price: 'EUR 1,00' },
      { name: 'Sojabrokken', price: 'EUR 1,00' },
      { name: 'Pindasaus', price: 'EUR 2,50' },
    ],
  },
  {
    title: 'Dranken',
    items: [
      { name: 'Cola/Cola Zero/Sprite', price: 'EUR 3,00' },
      { name: 'Fernandes/Fanta', price: 'EUR 3,00' },
      { name: 'Dawet', price: 'EUR 4,00' },
      { name: 'Maaza Mango/Tropical', price: 'EUR 3,00' },
      { name: 'Spa Blauw/Rood', price: 'EUR 3,00' },
      { name: 'Ice Tea Green/Sparkling', price: 'EUR 3,00' },
      { name: 'Red Bull', price: 'EUR 3,00' },
      { name: 'Coco Kokosdrank', price: 'EUR 3,00' },
      { name: 'Markoesa Sap', price: 'EUR 4,00' },
      { name: 'Gemberbier', price: 'EUR 3,00' },
      { name: 'Heineken Bier', price: 'EUR 4,00' },
      { name: 'Wijn', price: 'EUR 5,00' },
      { name: 'Likeur, Vodka', price: 'EUR 7,00' },
      { name: 'Bacardi/Whiskey', price: 'EUR 7,00' },
      { name: 'Cognac', price: 'EUR 7,00' },
      { name: 'Koffie/Thee', price: 'EUR 3,00' },
      { name: 'Cappucino', price: 'EUR 4,00' },
      { name: 'Munt of Gember Thee', price: 'EUR 4,00' },
    ],
  },
  {
    title: 'Bittergarnituur',
    items: [
      { name: 'Kip Bitterballen', price: 'EUR 8,00' },
      { name: "Krokante Gamba's", price: 'EUR 9,00' },
      { name: "Vega mini Loempia's", price: 'EUR 7,00' },
    ],
  },
  {
    title: 'Nagerecht',
    items: [
      { name: 'Bojo', price: 'EUR 3,50' },
      { name: 'Goelong Goelong', price: 'EUR 4,50' },
      { name: 'Cocos ijs', price: 'EUR 7,00' },
    ],
  },
  {
    title: 'Extra',
    items: [
      { name: 'Dhaal', price: 'EUR 5,00' },
      { name: 'Pompoen', price: 'EUR 5,00' },
      { name: 'Kip extra', price: 'EUR 6,00' },
      { name: 'Bakje groente', price: 'EUR 4,00' },
      { name: 'Bakje zuur', price: 'EUR 3,00' },
    ],
  },
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function SocialBrandIcon({ label }) {
  if (label === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13.6 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.5V4.3c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.4-4 4.2v2h-2.7v3h2.7V21h3.3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.9" />
        <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.3 4.2c.7.8 1.7 1.3 2.8 1.5v2.2a6 6 0 0 1-2.8-.7v6.1a5.1 5.1 0 1 1-5.1-5.1c.4 0 .8 0 1.1.1v2.3a3 3 0 1 0 1.8 2.7V3h2.2c0 .4.3.9.7 1.2Z"
        fill="currentColor"
      />
    </svg>
  );
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
            <a
              className="button button--secondary"
              href={orderDetails.href}
              target="_blank"
              rel="noreferrer"
            >
              {orderDetails.label}
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
        <div className="section-shell">
          <div className="party-section">
            <span className="party-section__dot party-section__dot--top" />
            <span className="party-section__dot party-section__dot--middle" />
            <span className="party-section__dot party-section__dot--bottom" />

            <div className="party-section__frame">
              <img src={partyBalloonsImage} alt="Suriname ballonnen in restaurant voor feestjes" />
            </div>

            <div className="party-section__content">
              <p className="party-section__eyebrow">Kitchen Susan events</p>
              <h2>Feestje</h2>
              <p>
                Vier je verjaardag, bedrijfsfeestje, borrel of feestje in ons restaurant en
                laat alle zorgen uit handen nemen.
              </p>
              <p>
                Geniet van een sfeervolle ambiance, speciaal gereserveerde ruimtes, dansvloer
                en diverse arrangementen zoals uitgebreide diners, borrels met hapjes.
              </p>
            </div>

            <div className="party-section__logo-wrap">
              <img className="party-section__logo" src={logo} alt="Kitchen Susan logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="info-grid" id="about">
        <div className="section-shell info-grid__layout">
          <article
            className="info-card info-card--about"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(6, 34, 20, 0.86), rgba(38, 8, 12, 0.82)), url(${heroImage})`,
            }}
          >
            <p className="section-heading__eyebrow">Over ons</p>
            <h3>Surinaamse warmte in een moderne setting</h3>
            <p>
              Kitchen Susan brengt rijke familierecepten, kruidige marinades en een warme sfeer
              samen in een verzorgde, eigentijdse uitstraling.
            </p>
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
                    {item.description ? <p>{item.description}</p> : null}
                  </article>
                ))}
              </div>
            </section>
          ))}
          <div className="menu-results__footer">
            <span>Al onze gerechten zijn halal, incl. sambal en zuur.</span>
            <span>Afhalen, bezorgen en catering op aanvraag.</span>
          </div>
        </section>

        <a
          className="menu-page__sticky-order button button--primary"
          href={orderDetails.href}
          target="_blank"
          rel="noreferrer"
        >
          {orderDetails.label}
        </a>
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

      <footer className="site-footer-contact" id="contact">
        <div className="section-shell site-footer-contact__inner">
          <div className="site-footer-contact__copy">
            <p className="section-heading__eyebrow">Contact & openingstijden</p>
            <h2>{contactDetails.hours}</h2>
          </div>
          <a className="site-footer-contact__phone" href={contactDetails.phoneHref}>
            <span className="site-footer-contact__phone-icon" aria-hidden="true">
              <Phone size={22} />
            </span>
            <span className="site-footer-contact__phone-text">
              <span className="site-footer-contact__phone-label">Telefoon</span>
              <strong>{contactDetails.phoneLabel}</strong>
            </span>
          </a>
        </div>

        <div className="site-footer-quicklinks">
          <div className="site-footer-quicklinks__inner">
            <div className="site-footer-quicklinks__group">
              <span className="site-footer-quicklinks__label">Snel naar</span>
              <nav className="site-footer-quicklinks__nav" aria-label="Snelle links">
                <a href="#home">Home</a>
                <a href="#menu">Menu</a>
                <a href="#home/reserveer">Feestje</a>
                <a href="#home/about">Over ons</a>
                <a href="#home/contact">Contact</a>
              </nav>
            </div>

            <div className="site-footer-social">
              <span className="site-footer-quicklinks__label">Volg ons</span>
              <div className="site-footer-social__icons" aria-label="Social media links">
                {socialLinks.map((item) =>
                  item.href ? (
                    <a
                      key={item.label}
                      className="site-footer-social__icon"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <SocialBrandIcon label={item.label} />
                    </a>
                  ) : (
                    <span
                      key={item.label}
                      className="site-footer-social__icon site-footer-social__icon--inactive"
                      aria-label={`${item.label} link volgt`}
                      title={`${item.label} link volgt`}
                    >
                      <SocialBrandIcon label={item.label} />
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {!isMenuPage && (
        <a
          className="floating-delivery-badge"
          href={deliveryPartners.thuisbezorgd.href}
          target="_blank"
          rel="noreferrer"
          aria-label={deliveryPartners.thuisbezorgd.label}
          title={deliveryPartners.thuisbezorgd.label}
        >
          <img src={thuisbezorgdLogo} alt="Thuisbezorgd.nl logo" />
          <span>Thuisbezorgd</span>
        </a>
      )}

      {!isMenuPage && (
        <a
          className="floating-whatsapp"
          href={contactDetails.whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Open WhatsApp chat met Kitchen Susan"
        >
          <MessageCircle size={28} />
        </a>
      )}
    </div>
  );
}

export default App;
