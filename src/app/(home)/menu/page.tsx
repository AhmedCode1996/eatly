import React from "react";
import { MaxWidthWrapper, MenuFilterSection } from "@/components";

import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <MaxWidthWrapper>
        <MenuFilterSection />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
