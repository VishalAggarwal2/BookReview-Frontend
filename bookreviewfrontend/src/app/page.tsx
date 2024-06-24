import Image from "next/image";
import styles from './IntroPage.module.css';
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to Book Review App</h1>
      <p className={styles.description}>
        Discover, review, and share your favorite books with our community.
      </p>
    </header>
    <main className={styles.main}>
      <Link href={"/AddBookReview"}>
      <button className={styles.button}>Get Started</button>      
      </Link>
    </main>
  </div>
  );
}
