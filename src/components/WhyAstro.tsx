import styles from "@styles/components/why-astro.module.css";

const FRAMEWORKS = [
  {
    name: "Gatsby",
    logo: "/about/gatsby.svg",
    description:
      "Our current landing framework: old, slow, and gets fewer security updates.",
  },
  {
    name: "Next.js",
    logo: "/about/nextjs.svg",
    description: "Newer framework, faster, but with less of a security track record.",
  },
  {
    name: "Astro",
    logo: "/about/astro.svg",
    description: "Also new, with a stellar security track record.",
  },
];

export default function WhyAstro() {
  return (
    <section className={styles.whyAstro}>
      <div className={styles.content}>
        <h2>Why Astro</h2>
        <div className={styles.columns}>
          {FRAMEWORKS.map(({ name, logo, description }) => (
            <article key={name} className={styles.card}>
              <img className={styles.logo} src={logo} alt={`${name} logo`} />
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
