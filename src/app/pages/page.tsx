import Head from "next/head";
import HomePage from "./home/page";

export default function Home() {
  return (
    <main>
      <Head>
        <title>NextBasketApp</title>
      </Head>
      <HomePage />
    </main>
  );
}
