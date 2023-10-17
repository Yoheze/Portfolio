import Link from "next/link";
import styles from "@/styles/homeButton.module.css";

export default function homeButton() {
  return (
    <div className={styles.navbarDesign}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
      </nav>
      <div className={styles.triangle}></div>
    </div>
  );
}
