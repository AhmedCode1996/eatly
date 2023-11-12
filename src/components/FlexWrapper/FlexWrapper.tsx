import React from "react";

import styles from "./flexWrapper.module.css";

function FlexWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default FlexWrapper;
