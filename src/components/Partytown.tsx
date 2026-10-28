import type { ReactNode } from "react";

import styles from "@styles/components/partytown.module.css";
import { withBase } from "@utils/url";

// Logo from the Partytown docs (https://partytown.qwik.dev, MIT).
// Icons adapted from Feather (https://feathericons.com, MIT).
const FEATURES: { name: string; icon: string; description: ReactNode }[] = [
  {
    name: "Setup",
    icon: "/about/partytown-setup.svg",
    description: (
      <>
        Run <code>pnpm astro add partytown</code> and it works on every page
        with zero config.
      </>
    ),
  },
  {
    name: "Usage",
    icon: "/about/partytown-usage.svg",
    description: (
      <>
        Add <code>type="text/partytown"</code> to a third-party script tag to
        move it into the web worker.
      </>
    ),
  },
  {
    name: "Forwarding",
    icon: "/about/partytown-forward.svg",
    description: (
      <>
        Scripts in the worker can't reach <code>window</code>, so list what they
        need, like <code>dataLayer.push</code>, in <code>config.forward</code>.
      </>
    ),
  },
  {
    name: "Debug",
    icon: "/about/partytown-debug.svg",
    description:
      "In dev and preview mode, Partytown logs what it's doing to the browser console.",
  },
];

export default function Partytown() {
  return (
    <section className={styles.partytown}>
      <div className={styles.content}>
        <div>
          <img
            className={styles.logo}
            src={withBase("/about/partytown-logo.svg")}
            alt="Partytown logo"
          />
          <h2>Partytown</h2>
          <p>
            Third-party scripts like analytics and ads can slow down your site.
            Partytown moves them off the main thread and into a web worker, so
            your own code stays fast.
          </p>
        </div>
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
    </section>
  );
}
