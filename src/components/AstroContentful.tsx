import styles from "@styles/components/astro-contentful.module.css";
import { withBase } from "@utils/url";

// Contentful logo from Simple Icons (https://simpleicons.org, CC0).
const GUIDES = [
  {
    name: "Astro",
    logo: "/about/astro.svg",
    label: "Astro Docs: Contentful & Astro",
    url: "https://docs.astro.build/en/guides/cms/contentful/",
  },
  {
    name: "Contentful",
    logo: "/about/contentful.svg",
    label: "Astro starter with Contentful",
    url: "https://www.contentful.com/astro-starter/",
  },
];

export default function AstroContentful() {
  return (
    <section className={styles.astroContentful}>
      <div className={styles.content}>
        <h2>Astro ❤️ Contentful</h2>
        <p>
          Astro and Contentful each publish their own guide on using them
          together, so you can start from whichever side you know best.
        </p>
        <div className={styles.columns}>
          {GUIDES.map(({ name, logo, label, url }) => (
            <article key={name} className={styles.card}>
              <img
                className={styles.logo}
                src={withBase(logo)}
                alt={`${name} logo`}
              />
              <a href={url} target="_blank" rel="noreferrer">
                {label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
