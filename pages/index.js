import Head from "next/head";
import Image from "next/image";

// import screenshotPg from "./screenshots/pg.png";
// import screenshotAtlatic from "./screenshots/atlantic.png";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className="font-display">
      <Head>
        <title>Unclutter - Immersive Reading Mode</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-neutral-900">
        {/* <header className="mt-5 mx-auto max-w-4xl flex gap-3 items-center">
          <img className="w-20" src="/icon.svg" />
          <div className="">
            <h1 className="text-5xl font-bold">
              Unclutter your reading process
            </h1>
            <h2 className="text-lg">Reader mode browser extension</h2>
          </div>
        </header> */}

        <div className="mt-10 flex gap-10 px-20 justify">
          <video
            className="w-3/6 rounded-xl shadow-xl hover:shadow-2xl"
            id="video"
            src="media/1.mov"
            autoPlay
            // loop
            muted
          />
          <div className="flex flex-col justify-start">
            <header className="flex gap-3 items-center">
              <img className="w-20" src="/icon.svg" />
              <div className="">
                <h1 className="text-4xl font-bold">
                  <span className="">Unclutter</span>
                  <span className="font-semibold"> your reading process</span>
                </h1>
                <h2 className="text-xl">
                  A better reader mode browser extension
                </h2>
              </div>
            </header>

            <ul className="mt-20 ml-24 flex flex-col gap-1 text-3xl font-semibold">
              <li className="opacity-100">Remove distractions</li>
              {/* <li className="opacity-10">Keep original design</li> */}
              <li className="opacity-10">Customize colors & font</li>
              {/* <li className="opacity-10">Dark mode</li> */}
              <li className="opacity-10">Outline long pages</li>
              <li className="opacity-10">Automatically activate</li>
              <li className="opacity-10">Right in your browser</li>
            </ul>
          </div>
        </div>
      </main>

      <div className="mt-14 flex gap-5 justify-center items-center">
        <a
          className="flex-shrink-0 w-52 bg-white rounded-lg shadow hover:shadow-lg"
          href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
        >
          <img className="object-contain h-16" src="/chrome-badge.png"></img>
        </a>

        <a
          className="flex-shrink-0 w-36 bg-[#109ad6] rounded-lg shadow hover:shadow-lg"
          href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
        >
          <img
            className="object-contain h-12 my-1 mx-auto"
            src="/firefox-badge.png"
          ></img>
        </a>

        <a
          className="flex-shrink-0"
          href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
        >
          <iframe
            src="https://ghbtns.com/github-btn.html?user=lindylearn&repo=unclutter&type=star&count=true&size=large"
            className="mt-0 mx-auto scale-100"
            frameBorder="0"
            scrolling="0"
            width="125"
            height="30"
            title="GitHub"
          ></iframe>
        </a>
      </div>

      <div className="mt-14 mb-5 mx-10 flex flex-col items-center">
        <div className="text-xl">For the love of internet articles.</div>
        <div className="mt-7 flex flex-wrap justify-center gap-5">
          {Array.from(Array(21).keys()).map((i) => (
            <ExamplePage key={i} index={i} />
          ))}
        </div>
      </div>

      {/* <footer className="mt-3 p-3 flex justify-center">
        From Amsterdam to the world.
      </footer> */}
    </div>
  );
}

const exampleUrls = [
  "http://www.paulgraham.com/ds.html",
  "https://kk.org/thetechnium/1000-true-fans/ ",
  "https://www.joelonsoftware.com/2001/04/21/dont-let-architecture-astronauts-scare-you/",
  "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
  "https://www.tesla.com/blog/secret-tesla-motors-master-plan-just-between-you-and-me",
  "https://arstechnica.com/science/2014/09/the-little-known-soviet-mission-to-rescue-a-dead-space-station/ ",
  "https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short ",
  "https://www.theguardian.com/lifeandstyle/2014/jul/19/change-your-life-sit-down-and-think ",
  "https://sive.rs/kimo",
  "http://www.aaronsw.com/weblog/rewritingreddit ",
  "https://www.fastcompany.com/28121/they-write-right-stuff ",
  "http://antirez.com/news/61 ",
  "https://www.economist.com/open-future/2018/11/26/ai-thinks-like-a-corporation-and-thats-worrying ",
  "https://www.bloomberg.com/news/features/2018-05-03/the-gambler-who-cracked-the-horse-racing-code ",
  "https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/ ",
  "https://martinfowler.com/bliki/MonolithFirst.html ",
  "https://www.raptitude.com/2016/12/five-things-you-notice-when-you-quit-the-news/ ",
  "https://www.newyorker.com/tech/annals-of-technology/walking-helps-us-think ",
  "https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",
  "https://www.nytimes.com/2012/07/15/fashion/the-challenge-of-making-friends-as-an-adult.html ",
  "https://www.theatlantic.com/magazine/archive/1982/02/have-you-ever-tried-to-sell-a-diamond/304575/ ",
];

function ExamplePage({ index }) {
  return (
    <a
      className={
        "w-48 flex rounded-lg shadow-lg hover:shadow-2xl transition-all " +
        (index % 3 === 0 ? "hover:-rotate-1" : "hover:rotate-1")
      }
      href={exampleUrls[index]}
      target="_blank"
    >
      <Image
        className="rounded-lg"
        src={`/media/pages/screenshot_${index}.png`}
        width={1360}
        height={1600}
      />
    </a>
  );
}
