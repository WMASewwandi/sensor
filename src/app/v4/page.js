"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

const marquee = ["Free sensory guides", "Island wide delivery", "Therapist curated", "Rewards for educators"];
const tiles = [
  {
    label: "Sensory Pods",
    copy: "Weighted blankets, compression wraps & vibration seats",
  },
  {
    label: "Play Lab",
    copy: "STEM kits, musical blocks, glowing discovery trays",
  },
  {
    label: "Daily Routine",
    copy: "Visual schedules, calming cards & tactile timers",
  },
];

const spotlights = [
  { title: "Bubble Cloud Projector", price: "LKR 7,990" },
  { title: "Calm Kits Subscription", price: "From LKR 5,500" },
  { title: "Rainbow Texture Tiles", price: "LKR 4,450" },
  { title: "Mini Sensory Gym", price: "LKR 18,900" },
];

const stories = [
  {
    title: "Inside the sensory classroom",
    excerpt: "A peek at how educators layer sensory experiences throughout the day.",
  },
  {
    title: "How to build your calm down jar",
    excerpt: "DIY glitter jars with step-by-step tips straight from our therapists.",
  },
];

export default function SensoryStudio() {
  return (
    <div className={styles.page}>
      <header className={styles.topBar}>
        <p>Sensory Studio • Early Childhood</p>
        <ul>
          {marquee.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      <section className={styles.hero} aria-labelledby="hero">
        <div className={styles.heroMedia}>
          <Image
            src="/no-image.jpg"
            alt="Kids playing in sensory studio"
            fill
            sizes="(max-width: 768px) 90vw, 35vw"
            priority
          />
        </div>
        <div className={styles.heroPanel}>
          <h1 id="hero">
            Build a <span>sensory studio</span> in every classroom
          </h1>
          <p>
            Modular play stations, movement tools, and mindful accessories crafted to help teachers design
            inclusive sensory experiences for kids ages 2-7.
          </p>
          <div className={styles.heroActions}>
            <Link href="#shop" className={styles.primaryButton}>
              Explore kits
            </Link>
            <Link href="#demo" className={styles.secondaryButton}>
              Book a studio consult
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.tiles} aria-labelledby="collections">
        <div className={styles.sectionHeader}>
          <h2 id="collections">Curated sensory collections</h2>
          <Link href="#view-all">View catalog →</Link>
        </div>
        <div className={styles.tileGrid}>
          {tiles.map((tile) => (
            <article key={tile.label} className={styles.tileCard}>
              <h3>{tile.label}</h3>
              <p>{tile.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.showcase} aria-labelledby="spotlight">
        <div className={styles.showcaseHeader}>
          <h2 id="spotlight">Spotlight sensations</h2>
          <p>Pair calming inputs with playful discovery</p>
        </div>
        <div className={styles.showcaseGrid}>
          {spotlights.map((product) => (
            <article key={product.title} className={styles.showcaseCard}>
              <div className={styles.showcaseImage}>
                <Image src="/no-image.jpg" alt={product.title} fill sizes="(max-width:768px) 80vw, 20vw" />
              </div>
              <div className={styles.showcaseBody}>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.stories} aria-labelledby="stories">
        <div className={styles.sectionHeader}>
          <h2 id="stories">Sensory stories</h2>
          <Link href="#journal">Read the journal →</Link>
        </div>
        <div className={styles.storyGrid}>
          {stories.map((story) => (
            <article key={story.title} className={styles.storyCard}>
              <h3>{story.title}</h3>
              <p>{story.excerpt}</p>
              <Link href="#read" className={styles.storyLink}>
                Continue reading
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta">
        <div className={styles.ctaBody}>
          <h2 id="cta">Bring sensory studio to your centre</h2>
          <p>Schedule a personalised walkthrough with our educator team and build a wishlist tailored to your learners.</p>
          <form className={styles.ctaForm}>
            <label htmlFor="cta-email" className={styles.srOnly}>
              Enter email
            </label>
            <input id="cta-email" type="email" placeholder="you@school.lk" required />
            <button type="submit">Request consult</button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Sensory • Designed for early childhood development</p>
        <div className={styles.footerLinks}>
          <Link href="#about">About</Link>
          <Link href="#support">Support</Link>
          <Link href="#careers">Careers</Link>
          <Link href="#privacy">Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
