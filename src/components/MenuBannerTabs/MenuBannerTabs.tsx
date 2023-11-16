"use client";
import { useState } from "react";
import styles from "./menuBannerTabs.module.css";
const MenuBannerTabs = () => {
  const [toggle, setToggle] = useState(0);

  const tabs = [
    { label: "food", content: "food" },
    { label: "restaurant", content: "restaurant" },
  ];

  const handleClick = (index: number) => {
    setToggle(index);
  };

  return (
    <div className={styles.wrapper}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className={toggle === index ? styles.active : ""}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};
export default MenuBannerTabs;
