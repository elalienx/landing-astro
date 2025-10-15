import { useState } from "react";

import styles from "@styles/components/partners.module.css";
import button from "@styles/components/button.module.css";

export default function Partners() {
  const [showPartners, setShowPartners] = useState(false);

  const Logos = (
    <div className={styles.logos}>
      <img src="./partners/logo-1.svg" loading="lazy" />
      <img src="./partners/logo-2.svg" loading="lazy" />
      <img src="./partners/logo-3.svg" loading="lazy" />
      <img src="./partners/logo-4.svg" loading="lazy" />
      <img src="./partners/logo-5.svg" loading="lazy" />
      <img src="./partners/logo-6.svg" loading="lazy" />
      <img src="./partners/logo-7.svg" loading="lazy" />
      <img src="./partners/logo-8.svg" loading="lazy" />
    </div>
  );

  return (
    <section className={styles.partners}>
      <div className={styles.content}>
        <h2>Våra samarbetspartners</h2>
        {showPartners && Logos}
        <button
          className={button.buttonPrimary}
          onClick={() => setShowPartners(!showPartners)}
        >
          Se fler partners
        </button>
      </div>
    </section>
  );
}
