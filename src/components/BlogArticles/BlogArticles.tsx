import React from "react";
import styles from "./styles.module.css";
import { BLOG_ARTICLES } from "@/data/blogArticles";
import { BlogArticle } from "..";

function BlogArticles() {
  return (
    <>
      <h2 className={styles.title}>
        latest <span className={styles.subTitle}>articles</span>
      </h2>
      <div className={styles.wrapper}>
        {BLOG_ARTICLES.map((item) => {
          return <BlogArticle key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default BlogArticles;
