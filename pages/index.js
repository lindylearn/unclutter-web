import Head from "next/head";
import Image from "next/image";

// import screenshotPg from "./screenshots/pg.png";
// import screenshotAtlatic from "./screenshots/atlantic.png";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef();
  const [activeVideoSegement, setActiveVideoSegment] = useState(1);
  function selectSegment(newIndex) {
    if (newIndex === activeVideoSegement) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      setActiveVideoSegment(newIndex);
    }
  }
  function onSegmentComplete() {
    let newIndex = activeVideoSegement + 1;
    if (newIndex === 6) {
      return;
    }
    setActiveVideoSegment(newIndex);
  }

  return (
    <div className="font-display text-neutral-900">
      <Head>
        <title>Unclutter - Immersive Reading Mode</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex xl:hidden gap-2 items-start p-2 sm:p-5">
        <img className="w-16" src="/icon.svg" />
        <div className="">
          <h1 className="text-3xl font-bold">
            <span className="">Unclutter</span>
            <span className="font-semibold">
              {" "}
              <span className="hidden sm:inline">your reading</span>
            </span>
          </h1>
          <h2 className="text-lg sm:text-xl">A new approach to reader mode</h2>
        </div>
      </header>

      <main className="">
        <div className="mt-2 xl:mt-10 flex flex-col xl:flex-row gap-5 sm:gap-10 px-5 xl:px-10 justify">
          <div className="w-full xl:w-7/12">
            <video
              ref={videoRef}
              className="rounded-xl shadow-xl transition-all hover:shadow-2xl sm:hover:rotate-1"
              id="video"
              src={`media/videos/${activeVideoSegement}.${
                activeVideoSegement !== 5 ? "mov" : "mp4"
              }`}
              autoPlay
              muted
              onEnded={onSegmentComplete}
            />
          </div>

          <div className="flex flex-col justify-start">
            <header className="hidden xl:flex gap-3 items-center">
              <img className="w-20" src="/icon.svg" />
              <div className="">
                <h1 className="text-4xl font-bold">
                  <span className="">Unclutter</span>
                  <span className="font-semibold"> your reading</span>
                </h1>
                <h2 className="text-xl">A new approach to reader mode</h2>
              </div>
            </header>

            <ul className="xl:mt-24 sm:ml-10 xl:ml-20 flex flex-col sm:gap-1 text-2xl sm:text-3xl font-semibold select-none	">
              <VideoSegmentCaption
                index={1}
                title="Remove distractions"
                activeVideoSegement={activeVideoSegement}
                selectSegment={selectSegment}
              />
              <VideoSegmentCaption
                index={2}
                title="Customize colors & font"
                activeVideoSegement={activeVideoSegement}
                selectSegment={selectSegment}
              />
              <VideoSegmentCaption
                index={3}
                title="Outline long pages"
                activeVideoSegement={activeVideoSegement}
                selectSegment={selectSegment}
              />
              <VideoSegmentCaption
                index={4}
                title="Automatically activate"
                activeVideoSegement={activeVideoSegement}
                selectSegment={selectSegment}
              />
              <VideoSegmentCaption
                index={5}
                title="Right in your browser"
                activeVideoSegement={activeVideoSegement}
                selectSegment={selectSegment}
              />
            </ul>
          </div>
        </div>
      </main>

      <div className="mt-5 sm:mt-10 xl:mt-16 flex flex-wrap md:flex-nowrap gap-5 justify-center items-center">
        <a
          className="flex-shrink-0 w-52 bg-white rounded-lg shadow transition-all hover:shadow-lg hover:-rotate-1"
          href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
        >
          <img className="object-contain h-16" src="/chrome-badge.png"></img>
        </a>

        <a
          className="flex-shrink-0 w-36 bg-[#109ad6] rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1"
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

      <ExamplePageList />

      <footer className="mt-3 p-3 flex gap-1 justify-center sm:text-lg">
        <div>
          From Amsterdam to the world. Only possible with your{" "}
          <a
            className="inline-block font-semibold hover:rotate-1"
            href="https://twitter.com/lindylearn"
            target="_blank"
            rel="noreferrer"
          >
            support
          </a>
          !
        </div>
      </footer>
    </div>
  );
}

function VideoSegmentCaption({
  index,
  title,
  activeVideoSegement,
  selectSegment,
}) {
  return (
    <li
      className={
        "cursor-pointer " +
        (index === activeVideoSegement
          ? "opacity-100 animate-wiggle"
          : "opacity-20")
      }
      onClick={() => selectSegment(index)}
    >
      {index}. {title}
    </li>
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

function ExamplePageList() {
  // const count = window.matchMedia("max-width: 1000px") ? 12 : 21;
  return (
    <div className="mt-5 sm:mt-10 xl:mt-14 mb-5 xl:mx-10 flex flex-col items-center">
      <div className="text-lg sm:text-xl">
        For the love of internet articles.
      </div>
      <div className="mt-2 sm:mt-5 xl:mt-7 flex flex-wrap justify-center gap-2 sm:gap-5">
        {Array.from(Array(21).keys()).map((i) => (
          <ExamplePage key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

function ExamplePage({ index }) {
  return (
    <a
      className={
        "w-28 sm:w-36 xl:w-48 flex rounded-lg shadow-lg hover:shadow-2xl transition-all " +
        (index % 3 === 0 ? "hover:-rotate-1" : "hover:rotate-1")
      }
      href={exampleUrls[index]}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        className="rounded-lg"
        src={`/media/pages/screenshot_${index}.png`}
        width={1360}
        height={1600}
        priority={index < 7}
      />
    </a>
  );
}
