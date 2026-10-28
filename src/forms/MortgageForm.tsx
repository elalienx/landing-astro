import type { FormEvent } from "react";

import styles from "@styles/components/form.module.css";
import buttons from "@styles/components/buttons.module.css";

export default function MortgageForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("Submitted");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.field}>
        Loan amount
        <input
          type="number"
          name="loanAmount"
          inputMode="numeric"
          min={1}
          placeholder="3000000"
          required
        />
      </label>

      <fieldset className={styles.options}>
        <legend>Property type</legend>
        <label>
          <input type="radio" name="propertyType" value="apartment" required />
          Apartment
        </label>
        <label>
          <input type="radio" name="propertyType" value="house" required />
          House
        </label>
      </fieldset>

      <button type="submit" className={`${buttons.primary} ${buttons.big}`}>
        Submit
      </button>
    </form>
  );
}
