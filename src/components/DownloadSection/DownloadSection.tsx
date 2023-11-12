import React from "react";
import styles from "./downloadSection.module.css";
import { FlexWrapper, MaxWidthWrapper } from "..";
import Image from "next/image";

function DownloadSection() {
  return (
    <section className={styles.wrapper}>
      <MaxWidthWrapper>
        <FlexWrapper>
          <div className={styles.leftSide}>
            <Image
              src={"/download/Illustration.png"}
              alt="floating illustration image"
              width={50}
              height={50}
              className={styles.FloatingIllustrationImage}
            />
            <Image
              src={"/download/MobileScreen.png"}
              alt="mobile screen image"
              width={250}
              height={500}
            />
          </div>
          <div className={styles.rightSide}>
            <h2 className={styles.title}>
              premium <span className={styles.subTitle}>quality</span> for your
              health
            </h2>
            <p>
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </p>
            <p>
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </p>
            <button>download</button>
            <Image
              src={"/download/Vector14.png"}
              width={100}
              height={100}
              alt="arrow image"
              className={styles.floatingArrowImage}
            />
          </div>
        </FlexWrapper>
      </MaxWidthWrapper>
    </section>
  );
}

export default DownloadSection;
