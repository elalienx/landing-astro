import styles from "@styles/components/navigation.module.css";
import { withBase } from "@utils/url";

interface Props {
  currentPath: string;
}

export default function Navigation({ currentPath }: Props) {
  const consumerActive = currentPath === withBase("/") ? styles.active : "";
  const bussinesActive =
    currentPath === withBase("/business/") ? styles.active : "";
  const mortgageActive =
    currentPath === withBase("/mortgage/") ? styles.active : "";

  return (
    <nav className={styles.navigation}>
      <img src={withBase("/logo.svg")} />
      <div className={styles.links}>
        <a href={withBase("/")} className={`${styles.link} ${consumerActive}`}>
          Privat
        </a>
        <a
          href={withBase("/business")}
          className={`${styles.link} ${bussinesActive}`}
        >
          Foregslatan
        </a>
        <a
          href={withBase("/mortgage")}
          className={`${styles.link} ${mortgageActive}`}
        >
          Bolan
        </a>
      </div>
      <a href="https://inbox.lendo.se" className={styles.link}>
        Logga in 🔐
      </a>
    </nav>
  );
}
