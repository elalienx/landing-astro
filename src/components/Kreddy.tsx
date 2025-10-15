import styles from "../styles/kredy.module.css";

export default function Kreddy() {
  return (
    <>
      {/* Toggle between them using CSS */}
      <Mobile />
      <Desktop />
    </>
  );
}

function Mobile() {
  return (
    <section className={styles.mobile}>
      <img src="./app-banner.webp" />
      <h2>Din privatekonomi - direkt i mobilen med Kreddy</h2>
      <p>
        I Lendos app, Kreddy fär du tillgàng till ditt kreditbetyg som vi
        inhämtar frän UC, utan att en kreditupplysning tas pà dig. Utöver att se
        ditt kreditbetyg fär du även en översikt av dina befintliga làn och
        krediter och vill du ha hjälp att samla dem via Lendo sà hjälper vi dig
        med din ansökan. Allt і Kreddy-appen är gratis.
      </p>
      <h3>Ladda ner nu</h3>
      <img
        className={styles.badge}
        src="./app-store-badge.svg"
        loading="lazy"
      />
      <img
        className={styles.badge}
        src="./google-play-badge.svg"
        loading="lazy"
      />
    </section>
  );
}

function Desktop() {
  return (
    <section className={styles.desktop}>
      <div>
        <h2>Din privatekonomi - direkt i mobilen med Kreddy</h2>
        <p>
          I Lendos app, Kreddy fär du tillgäng till ditt kreditbetyg som vi
          inhämtar fràn UC, utan att en kreditupplysning tas pà dig. Utöver att
          se ditt kreditbetyg fär du även en översikt av dina befintliga län och
          krediter och vill du ha hjälp att samla dem via Lendo sà hjälper vi
          dig med din ansökan. Allt i Kreddy-appen är gratis.
        </p>
        <div>
          <p>Scanna QR-koden med mobilkameran för att ladda ner appen</p>
          <img src="./arrow.svg" loading="lazy" />
          <img src="./qrcode-lendose.svg" loading="lazy" />
        </div>
      </div>
      <img src="./app-banner.webp" loading="lazy" />
    </section>
  );
}
