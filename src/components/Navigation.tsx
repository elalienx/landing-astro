import styles from "@styles/components/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <span className="logo">Lendo</span>
      <div className={styles.links}>
        <a href="/" className={styles.link}>
          Privat
        </a>
        <a href="/business" className={styles.link}>
          Foregslatan
        </a>
        <a href="/mortgage" className={styles.link}>
          Bolan
        </a>
      </div>
      <a href="https://inbox.lendo.se" className={styles.link}>
        Logga in 🔐
      </a>
    </nav>
  );
}
