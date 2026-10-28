import type { ReactNode } from "react";

import styles from "@styles/components/hero.module.css";

interface Props {
  product: string;
  /** The form shown on the right side of the hero. */
  children: ReactNode;
}

export default function Hero({ product, children }: Props) {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{product}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            qui totam, deserunt velit omnis ratione sequi.
          </p>
          <p>Hackathon 2025 🎃</p>
        </div>
        <div className={styles.form}>{children}</div>
      </div>
    </header>
  );
}
