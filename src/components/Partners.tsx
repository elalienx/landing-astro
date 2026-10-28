import { useState } from "react";

import styles from "@styles/components/partners.module.css";
import buttons from "@styles/components/buttons.module.css";
import { withBase } from "@utils/url";

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

// Matches the column count of .logos in partners.module.css.
const LOGOS_PER_ROW = 4;

export default function Partners() {
  const [showPartners, setShowPartners] = useState(false);

  const visibleLogos = showPartners ? LOGOS : LOGOS.slice(0, LOGOS_PER_ROW);

  return (
    <section className={styles.partners}>
      <div className={styles.content}>
        <h2>Våra samarbetspartners</h2>
        <div className={styles.logos}>
          {visibleLogos.map((src) => (
            <img key={src} src={withBase(src)} loading="lazy" />
          ))}
        </div>
        <button
          className={buttons.primary}
          onClick={() => setShowPartners(!showPartners)}
          aria-expanded={showPartners}
        >
          {showPartners ? "Visa färre partners" : "Se fler partners"}
        </button>
      </div>
    </section>
  );
}
