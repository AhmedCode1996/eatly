import React from "react";
import Image from "next/image";
import Link from "next/link";
import { inter, manrope, poppin } from "@/config/fonts";

import styles from "./layout.module.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${inter.variable} ${poppin.variable} ${manrope.variable} ${styles.wrapper}`}
    >
      <div className={styles.authContent}>
        <Link href={"/"} className={styles.logo}>
          <Image src="/Logo.png" width={50} height={50} alt="logo" />
        </Link>
        {children}
        <div className={styles.authFooter}>
          <p>privacy policy</p>
          <p>copyright 2023</p>
        </div>
      </div>
      <div className={styles.authImage}>
        <div className={styles.imageWrapper}>
          <Image
            src={"/auth/FloatingImage.png"}
            width={300}
            height={100}
            alt="floating image"
            className={styles.floatingImage}
          />
          <Image
            src={"/auth/FoodImage.png"}
            width={340}
            height={350}
            alt="main image"
            className={styles.mainImage}
          />
          <Image
            src={"/auth/GraphImage.png"}
            width={230}
            height={150}
            alt="floating image"
            className={styles.floatingImage}
          />
        </div>
        <div className={styles.authImageContent}>
          <h2>find foods with love</h2>
          <p>
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
