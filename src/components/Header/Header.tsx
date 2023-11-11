import styles from "./header.module.css";
import { AuthActions, HeaderNav, Logo, MaxWidthWrapper } from "../";

function Header() {
  return (
    <MaxWidthWrapper>
      <header className={styles.wrapper}>
        <Logo />
        <HeaderNav />
        <AuthActions />
      </header>
    </MaxWidthWrapper>
  );
}

export default Header;
