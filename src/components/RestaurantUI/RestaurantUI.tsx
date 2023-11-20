import React from "react";

import styles from "./restaurantUI.module.css";
import Image from "next/image";
import { RestaurantProps } from "@/types/types";

function RestaurantUI({
  id,
  title,
  image,
  rating,
  time,
  tag,
}: RestaurantProps) {
  let customTagStyle = "";
  if (tag === "healthy") {
    customTagStyle = styles.healthy;
  } else if (tag === "trending") {
    customTagStyle = styles.trending;
  }

  return (
    <article className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={350} height={150} />
      </div>
      <div className={styles.cardDescription}>
        <h3 className={`${styles.tag} ${customTagStyle}`}>{tag}</h3>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.details}>
          <span className={styles.time}>{`${time}min`}</span>
          <p className={styles.rating}>
            <Image src={"/Star.png"} alt="star icon" width={20} height={20} />
            <span>{rating}</span>
          </p>
          <Image
            className={styles.bookmark}
            src={"/Bookmark.png"}
            width={40}
            height={40}
            alt="bookmark icon"
          />
        </div>
      </div>
    </article>
  );
}

export default RestaurantUI;
