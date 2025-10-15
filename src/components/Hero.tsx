import styles from "@styles/components/hero.module.css";

interface Props {
  product: string;
}

export default function Hero({ product }: Props) {
  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <h1>Hackathon 2025 🎃</h1>
        <h2>{product}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus qui
          totam, deserunt velit omnis ratione sequi accusantium rem adipisci est
          consequuntur ad esse quia. Nulla maiores voluptatem id voluptates hic.
        </p>
      </div>
    </header>
  );
}
