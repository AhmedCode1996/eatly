"use client";
import React from "react";
import styles from "./dishUI.module.css";
import Image from "next/image";
import { priceFormat } from "@/lib/priceFormat";
import { DishProps } from "@/types/types";
import path from "path";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

function DishUI({ id, title, image, tag, price, time, rating }: DishProps) {
  let customTagStyle = "";
  if (tag === "healthy") {
    customTagStyle = styles.healthy;
  } else if (tag === "trending") {
    customTagStyle = styles.trending;
  } else if (tag === "supreme") {
    customTagStyle = styles.supreme;
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`${styles.wrapper} relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300`}
    >
      <div className={styles.floatingHeartIcon}>
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
            fill="#1C274C"
          />
        </svg>
      </div>
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={styles.imageWrapper}
      >
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
        </div>
        <div className={styles.priceSection}>
          <p className={styles.price}>
            <span className={styles.mainPrice}>{`$${
              priceFormat(price ?? 0).integerPart
            }`}</span>
            <span className={styles.subPrice}>{`${
              priceFormat(price ?? 0).decimalPart
            }`}</span>
          </p>
          <button className={styles.addButton}>
            <Image src={"/Add.png"} alt="add icon" width={44} height={40} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default DishUI;
