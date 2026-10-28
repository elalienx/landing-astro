import styles from "@styles/components/astro-toolbar.module.css";
import { withBase } from "@utils/url";

// Icons are taken from Astro's own toolbar (node_modules/astro/dist/runtime/client/dev-toolbar).
const FEATURES = [
  {
    name: "Menu",
    icon: "/about/toolbar-menu.svg",
    description:
      "Links to the docs, community, and bug reports, featured integrations, and a button to copy debug info.",
  },
  {
    name: "Inspect",
    icon: "/about/toolbar-inspect.svg",
    description:
      "Highlights the interactive islands on the page and shows each one's client directive and props.",
  },
  {
    name: "Audit",
    icon: "/about/toolbar-audit.svg",
    description:
      "Checks the page for common accessibility and performance problems. A dot on the icon means it found some.",
  },
  {
    name: "Settings",
    icon: "/about/toolbar-settings.svg",
    description:
      "Turns notification badges on or off, logs toolbar events to the console, moves the toolbar, or hides it.",
  },
];

export default function AstroToolbar() {
  return (
    <section className={styles.toolbar}>
      <div className={styles.content}>
        <div>
          <h2>Toolbar</h2>
          <p>
            When you run <code>astro dev</code>, Astro adds a toolbar to the
            bottom of every page. It only shows up while you develop locally, so
            visitors never see it.
          </p>
          <ul className={styles.features}>
            {FEATURES.map(({ name, icon, description }) => (
              <li key={name} className={styles.feature}>
                <img className={styles.icon} src={withBase(icon)} alt="" />
                <p>
                  <strong>{name}:</strong> {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <img
          className={styles.image}
          src={withBase("/about/toolbar.png")}
          alt="The Astro toolbar with its Menu, Inspect, Audit, and Settings buttons"
          loading="lazy"
        />
      </div>
    </section>
  );
}
