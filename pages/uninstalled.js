import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unclutter - Immersive Reading Mode</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="m-3 text-3xl font-bold">
        <Link href="/" passHref>
          <a className="flex gap-3 items-center">
            <img className="w-14" src="/icon.svg" />
            Unclutter
          </a>
        </Link>
      </h1>
      <main className="mx-auto max-w-xl flex flex-col items-start text-lg">
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
