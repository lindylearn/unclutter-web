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

      {/* <header className="p-3 text-lg flex gap-3 items-center">
        <img className="w-12" src="/icon.svg" />
        <div className="text-3xl font-semibold">Unclutter</div>
      </header> */}

      <main className="mt-10 mx-auto max-w-xl flex flex-col items-start text-lg">
        <iframe
          src="https://tally.so/embed/wAkeym?alignLeft=1&hideTitle=0&transparentBackground=1"
          width="100%"
          height="1050px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="-ml-1"
        ></iframe>
      </main>

      <footer className="p-3 text-center text-lg">
        For the love of internet articles.
      </footer>
    </div>
  );
}
