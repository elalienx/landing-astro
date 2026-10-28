import type { FormEvent } from "react";

import styles from "@styles/components/form.module.css";
import buttons from "@styles/components/buttons.module.css";

export default function ConsumerForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Submitted");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        Name
        <input
          name="name"
          autoComplete="name"
          placeholder="John Doe"
          required
        />
      </label>

      <label className={styles.field}>
        Phone
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+46 778899000"
          required
        />
      </label>

      <button type="submit" className={`${buttons.primary} ${buttons.big}`}>
        Submit
      </button>
    </form>
  );
}
