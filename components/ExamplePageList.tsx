import Image from "next/image";

export default function ExamplePageList() {
    // const count = window.matchMedia("max-width: 1000px") ? 12 : 21;
    return (
        <div className="xl:mx-5 flex flex-col items-center">
            <div className="text-lg sm:text-xl">
                For the love of internet articles.
            </div>
            <div className="mt-2 sm:mt-5 xl:mt-7 flex flex-wrap justify-center gap-2 sm:gap-5">
                {Array.from(Array(14).keys()).map((i) => (
                    <ExamplePage key={i} index={i} />
                ))}
            </div>
        </div>
    );
}

export function ExamplePage({ index }) {
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
