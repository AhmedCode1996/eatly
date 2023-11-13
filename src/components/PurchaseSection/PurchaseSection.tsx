import React from "react";

import styles from "./purchaseSection.module.css";
import { FlexWrapper, MaxWidthWrapper } from "..";
import Image from "next/image";

function PurchaseSection() {
  return (
    <section className={styles.wrapper}>
      <MaxWidthWrapper>
        <FlexWrapper>
          <div className={styles.leftSide}>
            <h2 className={styles.title}>
              control <span className={styles.subTitle}> purchases</span> via
              dashboard
            </h2>
            <Image
              src={"/purchases/1st.png"}
              width={345}
              height={88}
              alt="purchase1"
            />
            <Image
              src={"/purchases/2nd.png"}
              width={345}
              height={88}
              alt="purchase2"
            />
            <Image
              src={"/purchases/3rd.png"}
              width={345}
              height={88}
              alt="purchase3"
            />
          </div>
          <div className={styles.rightSide}>
            <Image
              src={"/purchases/savings.png"}
              width={500}
              height={450}
              alt="savings"
            />
          </div>
        </FlexWrapper>
      </MaxWidthWrapper>
    </section>
  );
}

export default PurchaseSection;
