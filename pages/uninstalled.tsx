import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-display text-neutral-800">
      <Head>
        <title>Unclutter Feedback</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10 mx-auto max-w-xl flex flex-col items-start text-lg">
        <iframe
          src="https://tally.so/embed/3qy1O3?alignLeft=1&hideTitle=1&transparentBackground=1"
          width="100%"
          height="800px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="-ml-1"
        ></iframe>
      </main>

      <footer></footer>
    </div>
  );
}
