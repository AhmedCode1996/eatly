import React from "react";
import { FlexWrapper, MaxWidthWrapper } from "..";
import styles from "./heroSection.module.css";
import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <section className={styles.wrapper}>
      <MaxWidthWrapper>
        <FlexWrapper>
          <div className={styles.leftSide}>
            <h1 className={styles.title}>
              enjoy foods all over the{" "}
              <span className={styles.subTitle}> world</span>
            </h1>
            <p className={styles.description}>
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a{" "}
              <span className={styles.subDescription}>$20 bonus</span>.
            </p>
            <div className={styles.actions}>
              <Link
                className={`${styles.getStarted} ${styles.baseAction}`}
                href="#"
              >
                get started
              </Link>
              <Link className={`${styles.goPro} ${styles.baseAction}`} href="#">
                go pro
              </Link>
            </div>
            <div className={styles.reviews}>
              <Image
                src={"/trustpilot.png"}
                alt="trustpilot"
                width={20}
                height={20}
              />
              <Image src={"/stars.png"} alt="star" width={20} height={20} />
              <span>4900+</span>
            </div>
          </div>
          <div className={styles.rightSide}></div>
        </FlexWrapper>
      </MaxWidthWrapper>
    </section>
  );
}

export default HeroSection;
