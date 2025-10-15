import { useState } from "react";

import styles from "@styles/components/incremental-counter.module.css";

interface Props {
  /** The title to show on the component. */
  label: string;
}

export default function IncrementalCounter({ label }: Props) {
  const [value, setValue] = useState(0);

  return (
    <section className={styles.incrementalCounter}>
      <div className={styles.content}>
        {/* Title */}
        <span>{label}</span>

        {/* Controls */}
        <div className="controls">
          <button onClick={() => setValue(value - 1)} disabled={value <= 0}>
            ➖
          </button>
          <input
            pattern="\d*"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
          <button onClick={() => setValue(value + 1)} disabled={value >= 10}>
            ➕
          </button>
        </div>
      </div>
    </section>
  );
}
