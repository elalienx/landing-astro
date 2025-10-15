export default function KreddyDesktop() {
  return (
    <section
      className="kreddy-desktop"
      style={{ backgroundColor: "aliceblue", color: "navy" }}
    >
      <div className="content">
        <h2>Din privatekonomi - direkt i mobilen med Kreddy</h2>
        <p>
          I Lendos app, Kreddy fär du tillgäng till ditt kreditbetyg som vi
          inhämtar fràn UC, utan att en kreditupplysning tas pà dig. Utöver att
          se ditt kreditbetyg fär du även en översikt av dina befintliga län och
          krediter och vill du ha hjälp att samla dem via Lendo sà hjälper vi
          dig med din ansökan. Allt i Kreddy-appen är gratis.
        </p>
        <div className="call-to-action">
          <p>Scanna QR-koden med mobilkameran för att ladda ner appen</p>
          <img src="./arrow.svg" loading="lazy" />
          <img src="./qrcode-lendose.svg" loading="lazy" />
        </div>
      </div>
      <img src="./app-banner.webp" loading="lazy" />
    </section>
  );
}
