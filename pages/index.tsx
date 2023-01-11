import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Youtube Event Helper</title>
        <h1 className="title">
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
      </Head>
      <main className={styles.main}>
        <h2>hello world</h2>
      </main>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </>
  );
}
