import {
  BlogArticles,
  DiscountSection,
  FrequentlyQuestions,
  MaxWidthWrapper,
} from "@/components";

import styles from "./page.module.css";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <MaxWidthWrapper>
        <DiscountSection />
        <BlogArticles />
        <FrequentlyQuestions />
      </MaxWidthWrapper>
    </section>
  );
};

export default Page;
