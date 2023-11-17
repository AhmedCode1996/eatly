import styles from "./page.module.css";

import { FlexWrapper } from "@/components";
import Image from "next/image";
const Page = () => {
  return (
    <section className={styles.wrapper}>
      <FlexWrapper>
        <div className={styles.leftSide}>
          <h2>just contact</h2>
          <Image
            src={"/contact/MobileScreen.png"}
            width={200}
            height={500}
            alt="contact form image"
          />
        </div>
        <div className={styles.rightSide}>
          <h2>
            customer
            <span> support</span>
          </h2>
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows={7}
              required
            ></textarea>
            <button type="submit">send now</button>
            <Image
              src={"/contact/Arrow.png"}
              width={150}
              height={150}
              alt="floating arrow for send now button"
              className={styles.arrow}
            />
          </form>
        </div>
      </FlexWrapper>
    </section>
  );
};

export default Page;
