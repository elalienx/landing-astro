import type { FormEvent } from "react";

import styles from "@styles/components/form.module.css";
import buttons from "@styles/components/buttons.module.css";

export default function BusinessForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Submitted");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        Company name
        <input
          name="companyName"
          autoComplete="organization"
          placeholder="Clar"
          required
        />
      </label>

      <fieldset className={styles.options}>
        <legend>Company type</legend>
        <label>
          <input type="radio" name="companyType" value="public" required />
          Public company
        </label>
        <label>
          <input type="radio" name="companyType" value="sole-trader" required />
          Sole trader
        </label>
      </fieldset>

      <button type="submit" className={`${buttons.primary} ${buttons.big}`}>
        Submit
      </button>
    </form>
  );
}
