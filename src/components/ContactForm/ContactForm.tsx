"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { ChangeEvent, useState } from "react";
function ContactForm() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };
  return (
    <form className={styles.wrapper}>
      <input
        value={contactInfo.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        value={contactInfo.email}
        onChange={handleChange}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        value={contactInfo.message}
        onChange={handleChange}
        name="message"
        placeholder="Message"
        rows={7}
        required
      ></textarea>
      <div className={styles.btnWrapper}>
        <button type="submit">send now</button>
        <Image
          src={"/contact/Arrow.png"}
          width={150}
          height={150}
          alt="floating arrow for send now button"
          className={styles.arrow}
        />
      </div>
    </form>
  );
}

export default ContactForm;
