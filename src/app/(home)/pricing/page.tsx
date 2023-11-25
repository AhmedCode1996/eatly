import { MaxWidthWrapper, PricingTable, PurchaseSection } from "@/components";
import React from "react";

import styles from "./page.module.css";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <MaxWidthWrapper>
        <div className={styles.heading}>
          <div className={styles.headingTitle}>
            <Image
              src={"/pricing/Vector.png"}
              width={80}
              height={80}
              alt={"arrow"}
            />
            <h2>our pricing</h2>
          </div>
          <div className={styles.headingImage}>
            <Image
              src={"/pricing/01.png"}
              width={40}
              height={32}
              alt="floating arrow image"
              className={styles.floatingArrow}
            />
            <Image
              src={"/pricing/main.png"}
              width={880}
              height={630}
              alt="main pricing image"
              priority
            />
            <Image
              src={"/pricing/02.png"}
              width={40}
              height={32}
              alt="floating arrow image"
              className={styles.floatingArrow}
            />
          </div>
        </div>
        <PricingTable />
        <PurchaseSection />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
