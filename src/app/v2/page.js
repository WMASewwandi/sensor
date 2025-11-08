"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./page.module.css";

const navItems = [
  {
    label: "New In",
    href: "#new",
    hasDropdown: true,
    submenu: [
      { label: "Seasonal Drops", href: "#seasonal" },
      { label: "Limited Editions", href: "#limited" },
      { label: "Staff Picks", href: "#staff-picks" },
    ],
  },
  {
    label: "Baby & Toddler",
    href: "#baby",
    hasDropdown: true,
    submenu: [
      { label: "0-6 Months", href: "#0-6" },
      { label: "Cuddly Wear", href: "#cuddly" },
      { label: "Nap Time Essentials", href: "#nap" },
    ],
  },
  {
    label: "Kids",
    href: "#kids",
    hasDropdown: true,
    submenu: [
      { label: "Playtime Apparel", href: "#playtime" },
      { label: "School Ready", href: "#school" },
      { label: "Cozy Layers", href: "#layers" },
    ],
  },
  {
    label: "Play & Gifts",
    href: "#gifts",
    hasDropdown: true,
    submenu: [
      { label: "STEM Kits", href: "#stem" },
      { label: "Party Favourites", href: "#party" },
      { label: "Gift Cards", href: "#gift-cards" },
    ],
  },
];

const heroHighlights = ["Sensory Play", "Cozy Layers", "STEM Fun"];

const eventDetails = [
  { label: "Featured Drop", highlight: "WonderPlay Carnival" },
  { label: "Exclusive Offer", highlight: "Free Storybook Set" },
  { label: "Delivery", highlight: "Across Sri Lanka" },
];

const categories = [
  { label: "Learning Kits", icon: "🧠" },
  { label: "Soft Toys", icon: "🧸" },
  { label: "Dress Up", icon: "👗" },
  { label: "Sensory Play", icon: "🎨" },
  { label: "Outdoor Fun", icon: "🌈" },
  { label: "Storytime", icon: "📚" },
];

const justForYou = [
  {
    title: "Rainbow Stacker",
    price: "LKR 5,900",
    badge: "New",
    details: ["3 Colours", "Stack & Sort"],
  },
  {
    title: "Galaxy Night Light",
    price: "LKR 4,300",
    badge: "Kids' Pick",
    details: ["2 Colours", "Calming glow"],
  },
  {
    title: "Explorer Busy Board",
    price: "LKR 6,750",
    badge: "Trending",
    details: ["4 Activities", "Fine motor play"],
  },
];

const bestSellers = [
  {
    title: "Adventure Play Tent",
    price: "LKR 8,990",
    rating: 4.9,
    details: ["3 Prints", "Indoor/Outdoor"],
  },
  {
    title: "STEM Discovery Kit",
    price: "LKR 7,250",
    rating: 4.8,
    details: ["8 Experiments", "Ages 6+"]
  },
  {
    title: "Cozy Cloud Blanket",
    price: "LKR 5,450",
    rating: 4.7,
    details: ["Ultra-soft", "Two sizes"],
  },
  {
    title: "Musical Story Cube",
    price: "LKR 6,200",
    rating: 4.9,
    details: ["12 Stories", "Rechargeable"],
  },
];

export default function NavigationShowcase() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchSheetOpen, setSearchSheetOpen] = useState(false);
  const searchInputRef = useRef(null);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const closeSearchSheet = () => setSearchSheetOpen(false);

  useEffect(() => {
    if (searchSheetOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchSheetOpen]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    const disableScroll = mobileMenuOpen || searchSheetOpen;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = disableScroll ? "hidden" : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen, searchSheetOpen]);

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper}>
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <button
                type="button"
                className={styles.menuToggle}
                aria-expanded={mobileMenuOpen}
                aria-controls="primary-navigation"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span className={styles.menuToggleBar} />
                <span className={styles.menuToggleBar} />
                <span className={styles.menuToggleBar} />
                <span className={styles.srOnly}>Toggle navigation</span>
              </button>

            <Link href="/" className={styles.brand} aria-label="Home">
              <Image
                src="/logo.png"
                alt="Sensor Kids logo"
                width={150}
                height={48}
                className={styles.brandLogo}
                priority
              />
            </Link>
            </div>

            <nav className={styles.nav} aria-label="Primary">
              <ul
                id="primary-navigation"
                className={`${styles.navList} ${mobileMenuOpen ? styles.navListOpen : ""}`}
              >
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className={`${styles.navItem} ${item.hasDropdown ? styles.hasDropdown : ""}`}
                  >
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      onClick={closeMobileMenu}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <span aria-hidden="true" className={styles.caret}>
                          ▾
                        </span>
                      ) : null}
                    </Link>
                    {item.submenu ? (
                      <ul className={styles.subMenu}>
                        {item.submenu.map((subItem) => (
                          <li
                            key={`${item.label}-${subItem.label}`}
                            className={styles.subMenuItem}
                          >
                            <Link href={subItem.href} onClick={closeMobileMenu}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.actions}>
              <form className={styles.searchBar} role="search">
                <label htmlFor="global-search" className={styles.srOnly}>
                  Search for a product
                </label>
                <span aria-hidden="true" className={styles.searchIcon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 4a7 7 0 1 1-4.95 11.95L3.7 18.3a1 1 0 0 1-1.4-1.4l2.35-2.35A7 7 0 0 1 11 4Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  id="global-search"
                  type="search"
                  placeholder="Search for a Product"
                />
              </form>

              <button type="button" className={styles.iconButton} aria-label="Your account">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
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
              </button>

              <Link href="#cart" className={styles.iconButton} aria-label="View cart">
                <span aria-hidden="true">🛒</span>
                <span className={styles.cartBadge}>0</span>
              </Link>
            </div>
          </header>
          {mobileMenuOpen ? (
            <button
              type="button"
              aria-label="Close navigation menu"
              className={styles.navOverlay}
              onClick={closeMobileMenu}
            />
          ) : null}
        </div>

        <button
          type="button"
          className={`${styles.searchFab} ${searchSheetOpen ? styles.searchFabHidden : ""}`}
          aria-label="Search for a product"
          onClick={() => setSearchSheetOpen(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M11 4a7 7 0 1 1-4.95 11.95L3.7 18.3a1 1 0 0 1-1.4-1.4l2.35-2.35A7 7 0 0 1 11 4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <nav className={styles.mobileNavBar} aria-label="Mobile shortcuts">
          <Link href="#home" aria-label="Go to home" className={styles.mobileNavButton}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="m4 10 8-6 8 6v10a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="#shop" aria-label="Shop" className={styles.mobileNavButton}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 3h12l1 4H5l1-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 7h16l-1.2 11.4a1 1 0 0 1-.99.9H6.19a1 1 0 0 1-.99-.9L4 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <button
            type="button"
            aria-label="Search"
            className={styles.mobileNavButton}
            onClick={() => setSearchSheetOpen(true)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M11 4a7 7 0 1 1-4.95 11.95L3.7 18.3a1 1 0 0 1-1.4-1.4l2.35-2.35A7 7 0 0 1 11 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <Link href="#cart" aria-label="View cart" className={`${styles.mobileNavButton} ${styles.mobileNavButtonCart}`}>
            <span className={styles.mobileNavBadge}>0</span>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 4h2l1.68 10.09A2 2 0 0 0 9.64 16h6.72a2 2 0 0 0 1.96-1.91L19 7H6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9.5" cy="19.5" r="1.5" fill="currentColor" />
              <circle cx="16.5" cy="19.5" r="1.5" fill="currentColor" />
            </svg>
          </Link>
          <Link href="#account" aria-label="Your account" className={styles.mobileNavButton}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M5 19.2a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </Link>
        </nav>

        {searchSheetOpen ? (
          <button
            type="button"
            aria-label="Close search"
            className={styles.searchSheetOverlay}
            onClick={closeSearchSheet}
          />
        ) : null}

        <section
          className={`${styles.searchSheet} ${searchSheetOpen ? styles.searchSheetOpen : ""}`}
          aria-label="Mobile search"
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.searchSheetHandle} aria-hidden="true" />
          <form className={styles.searchSheetForm} role="search" onSubmit={closeSearchSheet}>
            <label htmlFor="mobile-search" className={styles.srOnly}>
              Search for a product
            </label>
            <div className={styles.searchSheetField}>
              <span aria-hidden="true" className={styles.searchSheetIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4a7 7 0 1 1-4.95 11.95L3.7 18.3a1 1 0 0 1-1.4-1.4l2.35-2.35A7 7 0 0 1 11 4Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                id="mobile-search"
                ref={searchInputRef}
                type="search"
                placeholder="Search for a product"
                className={styles.searchSheetInput}
              />
              <button
                type="button"
                className={styles.searchSheetClose}
                aria-label="Close search"
                onClick={closeSearchSheet}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="m7 7 10 10M17 7 7 17"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </section>

        <main className={styles.main}>
          <section className={styles.hero} aria-labelledby="fitness-expo">
            <div className={styles.heroBackdrop} aria-hidden="true" />
            <div className={styles.heroContent}>
              <ul className={styles.highlightList}>
                {heroHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h1 id="fitness-expo" className={styles.heroTitle}>
                <span className={styles.heroTitleAccent}>Playful</span>
                <span>WonderMarket</span>
              </h1>

              <div className={styles.heroActions}>
                <Link href="#register" className={styles.primaryButton}>
                  Shop New Arrivals
                </Link>
                <Link href="#schedule" className={`${styles.secondaryButton} ${styles.discoverButton}`}>
                  Discover Best Sellers
                </Link>
              </div>

              <ul className={styles.detailList}>
                {eventDetails.map((item) => (
                  <li key={item.label}>
                    <span className={styles.detailLabel}>{item.label}</span>
                    <span className={styles.detailHighlight}>{item.highlight}</span>
                  </li>
                ))}
              </ul>

              <p className={styles.heroAside}>Made for giggles, wiggles & endless adventures</p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="categories">
            <div className={styles.sectionHeader}>
              <h2 id="categories">Playful Categories</h2>
              <Link href="#shop" className={styles.sectionLink}>
                View All
              </Link>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map((category) => (
                <div key={category.label} className={styles.categoryCard}>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <span>{category.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="just-for-you">
            <div className={styles.sectionHeader}>
              <h2 id="just-for-you">Just for You</h2>
              <Link href="#shop" className={styles.sectionLink}>
                Shop curated picks
              </Link>
            </div>
            <div className={styles.productGrid}>
              {justForYou.map((product) => (
                <article key={product.title} className={styles.productCard}>
                  <div className={styles.productImageWrap}>
                    <Image
                      src="/no-image.jpg"
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className={styles.productBadge}>{product.badge}</span>
                  </div>
                  <div className={styles.productContent}>
                    <h3>{product.title}</h3>
                    <div className={styles.productMeta}>
                      <span>{product.price}</span>
                      <div className={styles.productDetails}>
                        {product.details.map((detail) => (
                          <span key={`${product.title}-${detail}`}>{detail}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.dealBanner} aria-labelledby="sparkle-deal">
            <div className={styles.dealContent}>
              <p className={styles.dealBadge}>Limited Time</p>
              <h2 id="sparkle-deal">Sparkle & Save Bundle</h2>
              <p>Mix and match any 3 sensory play kits and save 20% this weekend only.</p>
              <div className={styles.dealActions}>
                <Link href="#shop" className={styles.primaryButton}>
                  Build my bundle
                </Link>
                <Link href="#learn" className={styles.secondaryButton}>
                  Learn more
                </Link>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="best-sellers">
            <div className={styles.sectionHeader}>
              <h2 id="best-sellers">Best Seller Items</h2>
              <Link href="#shop" className={styles.sectionLink}>
                View collection
              </Link>
            </div>
            <div className={styles.bestSellerRail}>
              {bestSellers.map((product) => (
                <article key={product.title} className={styles.bestSellerCard}>
                  <div className={styles.productImageWrap}>
                    <Image
                      src="/no-image.jpg"
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 70vw, 20vw"
                    />
                  </div>
                  <div className={styles.productContent}>
                    <h3>{product.title}</h3>
                    <div className={styles.productMeta}>
                      <span>{product.price}</span>
                      <div className={styles.productDetails}>
                        {product.details.map((detail) => (
                          <span key={`${product.title}-${detail}`}>{detail}</span>
                        ))}
                        <span className={styles.productRating}>⭐ {product.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.subscribe} aria-labelledby="subscribe">
            <div className={styles.subscribeContent}>
              <p className={styles.subscribeBadge}>Subscribe & sparkle</p>
              <h2 id="subscribe">Get giggles delivered weekly</h2>
              <p>Exclusive deals, new arrivals, and playful parenting tips straight to your inbox.</p>
              <form className={styles.subscribeForm}>
                <label htmlFor="email" className={styles.srOnly}>
                  Enter your email
                </label>
                <input id="email" type="email" placeholder="hello@parent.lk" required />
                <button type="submit">Join Now</button>
              </form>
            </div>
          </section>
        </main>

        <footer className={styles.footer} aria-label="Footer">
          <div className={styles.footerGrid}>
            <div>
              <h3>Sensor Kids</h3>
              <p>Curated playthings for curious minds. Designed with love in Sri Lanka.</p>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li>
                  <Link href="#shop">New Arrivals</Link>
                </li>
                <li>
                  <Link href="#kids">Kidswear</Link>
                </li>
                <li>
                  <Link href="#gifts">Gift Cards</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li>
                  <Link href="#faq">FAQ</Link>
                </li>
                <li>
                  <Link href="#shipping">Shipping & Delivery</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Follow</h4>
              <ul className={styles.socialList}>
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
          <p className={styles.footerNote}>© {new Date().getFullYear()} Sensor Kids. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

