import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { dateFormat } from "@/lib/dateFormat";

type propsType = {
  id: number;
  title: string;
  image: string;
  author: string;
  authorProfile: string;
  date: Date;
  articles: {
    id: number;
    articleTitle: string;
    articleBody: string;
  }[];
};
function BlogArticle({
  id,
  title,
  image,
  author,
  authorProfile,
  date,
  articles,
}: propsType) {
  return (
    <Link href={"#"} className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} width={300} height={270} alt={title} />
      </div>
      <h2 className={styles.title}>{title}?</h2>
      <div className={styles.blogInfo}>
        <div className={styles.authorImage}>
          <Image src={authorProfile} width={43} height={43} alt={author} />
        </div>
        <p className={styles.authorName}>
          written by
          <span>{author}</span>
        </p>
        <p className={styles.blogDate}>{dateFormat(date)}</p>
      </div>
    </Link>
  );
}

export default BlogArticle;
