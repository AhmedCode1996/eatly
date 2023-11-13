import React from "react";

import styles from "./discountSection.module.css";
import { FlexWrapper, MaxWidthWrapper } from "..";
import Image from "next/image";

function DiscountSection() {
  return (
    <MaxWidthWrapper>
      <div className={styles.wrapper}>
        <FlexWrapper>
          <div className={styles.leftSide}>
            <h2 className={styles.title}>get50%</h2>
            <form>
              <p className={styles.inputField}>
                <input type="email" placeholder="enter your email address" />
                <button type="submit">subscribe</button>
              </p>
            </form>
          </div>
          <div className={styles.rightSide}>
            <Image
              src={"/discount/FoodImage.png"}
              width={275}
              height={275}
              alt="floating food image"
              className={styles.floatingFoodImage}
            />
          </div>
        </FlexWrapper>
      </div>
    </MaxWidthWrapper>
  );
}

export default DiscountSection;
