import styles from "@styles/components/hero.module.css";

interface Props {
  product: string;
}

export default function Hero({ product }: Props) {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <h1>{product}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui
          totam, deserunt velit omnis ratione sequi.
        </p>
        <p>Hackathon 2025 🎃</p>
      </div>
    </header>
  );
}
