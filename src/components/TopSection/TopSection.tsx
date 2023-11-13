import React from "react";

import styles from "./topSection.module.css";
import { MaxWidthWrapper } from "..";
import { TopSectionProps } from "@/types/types";

function TopSection({ title, data, render }: TopSectionProps) {
  const renderData = data?.map((item, index) => render(item, index));
  let customGridArea = "";

  if (title === "restaurant") {
    customGridArea = styles.largeGrid;
  } else if (title === "dish") {
    customGridArea = styles.smallGrid;
  }

  return (
    <section className={styles.wrapper}>
      <MaxWidthWrapper>
        <h2 className={styles.title}>
          <span>our top</span>{" "}
          <span className={styles.subTitle}>{`${title}s`}</span>
        </h2>
        <div className={`${styles.gridArea} ${customGridArea}`}>
          {renderData}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default TopSection;

/*

 <Categories
          loading={isLoading}
          data={data?.categories}
          renderCategory={(category, index) => (
            <Category key={index} category={category} id={index} />
          )}
        />

*/
