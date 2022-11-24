import axios from "axios";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ExamplePageList from "../components/ExamplePageList";
import Head from "../components/Head";
import InstallLinks, {
    GithubButton,
    InstallButton,
} from "../components/InstallLinks";
import ReviewsSection from "../components/Reviews";
import VideoExample from "../components/VideoExample";

export default function Home({ repoStars, releases }) {
    const mainVideoRef = useRef();
    const [showFirstInstallLinks, setShowFirstInstallLinks] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            const video = mainVideoRef.current as HTMLVideoElement;
            video?.play();
        }, 2000);

        setTimeout(() => {
            setShowFirstInstallLinks(true);
        }, 6000);
    }, []);

    // return <></>;

    return (
        <div className="font-display text-stone-900">
            <Head
                title="Unclutter — Reader Mode for Chrome & Firefox"
                description="Unclutter makes articles readable and customizable. Unclutter articles, block ads and popups, save highlights, organize your read-it-later list & more. Instantly in your browser, and free."
            />

            <main className="m-3 mt-5 flex flex-col gap-5 md:gap-10 items-center">
                <header className="w-full md:max-w-5xl flex gap-3 md:gap-5 items-center">
                    <img
                        className="w-10 md:w-16 drop-shadow-sm"
                        src="/icon.svg"
                    />
                    <h1 className="hidden md:block text-lg md:text-[26px] leading-normal">
                        <span className="bg-white px-2.5 py-0.5 rounded-xl">
                            Unclutter
                        </span>{" "}
                        articles, right in your browser.
                    </h1>
                    <h1 className="block md:hidden text-xl leading-normal">
                        Unclutter articles instantly.
                    </h1>
                </header>

                <div className="w-full md:max-w-5xl overflow-hidden shadow-xl rounded md:rounded-lg md:-mt-5">
                    <div
                        className="intro-video video-container relative overflow-hidden animate-slidein"
                        style={{
                            aspectRatio: "2412 / 1616",
                            animationFillMode: "both",
                            margin: "-1px -1px -2px -1px",
                        }}
                    >
                        <video
                            className="md:rounded-lg object-contain"
                            poster="media/clips/intro.jpg"
                            muted
                            ref={mainVideoRef}
                        >
                            <source
                                src="media/clips/intro.webm"
                                type="video/webm"
                            />
                            <source
                                src="media/clips/intro.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>

                <div className="max-w-5xl w-full md:-mt-3 hidden md:block">
                    <InstallLinks
                        repoStars={repoStars}
                        initial
                        inViewOverride={showFirstInstallLinks}
                    />
                </div>
                <div className="block md:hidden"></div>

                <div className="mt-3 md:mt-10 md:mx-5 flex flex-col gap-7 md:gap-10 justify-center max-w-full md:max-w-7xl">
                    <VideoExample
                        index={0}
                        boldTitle="Focus"
                        title="on reading"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                className="h-8"
                            >
                                <path d="M289.7 .0006C308.8 .0006 322.6 18.26 317.4 36.61L263.8 224H349.1C368.4 224 384 239.6 384 258.9C384 269.2 379.5 278.9 371.7 285.6L112.9 505.2C107.7 509.6 101.1 512 94.27 512C75.18 512 61.4 493.7 66.64 475.4L120.2 288H33.74C15.1 288 0 272.9 0 254.3C0 244.4 4.315 235 11.81 228.6L271.1 6.893C276.3 2.445 282.9 0 289.7 0V.0006zM253.6 84.99L72.36 240H152C159.5 240 166.6 243.5 171.2 249.5C175.7 255.6 177.1 263.4 175.1 270.6L130.3 427.5L313.5 272H232C224.5 272 217.4 268.5 212.8 262.5C208.3 256.4 206.9 248.6 208.9 241.4L253.6 84.99z" />
                            </svg>
                        }
                        description={
                            <>
                                <p>
                                    Unlike all other reader modes, Unclutter
                                    modifies a website&apos;s{" "}
                                    <InlineLink href="https://github.com/lindylearn/unclutter/blob/main/DEVELOPMENT.md#how-unclutter-works">
                                        CSS styles
                                    </InlineLink>{" "}
                                    to remove ads and popups.
                                </p>
                                <p>
                                    So The Guardian still looks like The
                                    Guardian, and The Atlantic like The
                                    Atlantic.
                                </p>
                            </>
                        }
                        video="media/clips/distractions.webm"
                        poster="media/clips/distractions.png"
                        defaultVisible
                    />
                    <VideoExample
                        boldTitle="Customize"
                        title="how you read"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                className="h-7"
                            >
                                <path d="M198.4 47.47c-7.094-18.62-37.78-18.62-44.88 0l-152 400c-4.703 12.41 1.516 26.25 13.91 30.97c12.44 4.75 26.28-1.531 30.97-13.91L83.12 368h185.8l36.68 96.53C309.2 474.1 318.3 480 328 480c2.844 0 5.719-.5 8.531-1.562c12.39-4.719 18.61-18.56 13.91-30.97L198.4 47.47zM101.4 320L176 123.6L250.6 320H101.4zM616 160c-13.25 0-24 10.75-24 24v4.889c-21.99-17.79-49.58-28.88-80-28.88c-70.58 0-128 57.41-128 128l.0007 63.93c0 70.59 57.42 128.1 127.1 128.1c30.42 0 58.01-11.11 79.1-28.9V456c0 13.25 10.75 24 24 24S640 469.3 640 456v-272C640 170.8 629.3 160 616 160zM592 352c0 44.13-35.89 80-80 80s-80-35.88-80-80V288c0-44.13 35.89-80 80-80s80 35.88 80 80V352z" />
                            </svg>
                        }
                        description={
                            <>
                                <p>
                                    Want to make the text on that one website
                                    larger? Or enable dark mode everywhere?
                                </p>

                                <p>
                                    Your favorite settings are one click away.
                                    No need to open a separate website or to
                                    find your phone.
                                </p>
                            </>
                        }
                        video="media/clips/theme.webm"
                        whiteReplayLogo
                    />
                    <VideoExample
                        boldTitle="Save for later"
                        title="for later"
                        icon={<></>}
                        description={
                            <>
                                <p>
                                    Articles you open automatically get saved in
                                    your library.
                                </p>
                                <p>
                                    Add them to your reading queue or find
                                    information when you need it. There&apos;s
                                    also a nice activity graph!
                                </p>
                            </>
                        }
                        video="media/clips/library.webm"
                        whiteReplayLogo
                    />
                    <VideoExample
                        boldTitle="Highlight"
                        title="by selecting them"
                        icon={<></>}
                        description={
                            <>
                                <p>
                                    Saving quotes you want to remember
                                    shouldn&apos;t take elaborate
                                    synchronization setups.
                                </p>
                                <p>
                                    Just select the text you want to save, then
                                    search across it later. Directly in your
                                    browser.
                                </p>
                            </>
                        }
                        video="media/clips/annotations.webm"
                        whiteReplayLogo
                    />
                    <VideoExample
                        boldTitle="Find comments"
                        title="follow feeds, browse chapters, automatically activate, ..."
                        icon={<></>}
                        description={
                            <>
                                <p>What else should I say?</p>
                                <p>
                                    Just try out the extension to find all the
                                    features. It&apos;s free and open-source!
                                </p>
                            </>
                        }
                        video="media/clips/social.webm"
                    />

                    <div className="" />
                    <ReviewsSection />
                    <div className="" />
                    <SecondInstallSection repoStars={repoStars} />
                    <ThirdInstallSection repoStars={repoStars} />
                    {/* <div className="hidden md:block" />
                    <ContributeSection repoStars={repoStars} /> */}
                    <div className="" />
                </div>

                <ExamplePageList />
            </main>
        </div>
    );
}

function SecondInstallSection({ repoStars }) {
    const { ref, inView } = useInView({
        threshold: 1.0,
        rootMargin: "0px 0px -20% 0px",
        triggerOnce: true,
    });

    return (
        <div
            className={clsx(
                "flex flex-col md:items-center gap-3 md:gap-5",
                inView ? "animate-slidein" : "opacity-0"
            )}
            ref={ref}
        >
            <h2 className="text-lg md:text-[26px]">
                Try it out in your <span className="md:hidden">desktop </span>
                browser:
            </h2>

            <InstallLinks repoStars={repoStars} showGithub={false} />
        </div>
    );
}

function ThirdInstallSection({ repoStars }) {
    const { ref, inView } = useInView({
        threshold: 1.0,
        rootMargin: "0px 0px -20% 0px",
        triggerOnce: true,
    });

    return (
        <div
            className={clsx(
                "flex flex-col md:items-center gap-3 md:gap-5",
                inView ? "animate-slidein" : "opacity-0"
            )}
            ref={ref}
        >
            <h2 className="text-lg md:text-[26px]">Support the project:</h2>

            <InstallLinks
                repoStars={repoStars}
                showStores={false}
                showGithub
                showProductHunt
            />
        </div>
    );
}

function ContributeSection({ repoStars }) {
    const { ref, inView } = useInView({
        threshold: 1.0,
        rootMargin: "0px 0px -20% 0px",
        triggerOnce: true,
    });

    return (
        <div
            className={clsx(
                "flex flex-col items-center gap-3 md:gap-5",
                inView ? "animate-slidein" : "opacity-0"
            )}
            ref={ref}
        >
            <h2 className="text-lg md:text-[26px]">
                <b className="font-bold text-2xl md:text-3xl">Contribute</b> to
                the open-source project
            </h2>

            <div className="flex gap-3 md:gap-7 flex-wrap">
                <GithubButton
                    repoStars={repoStars}
                    inView={inView}
                    animationIndex={0}
                />
                <InstallButton
                    title="Vote on Roadmap"
                    href="https://unclutter.canny.io/"
                    inView={inView}
                    animationIndex={1}
                />
                <InstallButton
                    title="Open docs"
                    href="https://github.com/lindylearn/unclutter/tree/main/docs"
                    inView={inView}
                    animationIndex={2}
                />
            </div>
        </div>
    );
}

export function InlineLink({ href, children, className = "" }) {
    return (
        <a
            href={href}
            className={
                "underline underline-offset-1 decoration-2 hover:rotate-1 transition-transform " +
                className
            }
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
}

export async function getStaticProps() {
    // GitHub API seems to be rate-limited
    let releases = [];
    let repoStars = 473;
    try {
        // releases = (
        //     await axios.get(
        //         "https://api.github.com/repos/lindylearn/unclutter/releases"
        //     )
        // ).data;
        // releases[releases.length - 1].published_at = "2022-03-18T10:25:29Z";

        repoStars = (
            await axios.get("https://api.github.com/repos/lindylearn/unclutter")
        ).data?.stargazers_count;
    } catch {}

    return {
        props: { repoStars, releases },
    };
}
