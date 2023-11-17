import React from "react";
import {
  DishUI,
  FrequentlyQuestions,
  MaxWidthWrapper,
  MenuFilterSection,
  RestaurantUI,
  TopSection,
} from "@/components";

import styles from "./page.module.css";
import { DISHES_DATA } from "@/data/dishesData";
import { RESTAURANT_DATA } from "@/data/restaurantData";

const Page = () => {
  return (
    <div className={styles.wrapper}>
      <MaxWidthWrapper>
        <MenuFilterSection />
        <TopSection
          title="restaurant"
          data={RESTAURANT_DATA}
          render={(restaurant, index) => (
            <RestaurantUI key={index} {...restaurant} />
          )}
        />
        <TopSection
          title="dish"
          data={DISHES_DATA}
          render={(dish, index) => <DishUI key={index} {...dish} />}
        />
        <FrequentlyQuestions />
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
