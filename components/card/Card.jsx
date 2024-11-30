import styles from "@/components/card/card.module.css";
import Link from "next/link";

export const Card = ({name, description, price, id}) => {
  return (
    <div className={styles.card}>
      <h2>{name ?? "Товар"}</h2>
      <p>{description ?? "Описание товара"}</p>

      <div>
        <span>{price ?? "-1"}</span> $
      </div>

      <Link href={`/${id}`}>Подробнее</Link>
    </div>
  );
};
