import React from "react";
import Image from "next/image";

import styles from "./logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className={styles.wrapper}>
      <Image
        className={styles.logoImage}
        src={"/logo.png"}
        alt="logo"
        width={45}
        height={42}
        priority
      />
      <span className={styles.logoText}>eatly</span>
    </Link>
  );
}

export default Logo;
