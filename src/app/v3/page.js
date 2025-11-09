"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

const navItems = [
  {
    label: "New Drops",
    href: "#new",
  },
  {
    label: "Playtime",
    href: "#playtime",
  },
  {
    label: "Wearables",
    href: "#wearables",
  },
  {
    label: "Gifting",
    href: "#gifting",
  },
];

const heroSlides = [
  {
    image: "https://cdn.shopify.com/s/files/1/0667/3550/5582/files/C60Kids-space-wallpaper-mural_75.jpg?v=1732265456",
    badge: "New Season",
    headlineTop: "Wonder",
    headlineBottom: "Playground",
    description: "Imagination-approved gear for little dreamers.",
    primary: { href: "#new", label: "Explore Now" },
  },
  {
    image: "https://cdn.shopify.com/s/files/1/0657/3100/2634/files/papierpeintlune-chambreenfant.png?v=1715585244",
    badge: "Bedtime edit",
    headlineTop: "Dreamy",
    headlineBottom: "Night",
    description: "Glow-in-the-dark bedding, moon lamps, and soothing story cubes.",
    primary: { href: "#wearables", label: "Shop Bedtime" },
  },
];

const featuredProducts = [
  {
    title: "Stellar Story Lamp",
    description: "Soft lunar glow with switchable story filters.",
    price: "LKR 7,200",
    image: "/no-image.jpg",
  },
  {
    title: "Sensory Cloud Throw",
    description: "Weighted blanket with removable plush cover.",
    price: "LKR 6,450",
    image: "/no-image.jpg",
  },
  {
    title: "Aurora Build Blocks",
    description: "32-piece pastel set with tactile textures.",
    price: "LKR 5,150",
    image: "/no-image.jpg",
  },
  {
    title: "Rocket Bedtime Set",
    description: "2-piece pajama + sleep mask kit for explorers.",
    price: "LKR 4,350",
    image: "/no-image.jpg",
  },
  {
    title: "Celestial Sound Soother",
    description: "Portable white-noise pod with customizable lullabies.",
    price: "LKR 3,950",
    image: "/no-image.jpg",
  },
  {
    title: "Glow Path Tiles",
    description: "Snap-together floor tiles that light up every step.",
    price: "LKR 4,890",
    image: "/no-image.jpg",
  },
  {
    title: "Orbit Activity Tray",
    description: "Rotating tray with swappable sensory bins.",
    price: "LKR 5,600",
    image: "/no-image.jpg",
  },
  {
    title: "Nebula Bath Set",
    description: "Foam stars and temperature-safe LED bath toys.",
    price: "LKR 3,450",
    image: "/no-image.jpg",
  },
  {
    title: "Cosmic Craft Bundle",
    description: "Glitter putty, metallic paints, and tactile brushes.",
    price: "LKR 4,990",
    image: "/no-image.jpg",
  },
  {
    title: "Sunrise Story Dice",
    description: "12-piece dice set that sparks morning storytelling.",
    price: "LKR 2,950",
    image: "/no-image.jpg",
  },
];

const journalEntries = [
  {
    title: "5 Nighttime Sensory Rituals",
    excerpt: "Wind down with tactile play, soft light, and soothing scents.",
    href: "#journal-nighttime",
  },
  {
    title: "Pastel Playroom Checklist",
    excerpt: "Key pieces to create a calm yet playful corner at home.",
    href: "#journal-playroom",
  },
  {
    title: "Morning Movement Minis",
    excerpt: "Quick stretches that boost confidence before school.",
    href: "#journal-morning",
  },
];

const testimonials = [
  {
    quote: "The play studio bundle transformed our evenings. The textures and colors keep my twins calm and curious.",
    name: "Aruni, Colombo",
  },
  {
    quote: "We loved the WonderClub workshop—so many ideas to reuse sensory kits around the house.",
    name: "Dilan & Priya",
  },
  {
    quote: "The bedtime edits finally helped us build a consistent routine. Glow tiles are a hit!",
    name: "Meera, Negombo",
  },
];

export default function NavigationOnly() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (heroSlides.length < 2) {
      return undefined;
    }
    const id = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <header className={styles.headerWrapper}>
        <div className={styles.navBar}>
          <Link href="/" className={styles.brand} aria-label="Sensory home">
            <Image
              src="/logo.png"
              alt="Sensory logo"
              width={132}
              height={40}
              priority
            />
          </Link>

          <nav className={styles.primaryNav} aria-label="Primary">
            <ul className={`${styles.navList} ${mobileMenuOpen ? styles.navListOpen : ""}`}>
              <li className={styles.navCloseRow}>
                <span>Browse</span>
                <button type="button" aria-label="Close navigation" onClick={closeMenu} className={styles.navCloseButton}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m7 7 10 10M17 7l-10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </li>
              {navItems.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link href={item.href} onClick={closeMenu} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <form className={styles.search} role="search">
              <label htmlFor="nav-search" className={styles.srOnly}>
                Search for a product
              </label>
              <span aria-hidden="true" className={styles.searchIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 4a7 7 0 1 1-4.95 11.95L3.7 18.3a1 1 0 0 1-1.4-1.4l2.35-2.35A7 7 0 0 1 11 4Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input id="nav-search" type="search" placeholder="Search for a product" />
            </form>
            <Link href="#account" className={styles.iconButton} aria-label="Your account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M5 19.2a7 7 0 0 1 14 0"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
            <Link href="#cart" className={`${styles.iconButton} ${styles.cartButton}`} aria-label="View cart">
              <span className={styles.cartBadge}>0</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 4h2l1.68 10.09A2 2 0 0 0 9.64 16h6.72a2 2 0 0 0 1.96-1.91L19 7H6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9.5" cy="19.5" r="1.5" fill="currentColor" />
                <circle cx="16.5" cy="19.5" r="1.5" fill="currentColor" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            className={`${styles.menuToggle} ${mobileMenuOpen ? styles.menuToggleActive : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {mobileMenuOpen ? <button type="button" className={styles.backdrop} aria-label="Close menu" onClick={closeMenu} /> : null}
      </header>

      <main className={styles.main}>
        <section className={styles.hero} aria-label="Featured imagery">
          <div className={styles.heroTrack}>
            {heroSlides.map((slide, index) => (
              <div
                key={`hero-slide-${index}`}
                className={`${styles.heroSlide} ${heroIndex === index ? styles.heroSlideActive : ""}`}
                style={{ backgroundImage: `url(${slide.image})` }}
                aria-hidden={heroIndex !== index}
              />
            ))}
          </div>
          {heroSlides.map((slide, index) => (
            <div
              key={`hero-content-${index}`}
              className={`${styles.heroContent} ${heroIndex === index ? styles.heroContentActive : ""}`}
              aria-hidden={heroIndex !== index}
            >
              <div className={styles.heroBadge}>{slide.badge}</div>
              <h1 className={styles.heroTitle}>
                <span>{slide.headlineTop}</span>
                <span>{slide.headlineBottom}</span>
              </h1>
              <p className={styles.heroSubtitle}>{slide.description}</p>
              <div className={styles.heroActions}>
                <Link href={slide.primary.href} className={styles.heroPrimary}>
                  {slide.primary.label}
                </Link>
              </div>
            </div>
          ))}
          <div className={styles.heroCloud}>
            <Image src="/cloud1.png" alt="" fill priority sizes="100vw" />
          </div>
        </section>

        <section className={styles.featured} aria-labelledby="featured-products">
          <div className={styles.featuredHeader}>
            <h2 id="featured-products">
              <Image src="/favicon.ico" alt="" width={40} height={40} className={styles.sectionIcon} />
              Featured Picks
            </h2>
            <Link href="#shop" className={styles.featuredLink}>
              View all
            </Link>
          </div>
          <div className={styles.featuredGrid}>
            {featuredProducts.map((product) => (
              <article key={product.title} className={styles.featuredCard}>
                <div className={styles.featuredImage}>
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 45vw, 20vw" />
                </div>
                <div className={styles.featuredBody}>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className={styles.featuredFooter}>
                    <span>{product.price}</span>
                    <Link href="#shop" className={styles.featuredButton}>
                      Add to bag
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.collections} aria-labelledby="shop-collections">
          <h2 id="shop-collections">
            <Image src="/favicon.ico" alt="" width={40} height={40} className={styles.sectionIcon} />
            Shop by Mood
          </h2>
          <div className={styles.collectionsGrid}>
            <Link href="#playtime" className={`${styles.collectionCard} ${styles.collectionPlay}`}>
              <span>Playful Energy</span>
              <p>STEM kits, fidgets, and activity tables</p>
            </Link>
            <Link href="#wearables" className={`${styles.collectionCard} ${styles.collectionCozy}`}>
              <span>Cozy Layers</span>
              <p>Soft apparel and sensory blankets</p>
            </Link>
            <Link href="#gifting" className={`${styles.collectionCard} ${styles.collectionGlow}`}>
              <span>Glow & Dream</span>
              <p>Night lights, story cubes, lullaby pods</p>
            </Link>
          </div>
        </section>

        <section className={styles.journal} aria-labelledby="sensory-journal">
          <div className={styles.journalHeader}>
            <h2 id="sensory-journal">
              <Image src="/favicon.ico" alt="" width={40} height={40} className={styles.sectionIcon} />
              From the Sensory Journal
            </h2>
            <Link href="#journal" className={styles.journalLink}>
              Read all
            </Link>
          </div>
          <div className={styles.journalGrid}>
            {journalEntries.map((entry) => (
              <article key={entry.title} className={styles.journalCard}>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <Link href={entry.href}>Keep reading</Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaBanner} aria-labelledby="family-offer">
          <div className={styles.ctaBody}>
            <span className={styles.ctaPill}>Family Exclusive</span>
            <h2 id="family-offer">
              <Image src="/favicon.ico" alt="" width={40} height={40} className={styles.sectionIcon} />
              Join the WonderClub
            </h2>
            <p>Unlock member-only drops, preview events, and design workshops for caregivers.</p>
            <form className={styles.ctaForm}>
              <label htmlFor="cta-email" className={styles.srOnly}>
                Email address
              </label>
              <input id="cta-email" type="email" placeholder="hello@parent.lk" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer} aria-label="Footer">
        <div className={styles.footerGrid}>
          <div>
            <Image src="/logo.png" alt="Sensory logo" width={140} height={40} className={styles.footerLogo} />
            <p>Designing playful moments for curious kids across Sri Lanka.</p>
          </div>
          <div>
            <h4><Image src="/favicon.ico" alt="" width={40} height={40} className={styles.sectionIcon} />Shop</h4>
            <ul>
              <li>
                <Link href="#new">New arrivals</Link>
              </li>
              <li>
                <Link href="#playtime">Playtime</Link>
              </li>
              <li>
                <Link href="#gifting">Gifting</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4><Image src="/favicon.ico" alt="" width={40} height={40} className={styles.sectionIcon} />Support</h4>
            <ul>
              <li>
                <Link href="#faq">FAQ</Link>
              </li>
              <li>
                <Link href="#shipping">Shipping & returns</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4><Image src="/favicon.ico" alt="" width={40} height={40} className={styles.sectionIcon} />Connect</h4>
            <ul>
              <li>
                <Link href="#instagram">Instagram</Link>
              </li>
              <li>
                <Link href="#facebook">Facebook</Link>
              </li>
              <li>
                <Link href="#tiktok">TikTok</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className={styles.footerNote}>© {new Date().getFullYear()} Sensory. All rights reserved.</p>
      </footer>

      <nav className={styles.mobileDock} aria-label="Mobile quick actions">
        <Link href="#home" aria-label="Home" className={styles.dockButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m4 10 8-6 8 6v10a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <Link href="#shop" aria-label="Shop" className={styles.dockButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3h12l1 4H5l1-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 7h16l-1.2 11.4a1 1 0 0 1-.99.9H6.19a1 1 0 0 1-.99-.9L4 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <button type="button" aria-label="Search" className={styles.dockButton} onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4a7 7 0 1 1-4.95 11.95L3.7 18.3a1 1 0 0 1-1.4-1.4l2.35-2.35A7 7 0 0 1 11 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <Link href="#cart" aria-label="Cart" className={`${styles.dockButton} ${styles.dockCart}`}>
            <span className={styles.cartBadge}>0</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h2l1.68 10.09A2 2 0 0 0 9.64 16h6.72a2 2 0 0 0 1.96-1.91L19 7H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9.5" cy="19.5" r="1.5" fill="currentColor" />
            <circle cx="16.5" cy="19.5" r="1.5" fill="currentColor" />
          </svg>
        </Link>
        <Link href="#account" aria-label="Account" className={styles.dockButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M5 19.2a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </Link>
      </nav>
    </>
  );
}
