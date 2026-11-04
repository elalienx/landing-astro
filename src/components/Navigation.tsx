import styles from "@styles/components/navigation.module.css";

interface Props {
  currentPath: string;
}

export default function Navigation({ currentPath }: Props) {
  const trimSlash = (path: string) => path.replace(/\/$/, "");
  const activeClass = (path: string) =>
    trimSlash(currentPath) === trimSlash(path) ? styles.active : "";
  const consumerActive = activeClass("/");
  const bussinesActive = activeClass("/business");
  const mortgageActive = activeClass("/mortgage");

  return (
    <nav className={styles.navigation}>
      <img
        className={styles.logo}
        src="/logo.svg"
        width={116}
        height={42}
        alt="Lendo"
      />
      <div className={styles.links}>
        <a href="/" className={`${styles.link} ${consumerActive}`}>
          Privat
        </a>
        <a href="/business" className={`${styles.link} ${bussinesActive}`}>
          Foregslatan
        </a>
        <a href="/mortgage" className={`${styles.link} ${mortgageActive}`}>
          Bolan
        </a>
      </div>
      <a
        href="https://inbox.lendo.se"
        className={`${styles.link} ${styles.login}`}
      >
        Logga in
      </a>
    </nav>
  );
}
