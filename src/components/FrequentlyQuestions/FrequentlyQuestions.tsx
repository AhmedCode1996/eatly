"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FREQUENTLY_QUESTIONS } from "@/data/frequentlyQuestions";

import styles from "./styles.module.css";
import Image from "next/image";
import { CollapseIcon } from "..";

export default function FrequentlyQuestions() {
  const itemClasses = {
    title: styles.title,
    content: styles.content,
  };
  return (
    <>
      <div className={styles.heading}>
        <h2>
          Frequently Asked
          <span className={styles.subHeading}>Questions</span>
        </h2>
        <Image
          src={"/MenuFilter/Illustration.png"}
          alt="illustration"
          width={40}
          height={40}
          className={styles.floatingImage}
        />
      </div>
      <Accordion variant="bordered" itemClasses={itemClasses}>
        {FREQUENTLY_QUESTIONS.map((question) => (
          <AccordionItem
            key={question.id}
            aria-label={question.question}
            title={question.question}
            indicator={<CollapseIcon />}
          >
            {question.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
