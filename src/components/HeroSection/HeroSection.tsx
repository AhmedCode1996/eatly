import React from "react";
import { FlexWrapper, HeroBanner, MaxWidthWrapper } from "..";
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
                src={"/Hero/trustpilot.png"}
                alt="trustpilot icon"
                width={150}
                height={20}
              />
              <Image
                src={"/Hero/stars.png"}
                alt="stars icon"
                width={150}
                height={20}
              />
              <span>4900+</span>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.heroImage}>
              <Image
                src={"/Hero/1st.png"}
                height={150}
                width={300}
                alt="top floating image"
                priority
                className={`${styles.floatingImage} ${styles.topFloatingImage}`}
              />
              <Image
                src={"/Hero/Arrow.png"}
                height={100}
                width={80}
                alt="top floating image"
                className={`${styles.floatingImage} ${styles.topFloatingArrow}`}
              />
              <Image
                src={"/Hero/FoodImage.png"}
                alt="hero image"
                // width={400}
                // height={400}
                layout="fill"
              />
              <Image
                src={"/Hero/Graph.png"}
                height={100}
                width={250}
                alt="top floating image"
                className={`${styles.floatingImage} ${styles.bottomFloatingImage}`}
              />
            </div>
          </div>
        </FlexWrapper>
      </MaxWidthWrapper>
      <HeroBanner />
    </section>
  );
}

export default HeroSection;
