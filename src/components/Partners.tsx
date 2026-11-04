import { useState } from "react";

import styles from "@styles/components/partners.module.css";
import buttons from "@styles/components/buttons.module.css";

const LOGOS = [
  "/partners/logo-1.svg",
  "/partners/logo-2.svg",
  "/partners/logo-3.svg",
  "/partners/logo-4.svg",
  "/partners/logo-5.svg",
  "/partners/logo-6.svg",
  "/partners/logo-7.svg",
  "/partners/logo-8.svg",
];

export default function Partners() {
  const [showPartners, setShowPartners] = useState(false);

  return (
    <section className={styles.partners}>
      <div className={styles.content}>
        <h2>Våra samarbetspartners</h2>
        <div
          className={`${styles.logos} ${showPartners ? "" : styles.collapsed}`}
        >
          {LOGOS.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" />
          ))}
        </div>
        <button
          className={buttons.outline}
          onClick={() => setShowPartners(!showPartners)}
          aria-expanded={showPartners}
        >
          {showPartners ? "Visa färre partners" : "Se fler partners"}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 12h16" />
            {!showPartners && <path d="M12 4v16" />}
          </svg>
        </button>
      </div>
    </section>
  );
}
