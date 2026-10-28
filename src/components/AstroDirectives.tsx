import styles from "@styles/components/astro-directives.module.css";

const DOCS_URL = "https://docs.astro.build/en/reference/directives-reference/";

const DIRECTIVES = [
  {
    name: "client:load",
    category: "Client",
    description: "Hydrates the component immediately on page load.",
  },
  {
    name: "client:idle",
    category: "Client",
    description:
      "Hydrates the component once the page has loaded and the browser is idle.",
  },
  {
    name: "client:visible",
    category: "Client",
    description: "Hydrates the component when it scrolls into the viewport.",
  },
  {
    name: "client:media",
    category: "Client",
    description:
      'Hydrates the component when a CSS media query matches, e.g. client:media="(max-width: 750px)".',
  },
];

export default function AstroDirectives() {
  return (
    <section className={styles.directives}>
      <div className={styles.content}>
        <h2>How it works</h2>
        <p>
          Directives are special attributes that tell Astro how to render an
          element or when to load a component's JavaScript in the browser.
        </p>
        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Directive</th>
                <th>Category</th>
                <th>What it does</th>
              </tr>
            </thead>
            <tbody>
              {DIRECTIVES.map(({ name, category, description }) => (
                <tr key={name}>
                  <td>
                    {/* The docs anchors drop the colon, e.g. #clientload */}
                    <a href={`${DOCS_URL}#${name.replace(":", "")}`}>
                      <code>{name}</code>
                    </a>
                  </td>
                  <td>{category}</td>
                  <td>{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
