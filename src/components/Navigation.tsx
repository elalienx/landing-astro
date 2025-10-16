import styles from "@styles/components/navigation.module.css";

interface Props {
  currentPath: string;
}

export default function Navigation({ currentPath }: Props) {
  const consumerActive = currentPath === "/" ? styles.active : "";
  const bussinesActive = currentPath === "/business/" ? styles.active : "";
  const mortgageActive = currentPath === "/mortgage/" ? styles.active : "";

  return (
    <nav className={styles.navigation}>
      <img src="./logo.svg" />
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
      <a href="https://inbox.lendo.se" className={styles.link}>
        Logga in 🔐
      </a>
    </nav>
  );
}
