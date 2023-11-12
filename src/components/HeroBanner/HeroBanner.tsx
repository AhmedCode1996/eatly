import styles from "./heroBanner.module.css";

function HeroBanner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <h2>10k+</h2>
        <p>Satisfied Costumers All Great Over The World</p>
      </div>
      <div className={styles.item}>
        <h2>4m</h2>
        <p>Healthy Dishes SoldIncluding Milk Shakes Smooth</p>
      </div>
      <div className={styles.item}>
        <h2>99.99%</h2>
        <p>Reliable Customer SupportWe Provide Great Experiences</p>
      </div>
    </div>
  );
}

export default HeroBanner;
