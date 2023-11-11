import Link from "next/link";
import React from "react";

import styles from "./authButton.module.css";

type propsType = {
  type: "login" | "signup";
  title: string;
};

function AuthButton({ type, title }: propsType) {
  return (
    <Link
      href={`/${type}`}
      className={`${styles.wrapper} ${
        type === "login" ? styles.signin : styles.signup
      }`}
    >
      {title}
    </Link>
  );
}

export default AuthButton;
