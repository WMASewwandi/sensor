"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

const navLinks = [
  { label: "Play Kits", href: "#kits" },
  { label: "Therapy Tools", href: "#tools" },
  { label: "Storytime", href: "#story" },
  { label: "Bundles", href: "#bundles" },
];

const cards = [
  {
    title: "Sensory Capsule",
    description: "Weekly play schedules, guided activities, and caregiver prompts",
  },
  {
    title: "Tiny Tastemakers",
    description: "Edible dough lab kits crafted with nutritionists",
  },
  {
    title: "Motion Makers",
    description: "Balance boards, wobble swings, and movement playlists",
  },
];

const lineup = [
  { name: "Lullaby Sound Pebble", meta: "Sleep routine · LKR 4,950" },
  { name: "Moonbeam Sensory Tray", meta: "Stage-based play · LKR 6,800" },
  { name: "Cuddle Cloud Plush", meta: "Soft pressure · LKR 5,100" },
];

const testimonials = [
  {
    quote: "The curated kits take the guesswork out of sensory play. My classroom feels calmer.",
    name: "Dilani, Preschool Teacher",
  },
  {
    quote: "Every delivery is a celebration. The colour stories keep my twins excited to explore.",
    name: "Sameera, Parent in Kandy",
  },
];

export default function SensoryNest() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="#home" className={styles.logo} aria-label="Sensory Nest home">
          Sensory Nest
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="#reward" className={styles.rewardButton}>
          Rewards
        </Link>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroVisual}>
          <Image src="/no-image.jpg" alt="Colourful sensory kits" fill priority sizes="(max-width: 768px) 90vw, 35vw" />
        </div>
        <div className={styles.heroText}>
          <p className={styles.heroEyebrow}>curated sensory play</p>
          <h1 id="hero-title">
            Elevate every <span>moment of wonder</span>
          </h1>
          <p>
            Sensory Nest hand-picks the most engaging early childhood play essentials— thoughtfully layered tools that
            honour little ones' need for movement, texture, story, and calm.
          </p>
          <div className={styles.heroCtas}>
            <Link href="#shop" className={styles.ctaPrimary}>
              Start shopping
            </Link>
            <Link href="#plan" className={styles.ctaGhost}>
              Build a play plan
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.cards} aria-labelledby="cards-heading">
        <h2 id="cards-heading">Designed for every sensory moment</h2>
        <div className={styles.cardWrap}>
          {cards.map((card) => (
            <article key={card.title} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link href="#learn">Learn more →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.lineup} aria-labelledby="lineup-heading">
        <div className={styles.lineupHeader}>
          <h2 id="lineup-heading">This week's sensory lineup</h2>
          <p>Limited drops refreshed every Monday</p>
        </div>
        <div className={styles.lineupList}>
          {lineup.map((item) => (
            <article key={item.name} className={styles.lineupCard}>
              <div className={styles.lineupImage}>
                <Image src="/no-image.jpg" alt={item.name} fill sizes="(max-width: 768px) 80vw, 22vw" />
              </div>
              <div className={styles.lineupBody}>
                <h3>{item.name}</h3>
                <p>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.testimonials} aria-labelledby="testimonials-heading">
        <h2 id="testimonials-heading">Voices from the Sensory Nest</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <blockquote key={item.name} className={styles.testimonialCard}>
              <p>“{item.quote}”</p>
              <cite>{item.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={styles.subscribe} aria-labelledby="join-heading">
        <div className={styles.subscribeCard}>
          <h2 id="join-heading">Join the Nest newsletter</h2>
          <p>Weekly sensory activities, printable schedules, and exclusive bundle drops.</p>
          <form className={styles.subscribeForm}>
            <label htmlFor="nest-email" className={styles.srOnly}>
              Email address
            </label>
            <input id="nest-email" type="email" placeholder="hello@family.lk" required />
            <button type="submit">Join now</button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Sensory Nest • Crafted in Sri Lanka</p>
        <div className={styles.footerLinks}>
          <Link href="#shipping">Shipping</Link>
          <Link href="#returns">Returns</Link>
          <Link href="#support">Support</Link>
          <Link href="#community">Community</Link>
        </div>
      </footer>
    </div>
  );
}
