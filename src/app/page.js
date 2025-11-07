"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const fallbackImage = "/no-image.jpg";

function ResilientImage({ src, alt, width, height, className, priority = false }) {
  const [imgSrc, setImgSrc] = useState(src || fallbackImage);
  const isRemote = typeof imgSrc === "string" && imgSrc.startsWith("http");

  return (
    <Image
      src={imgSrc || fallbackImage}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      unoptimized={isRemote}
      onError={() => {
        if (imgSrc !== fallbackImage) {
          setImgSrc(fallbackImage);
        }
      }}
    />
  );
}

const categories = [
  {
    name: "Toys",
    description: "Sensory play, plush pals, and imagination starters.",
    icon: "🧸",
    accentClass: "toysCard",
    image: "/illustrations/toy-buddy.svg",
  },
  {
    name: "Clothing",
    description: "Snuggly layers made for crawlers, walkers, and wigglers.",
    icon: "👕",
    accentClass: "clothingCard",
    image: "/illustrations/clothing-buddy.svg",
  },
  {
    name: "Learning",
    description: "STEM kits, story time, and curious discoveries.",
    icon: "📚",
    accentClass: "learningCard",
    image: "/illustrations/learning-buddy.svg",
  },
  {
    name: "Accessories",
    description: "Sweet essentials for outings, naps, and giggles.",
    icon: "🎀",
    accentClass: "accessoriesCard",
    image: "/illustrations/accessory-buddy.svg",
  },
];

const featuredProducts = [
  {
    name: "Rainbow Discovery Blocks",
    description: "Stackable sensory cubes that chime, crinkle, and sparkle.",
    price: "LKR 11,900",
    discountPrice: "LKR 10,500",
    tag: "New",
    rating: 4.8,
    accentClass: "productOne",
    image:
      "https://images.unsplash.com/photo-1582719478250-b9e35c0c472d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Colorful wooden blocks stacked on a play table",
  },
  {
    name: "CloudSoft Play Mat",
    description: "Memory-foam comfort with reversible playtime patterns.",
    price: "LKR 18,500",
    discountPrice: "LKR 16,650",
    tag: "Parent pick",
    rating: 4.9,
    accentClass: "productTwo",
    image:
      "https://images.unsplash.com/photo-1615485290382-6aecc3ecf3f1?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Baby relaxing on a plush play mat",
  },
  {
    name: "Bright Minds Busy Board",
    description: "Locks, lights, and textures that build fine motor skills.",
    price: "LKR 14,200",
    tag: "STEM fave",
    rating: 4.7,
    accentClass: "productThree",
    image:
      "https://images.unsplash.com/photo-1602669154577-0a65017f8bff?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Toddler exploring a wooden busy board",
  },
  {
    name: "Sunny Day Soft Set",
    description: "Breathable bamboo matching outfit for everyday adventures.",
    price: "LKR 9,750",
    tag: "Bestseller",
    rating: 4.9,
    accentClass: "productFour",
    image:
      "https://images.unsplash.com/photo-1517664354505-34c7f5478d91?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Neatly folded pastel baby clothes",
  },
];

const testimonials = [
  {
    quote:
      "Every Sensory delivery feels like a curated surprise box. My toddler hasn’t put the discovery blocks down!",
    name: "Daniella P.",
    role: "Mom to a 2-year-old explorer",
  },
  {
    quote:
      "The learning kits make our play dates so much richer. Sensory just gets what little minds need.",
    name: "Marcus L.",
    role: "Dad & weekend science guide",
  },
];

const heroStats = [
  { value: "2K+", label: "Happy families" },
  { value: "250+", label: "Play-tested finds" },
  { value: "48hr", label: "Joyful shipping" },
];

const toyItems = [
  {
    name: "Storytime Express Train",
    description: "Interactive sound train with bedtime tale cards.",
    price: "LKR 7,450",
    image: "",
    imageAlt: "Colorful wooden toy train on a rug",
    rating: 4.6,
  },
  {
    name: "Rainbow Sensory Drum",
    description: "Soft mallets and lights that dance with every beat.",
    price: "LKR 6,890",
    image: "",
    imageAlt: "Toddler playing a colorful toy drum",
    rating: 4.7,
  },
  {
    name: "Stack & Glow Rings",
    description: "Textured rings that chime, glow, and build coordination.",
    price: "LKR 5,250",
    image: "",
    imageAlt: "Rainbow stacking rings toy on a table",
    rating: 4.9,
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Shop", href: "#featured-products" },
  { label: "About", href: "#favorites" },
  { label: "Contact", href: "#footer" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.logoGroup}>
            <a href="#" className={styles.logoLink} aria-label="Sensory home">
              <ResilientImage
                src="/logo.png"
                alt="Sensory logo"
                width={220}
                height={70}
                className={styles.logoImage}
          priority
        />
            </a>
          </div>
          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <form className={styles.searchBar} role="search">
            <label className={styles.srOnly} htmlFor="site-search">
              Search Sensory
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search joyful essentials..."
            />
            <button type="submit">Search</button>
          </form>
          <div className={styles.headerActions}>
            <button type="button" className={styles.userButton} aria-label="Account">
              <span aria-hidden="true">😊</span>
            </button>
            <button
              type="button"
              className={styles.cartButton}
              aria-label="Open shopping cart"
            >
              <span aria-hidden="true">🛒</span>
              <span className={styles.cartBadge}>2</span>
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>Playful arrivals just landed</span>
              <h1>Playful essentials for bright beginnings</h1>
              <p>
                Discover colorful toys, cuddly outfits, and learning adventures
                designed to spark smiles from tummy time to preschool.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#featured-products">
                  Shop Joyful Finds
                </a>
                <a className={styles.secondaryButton} href="#toy-collection">
                  Discover Toy Bundles
                </a>
              </div>
              <dl className={styles.heroStats}>
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className={styles.heroVisual}>
              <div className={styles.heroIllustration}>
                <ResilientImage
                  src="/illustrations/hero-playtime.svg"
                  alt="Cartoon child playing with colorful blocks"
                  width={520}
                  height={360}
                  className={styles.heroImage}
                  priority
                />
              </div>
              <div className={styles.heroCard}>
                <span>Bundle & Save</span>
                <strong>Pick 3 playsets</strong>
                <p>Mix and match favorites for a dreamy playroom refresh.</p>
              </div>
              <div className={styles.heroBubbles}>
                <span>Soft & Snuggly</span>
                <span>STEM Ready</span>
                <span>Eco Loving</span>
              </div>
            </div>
          </section>

          <div className={styles.dealBanner} role="region" aria-live="polite">
            <div>
              <span className={styles.dealLabel}>Limited-Time Deal</span>
              <p>
                Save 20% on sensory play bundles with code <strong>PLAYFUL20</strong> · Ends
                Sunday!
          </p>
        </div>
            <a href="#toy-collection" className={styles.dealLink}>
              Shop the deal
            </a>
          </div>

          <section className={styles.categories} id="categories">
            <div className={styles.sectionHeader}>
              <h2>Shop by Cheerful Category</h2>
              <p>Pick a path to playtime that fits your little one’s mood.</p>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map((category) => (
                <article
                  key={category.name}
                  className={`${styles.categoryCard} ${styles[category.accentClass]}`}
                >
                  <div className={styles.categoryArt}>
                    <ResilientImage
                      src={category.image}
                      alt={`${category.name} illustration`}
                      width={160}
                      height={160}
                      className={styles.categoryImage}
                    />
                  </div>
                  <span className={styles.categoryIcon} aria-hidden="true">
                    {category.icon}
                  </span>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <a href="#featured-products">Explore</a>
                </article>
              ))}
            </div>
          </section>

          <section
            className={styles.featuredProducts}
            id="featured-products"
          >
            <div className={styles.sectionHeader}>
              <h2>Featured Favorites</h2>
              <p>Handpicked bestsellers loved by curious kiddos and happy Sensory families.</p>
            </div>
            <div className={styles.productGrid}>
              {featuredProducts.map((product) => (
                <article
                  key={product.name}
                  className={`${styles.productCard} ${styles[product.accentClass]}`}
                >
                  <span className={styles.productTag}>{product.tag}</span>
                  <div className={styles.productImageWrap}>
                    <ResilientImage
                      src={product.image}
                      alt={product.imageAlt || product.name}
                      width={320}
                      height={360}
                      className={styles.productImage}
                    />
                  </div>
                  <h3>{product.name}</h3>
                  <div className={styles.ratingRow}>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">✨</span>
                    <span className={styles.ratingValue}>{product.rating.toFixed(1)}</span>
                  </div>
                  <div className={styles.productFooter}>
                    <div className={styles.priceGroup}>
                      {product.discountPrice ? (
                        <>
                          
                          <span className={styles.productPrice}>{product.discountPrice}</span>
                          <span className={styles.productPriceOriginal}>{product.price}</span>
                        </>
                      ) : (
                        <span className={styles.productPrice}>{product.price}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      className={styles.cartAction}
                      aria-label="Add to cart"
                    >
                      <span aria-hidden="true" className={styles.cartIcon}>🛒</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.toyCollection} id="toy-collection">
            <div className={styles.sectionHeader}>
              <h2>Discover Toy Bundles</h2>
              <p>Explore our curated collection of playtime essentials.</p>
            </div>
            <div className={styles.toyGrid}>
              {toyItems.map((item) => (
                <article key={item.name} className={styles.toyCard}>
                  <div className={styles.toyImageWrap}>
                    <ResilientImage
                      src={item.image}
                      alt={item.imageAlt || item.name}
                      width={320}
                      height={280}
                      className={styles.toyImage}
                    />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className={styles.ratingRow}>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">⭐</span>
                    <span aria-hidden="true">✨</span>
                    <span className={styles.ratingValue}>{item.rating.toFixed(1)}</span>
                  </div>
                  <div className={styles.toyFooter}>
                    <span className={styles.productPrice}>{item.price}</span>
                    <button
                      type="button"
                      className={styles.cartAction}
                      aria-label="Add to cart"
                    >
                      <span aria-hidden="true" className={styles.cartIcon}>🛒</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer} id="footer">
          <div className={styles.footerBrand}>
            <div className={styles.logoGroup}>
              <a href="#" className={styles.logoLink} aria-label="Sensory home">
                <ResilientImage
                  src="/logo.png"
                  alt="Sensory logo"
                  width={200}
                  height={62}
                  className={styles.logoImage}
                />
              </a>
            </div>
            <p>Joyful essentials that grow with every giggle, milestone, and cuddle.</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:care@sensory.lk">care@sensory.lk</a>
                </li>
                <li>
                  <a href="tel:+94112456789">+94 11 245 6789</a>
                </li>
                <li>Mon–Fri · 9am–6pm EST</li>
              </ul>
            </div>
            <div>
              <h4>Follow</h4>
              <ul>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerNewsletter}>
              <h4>Newsletter</h4>
              <p>Get weekly play ideas and exclusive offers.</p>
              <form>
                <label className={styles.srOnly} htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Sign me up</button>
              </form>
            </div>
          </div>
          <p className={styles.footerNote}>
            © {new Date().getFullYear()} Sensory. All playful rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}