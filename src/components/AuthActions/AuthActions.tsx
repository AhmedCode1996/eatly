import React from "react";
import styles from "./authActions.module.css";
import { AuthButton } from "..";

function AuthActions() {
  return (
    <div className={styles.wrapper}>
      <AuthButton type="login" title="login" />
      <AuthButton type="signup" title="sign up" />
    </div>
  );
}

export default AuthActions;
