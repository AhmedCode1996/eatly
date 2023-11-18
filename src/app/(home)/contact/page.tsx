import styles from "./page.module.css";

import { ContactForm, FlexWrapper } from "@/components";
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
          <ContactForm />
        </div>
      </FlexWrapper>
    </section>
  );
};

export default Page;
