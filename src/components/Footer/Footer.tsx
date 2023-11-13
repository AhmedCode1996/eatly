import React from "react";

import styles from "./footer.module.css";
import { FlexWrapper, Logo, MaxWidthWrapper } from "..";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <MaxWidthWrapper>
        <FlexWrapper>
          <div className={styles.leftSide}>
            <Logo />
          </div>
          <div className={styles.rightSide}>
            <nav>
              <ul>
                <li>
                  <Link href="#">blog</Link>
                </li>
                <li>
                  <Link href="#">pricing</Link>
                </li>
                <li>
                  <Link href="#">about</Link>
                </li>
                <li>
                  <Link href="#">contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </FlexWrapper>
        <FlexWrapper>
          <div className={styles.copyright}>
            <p>© 2023 eatly. all rights reserved</p>
          </div>
          <div className={styles.socialMedia}>
            <ul>
              <li>
                <Link href="#">
                  <Image
                    src={"/socialMedia/gmail.svg"}
                    alt="gmail icon"
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/socialMedia/facebook.svg"}
                    alt="facebook icon"
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/socialMedia/linkedin.svg"}
                    alt="linkedin icon"
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={"/socialMedia/twitter.svg"}
                    alt="twitter icon"
                    width={35}
                    height={35}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </FlexWrapper>
      </MaxWidthWrapper>
    </footer>
  );
}

export default Footer;
