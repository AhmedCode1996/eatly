import { Header, HeroSection } from "@/components";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
    </main>
  );
}
