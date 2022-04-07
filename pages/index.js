import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unclutter - Immersive Reading Mode</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-16 mx-auto max-w-2xl flex flex-col items-start text-lg gap-3">
        <h1 className="text-4xl font-bold">Unclutter Browser Extension</h1>
        <h2>Remove distractions from web articles, automatically.</h2>

        <div className="flex gap-3 mt-5">
          <a
            className="flex-shrink-0 w-3/6 bg-white rounded-xl shadow hover:shadow-lg"
            href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
          >
            <img
              className="object-contain h-24 -my-2"
              src="/chrome-badge.png"
            ></img>
          </a>

          <a
            className="flex-shrink-0 w-3/6 bg-[#109ad6] rounded-xl shadow hover:shadow-lg"
            href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
          >
            <img
              className="object-contain h-16 mt-2 mx-auto"
              src="/firefox-badge.png"
            ></img>
          </a>
        </div>

        <div className="mt-10 flex gap-3">
          Find the project on Github:
          <iframe
            src="https://ghbtns.com/github-btn.html?user=lindylearn&repo=unclutter&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
