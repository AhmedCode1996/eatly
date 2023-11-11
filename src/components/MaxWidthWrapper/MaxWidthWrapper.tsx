import React from "react";

import styles from "./maxWidthWrapper.module.css";

function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default MaxWidthWrapper;
