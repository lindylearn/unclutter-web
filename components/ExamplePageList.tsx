import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function ExamplePageList() {
    // compute number of example pages to show, to approximately fill two rows
    const [pagesPerRow, setPagesPerRow] = useState(0);
    useEffect(() => {
        let xMargin = 12;
        if (window.innerWidth >= 1280) {
            xMargin = 12 + 20;
        }

        let pageWidth = 112;
        let pageGap = 8;
        if (window.innerWidth >= 640) {
            pageWidth = 144;
            pageGap = 20;
        }
        if (window.innerWidth >= 1280) {
            pageWidth = 192;
        }

        let availableSpace = window.innerWidth - xMargin * 2;

        const pagesPerRow = Math.floor(availableSpace / (pageWidth + pageGap));
        setPagesPerRow(pagesPerRow);
    }, []);

    const { ref, inView } = useInView({
        threshold: 1.0,
        rootMargin: "0px 0px -30% 0px",
        triggerOnce: true,
    });

    return (
        <div className="mb-5 xl:mx-5 flex flex-col gap-3 md:gap-5 overflow-hidden">
            <div
                className={clsx(
                    "flex md:justify-center",
                    inView ? "animate-slidein" : "opacity-0"
                )}
                ref={ref}
            >
                <div
                    className={"text-lg md:text-[26px]"}
                    style={{ animationFillMode: "both" }}
                >
                    {/* <b className="font-bold text-2xl md:text-3xl">Unclutter</b>{" "}
                    <br className="md:hidden" /> */}
                    <span className="">For the love of internet articles.</span>
                </div>
            </div>

            <div
                className={clsx(
                    "md:mt-2 flex flex-wrap justify-evenly md:justify-center gap-2 sm:gap-5"
                )}
            >
                {Array.from(Array(pagesPerRow * 2).keys()).map((i) => (
                    <ExamplePage key={i} index={i} inView={inView} />
                ))}
            </div>
        </div>
    );
}

export function ExamplePage({ index, inView = false }) {
    const animationIndex = Math.round(Math.random() * 3);
    return (
        <a
            className={clsx(
                "h-full w-28 sm:w-36 xl:w-48 rounded-md shadow-xl desktop:hover:shadow-2xl transition-all text-[0]",
                inView ? "animate-slidein" : "opacity-0",
                index % 3 === 0
                    ? "desktop:hover:-rotate-1"
                    : "desktop:hover:rotate-1"
            )}
            style={{
                animationDelay: `${animationIndex * 50}ms`,
                animationFillMode: "backwards",
            }}
            href={exampleUrls[index]}
            target="_blank"
            rel="noreferrer"
        >
            <Image
                className="rounded-lg"
                src={`https://storage.googleapis.com/unclutter-screenshots-serverless/articles/current/${encodeURIComponent(
                    exampleUrls[index]
                ).replaceAll("%", "%25")}.webp`}
                width={192}
                height={226}
            />
        </a>
    );
}

export const exampleUrls = [
    "http://www.paulgraham.com/vb.html",
    "https://www.theatlantic.com/magazine/archive/2022/05/social-media-democracy-trust-babel/629369/",
    "https://etiennefd.substack.com/p/reinvent-the-wheel",
    "https://www.theverge.com/2022/11/7/23446262/elon-musk-twitter-paywall-possible",
    "https://paulosman.me/2022/10/17/being-on-a-board/",
    "https://www.economist.com/leaders/2022/11/03/the-world-is-missing-its-lofty-climate-targets-time-for-some-realism",
    "https://sive.rs/kimo",
    "https://www.kalzumeus.com/2012/01/23/salary-negotiation/",
    "https://www.damninteresting.com/to-hell-with-facebook/",
    "https://arstechnica.com/gadgets/2022/11/rip-google-hangouts-googles-last-best-chance-to-compete-with-imessage/",
    "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
    "https://tonsky.me/blog/disenchantment/",
    "https://www.raptitude.com/2016/12/five-things-you-notice-when-you-quit-the-news/",
    "https://www.theguardian.com/lifeandstyle/2014/jul/19/change-your-life-sit-down-and-think",
    // "https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short",
];
