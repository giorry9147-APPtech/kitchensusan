import { useEffect, useState } from 'react';
import {
  Bean,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Coffee,
  CupSoda,
  Flame,
  IceCreamBowl,
  Menu,
  MessageCircle,
  Phone,
  Pizza,
  Salad,
  Sandwich,
  ShoppingBag,
  Soup,
  UtensilsCrossed,
  Wheat,
  X,
} from 'lucide-react';
import heroImage from './assets/728642-Suriname-Flag-Stripes.jpg';
import hoofdgerechtOneImage from './assets/hoofdgerecht-1.png';
import hoofdgerechtTwoImage from './assets/hoofdgerecht-2.png';
import hoofdgerechtThreeImage from './assets/hoofdgerecht-3.png';
import hoofdgerechtFiveImage from './assets/hoofdgerecht-5.png';
import broodjeImage from './assets/Broodje-1.png';
import saotoSoepImage from './assets/soep-saoto.png';
import snackTeloImage from './assets/snacks-1 (1).png';
import snackLoempiaImage from './assets/snacks-1 (2).png';
import snackBakabanaImage from './assets/snacks-1 (3).png';
import menuHeroImage from './assets/IMG_8353.PNG';
import partyBalloonsImage from './assets/Su-ballonen.png';
import thuisbezorgdLogo from './assets/thuisbezorgd_logo_app-e1672662946980.png';
import logo from './assets/SUSANLOGO1.png';

const featuredDishes = [
  {
    title: 'Bruine nasi',
    image: hoofdgerechtOneImage,
  },
  {
    title: 'Witte nasi',
    image: hoofdgerechtTwoImage,
  },
  {
    title: 'Bami',
    image: hoofdgerechtThreeImage,
  },
  {
    title: 'Roti',
    image: hoofdgerechtFiveImage,
  },
];

const featuredSnacks = [
  {
    title: 'Telo bakkeljauw',
    image: snackTeloImage,
  },
  {
    title: 'Loempia',
    image: snackLoempiaImage,
  },
  {
    title: 'Bakabana',
    image: snackBakabanaImage,
  },
];

const featuredBroodjesAndSoep = [
  {
    title: 'Belegd broodje',
    image: broodjeImage,
  },
  {
    title: 'Saoto soep',
    image: saotoSoepImage,
  },
];

const featuredSlideshows = [
  {
    id: 'hoofdgerechten',
    label: 'Hoofdgerechten',
    title: 'BRUINE NASI / WITTE NASI / BAMI / WITTE RIJST / ROTI',
    items: featuredDishes,
  },
  {
    id: 'broodjes-soep',
    label: 'Broodjes & soep',
    title: 'BELEGDE BROODJES / SAOTO SOEP',
    items: featuredBroodjesAndSoep,
  },
  {
    id: 'snacks',
    label: 'Snacks',
    title: 'TELO / BAKABANA / LOEMPIA / BARA / PASTEI',
    items: featuredSnacks,
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

const menuCategoryTabs = [
  {
    title: 'Alle gerechten',
    icon: UtensilsCrossed,
    isAll: true,
  },
  ...menuCategories.map((category) => {
    const icons = {
      'Belegde broodjes': Sandwich,
      Soepen: Soup,
      'Bruine nasi / witte nasi / bami': Salad,
      'Witte rijst met groenten': Wheat,
      "Roti's": Pizza,
      'Bruine bonen met rijst': Bean,
      Snacks: Pizza,
      Sambel: Flame,
      Dranken: CupSoda,
      Bittergarnituur: IceCreamBowl,
      Nagerecht: Coffee,
      Extra: UtensilsCrossed,
    };

    const labels = {
      'Bruine nasi / witte nasi / bami': 'Bruine / witte nasi / bami',
    };

    return {
      ...category,
      icon: icons[category.title] ?? UtensilsCrossed,
      tabLabel: labels[category.title] ?? category.title,
      isAll: false,
    };
  }),
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

function FeatureShowcase({ slideshow }) {
  const [activeDishIndex, setActiveDishIndex] = useState(0);

  const showPreviousDish = () => {
    setActiveDishIndex((currentIndex) =>
      currentIndex === 0 ? slideshow.items.length - 1 : currentIndex - 1,
    );
  };

  const showNextDish = () => {
    setActiveDishIndex((currentIndex) =>
      currentIndex === slideshow.items.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <article className="feature-showcase" aria-roledescription="carousel" aria-label={`Slideshow ${slideshow.label}`}>
      <div className="feature-showcase__content">
        <div className="feature-showcase__badge">
          <span>{slideshow.label}</span>
          <strong>0{activeDishIndex + 1}</strong>
        </div>
      </div>

      <div className="feature-showcase__media">
        <div
          className="feature-showcase__track"
          style={{ transform: `translateX(-${activeDishIndex * 100}%)` }}
        >
          {slideshow.items.map((dish) => (
            <div className="feature-showcase__slide" key={dish.title}>
              <img src={dish.image} alt={`${slideshow.label} ${dish.title}`} />
            </div>
          ))}
        </div>

        <div className="feature-showcase__controls">
          <button
            type="button"
            className="feature-showcase__arrow"
            onClick={showPreviousDish}
            aria-label={`Vorige ${slideshow.label} foto`}
            title="Vorige"
          >
            <ChevronLeft size={24} />
          </button>
          <span>
            {activeDishIndex + 1} / {slideshow.items.length}
          </span>
          <button
            type="button"
            className="feature-showcase__arrow"
            onClick={showNextDish}
            aria-label={`Volgende ${slideshow.label} foto`}
            title="Volgende"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="feature-showcase__footer">
        <div className="feature-showcase__dots" role="tablist" aria-label={`Kies ${slideshow.label} foto`}>
          {slideshow.items.map((dish, index) => (
            <button
              key={dish.title}
              type="button"
              className={`feature-showcase__dot ${index === activeDishIndex ? 'feature-showcase__dot--active' : ''}`}
              onClick={() => setActiveDishIndex(index)}
              aria-label={`Toon ${dish.title}`}
              aria-selected={index === activeDishIndex}
            />
          ))}
        </div>

        <div className="feature-showcase__actions">
          <a
            className="button button--primary"
            href={orderDetails.href}
            target="_blank"
            rel="noreferrer"
          >
            <ShoppingBag size={20} />
            {orderDetails.label}
          </a>
          <a className="feature-showcase__menu-link" href="#menu">
            Bekijk menu
          </a>
        </div>
      </div>
    </article>
  );
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

          <div className="feature-showcases">
            {featuredSlideshows.map((slideshow) => (
              <FeatureShowcase key={slideshow.id} slideshow={slideshow} />
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
        <article
          className="info-card info-card--about"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(6, 34, 20, 0.92), rgba(16, 17, 12, 0.82) 48%, rgba(92, 10, 22, 0.82)), url(${heroImage})`,
          }}
        >
          <div className="section-shell info-card__content">
            <p className="section-heading__eyebrow">Over ons</p>
            <h3>Surinaamse warmte in een moderne setting</h3>
            <p>
              Kitchen Susan brengt rijke familierecepten, kruidige marinades en een warme sfeer
              samen in een verzorgde, eigentijdse uitstraling.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategoryTabs[0].title);

  const scrollToCategory = (title) => {
    setActiveCategory(title);

    if (title === 'Alle gerechten') {
      const element = document.querySelector('.menu-results');
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const element = document.getElementById(`menu-${slugify(title)}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    let animationFrameId = 0;

    const updateActiveCategory = () => {
      const activationLine = window.innerHeight * 0.32;
      const sections = menuCategories
        .map((category) => ({
          title: category.title,
          element: document.getElementById(`menu-${slugify(category.title)}`),
        }))
        .filter((section) => section.element);

      const firstSection = sections[0]?.element;

      if (firstSection && firstSection.getBoundingClientRect().top > activationLine) {
        setActiveCategory('Alle gerechten');
        return;
      }

      const currentSection = sections
        .filter((section) => section.element.getBoundingClientRect().top <= activationLine)
        .at(-1);

      if (currentSection) {
        setActiveCategory(currentSection.title);
      }
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateActiveCategory);
    };

    updateActiveCategory();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="menu-page" id="menu-page">
      <div className="menu-page__hero-media">
        <img src={menuHeroImage} alt="Kitchen Susan menu hero" />
        <div className="menu-page__hero-media-overlay" />
      </div>
      <div className="section-shell menu-page__shell">
        <div className="menu-page__intro">
          <div>
            <p className="section-heading__eyebrow">Kitchen Susan menu</p>
            <h1>Menukaart</h1>
          </div>
        </div>

        <div className="menu-page__tabs" role="tablist" aria-label="Menucategorieen">
          {menuCategoryTabs.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                type="button"
                className={`menu-pill ${category.title === activeCategory ? 'menu-pill--active' : ''}`}
                onClick={() => scrollToCategory(category.title)}
              >
                <Icon size={24} strokeWidth={2.25} />
                <span>{category.tabLabel ?? category.title}</span>
              </button>
            );
          })}
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
          Klik om te bestellen
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
      setIsNavOpen(false);
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
          <div className="site-footer-contact__mark" aria-hidden="true">
            <span />
            <Clock3 size={48} strokeWidth={1.8} />
            <span />
          </div>
          <div className="site-footer-contact__copy">
            <p className="section-heading__eyebrow">Contact & openingstijden</p>
            <h2>{contactDetails.hours}</h2>
          </div>
          <a className="site-footer-contact__phone" href={contactDetails.phoneHref}>
            <span className="site-footer-contact__phone-icon" aria-hidden="true">
              <Phone size={42} />
            </span>
            <span className="site-footer-contact__phone-text">
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

            <p className="site-footer-copyright">
              © 2026 Kitchen Susan. Alle rechten voorbehouden.
            </p>
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
