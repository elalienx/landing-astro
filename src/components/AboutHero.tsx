import styles from "@styles/components/about-hero.module.css";
import { withBase } from "@utils/url";

export default function AboutHero() {
  return (
    <header className={styles.hero}>
      <img
        className={styles.logo}
        src={withBase("/about/astro.svg")}
        alt="Astro logo"
      />
      <h1>About Astro</h1>
    </header>
  );
}
