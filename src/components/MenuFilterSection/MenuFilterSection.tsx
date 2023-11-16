import React from "react";
import styles from "./menuFilterSection.module.css";
import { FlexWrapper, MenuBannerTabs, PriceSlider } from "..";
import Image from "next/image";
import { MENU_CATEGORY } from "@/data/menuCategory";

function MenuFilterSection() {
  return (
    <div className={styles.wrapper}>
      <FlexWrapper>
        <div className={styles.leftSide}>
          <div className={styles.banner}>
            <div className={styles.bannerLeftSide}>
              <h2 className={styles.bannerTitle}>50% off</h2>
              <h2 className={styles.bannerSubTitle}>weekend</h2>
            </div>
            <div className={styles.bannerRightSide}>
              <Image
                src={"/MenuFilter/FoodImage.png"}
                width={200}
                height={200}
                alt="food image"
                priority
              />
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.inputSearchIcon}>
              <svg
                fill="#000000"
                height="27px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.4 488.4"
              >
                <g>
                  <g>
                    <path
                      d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <input type="text" placeholder="search" />
          </div>
          <MenuBannerTabs />
        </div>
        <div className={styles.rightSide}>
          <div className={styles.categories}>
            <h2>category</h2>
            <ul className={styles.categoriesContainer}>
              {MENU_CATEGORY.map((item) => (
                <li key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={100}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.price}>
            <h2>price</h2>
            <PriceSlider />
          </div>
          <button className={styles.applyBtn}>apply</button>
        </div>
      </FlexWrapper>
    </div>
  );
}

export default MenuFilterSection;
