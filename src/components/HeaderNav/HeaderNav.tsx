import React from "react";
import Link from "next/link";

import styles from "./headerNav.module.css";
function HeaderNav() {
  return (
    <nav className={styles.wrapper}>
      <ul>
        <li>
          <Link href="/menu">menu</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/pricing">pricing</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
