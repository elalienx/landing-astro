import styles from "@styles/components/ai-costs.module.css";

export default function AICosts() {
  return (
    <section className={styles.aiCosts}>
      <div className={styles.content}>
        <h2>The AI cost of JavaScript frameworks</h2>
        <div className={styles.columns}>
          <img
            className={styles.image}
            src="/about/ai-chart-cost.png"
            alt="Bar chart of the median AI cost per run for 12 JavaScript frameworks, from Hono+htmx at $2.67 to Angular at $4.97"
            loading="lazy"
          />
          <div>
            <p>
              A benchmark had an AI coding agent build the same small app in 12
              JavaScript frameworks, five times each, and measured how much
              every run cost in tokens. Astro was among the cheapest at{" "}
              <strong>$2.76</strong> per run, while Next.js came in at{" "}
              <strong>$3.14</strong>, about 14% more.
            </p>
            <p>
              Astro was also the fastest to build, with a median of 8.2 minutes,
              and its app sent almost no JavaScript to the browser, compared to
              142 KB for Next.js. For teams using AI to ship features, that adds
              up to real savings.{" "}
              <a
                href="https://nolanlawson.com/2026/10/28/the-ai-cost-of-javascript-frameworks/"
                target="_blank"
                rel="noreferrer"
              >
                Read the full article
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
