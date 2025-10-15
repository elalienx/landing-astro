import { useState } from "react";

interface Props {
  /** The title to show on the component. */
  label: string;
}

export default function IncrementalCounter({ label }: Props) {
  const [value, setValue] = useState(0);

  return (
    <div
      className="incremental-counter"
      style={{ backgroundColor: "green", color: "white" }}
    >
      {/* Title */}
      <span>{label}</span>

      {/* Controls */}
      <div className="controls">
        <button onClick={() => setValue(value - 1)} disabled={value <= 0}>
          -
        </button>
        <input
          type="number"
          pattern="\d*"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <button onClick={() => setValue(value + 1)} disabled={value >= 10}>
          +
        </button>
      </div>
    </div>
  );
}
