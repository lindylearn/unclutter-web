import axios from "axios";
import { useEffect, useRef } from "react";
import ExamplePageList from "../components/ExamplePageList";
import Head from "../components/Head";
import InstallLinks from "../components/InstallLinks";
import Releases from "../components/Releases";
import VideoExample from "../components/VideoExample";

export default function Home({ repoStars, releases }) {
    const mainVideoRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            const video = mainVideoRef.current as HTMLVideoElement;
            video?.play();
        }, 1200);
    }, []);

    return (
        <div className="font-display text-neutral-900">
            <Head
                title="Unclutter — Modern Reader Mode"
                description="Unclutter is a modern reader mode and article library for your browser."
            />

            <main className="m-3 md:mt-7 flex flex-col gap-5 md:gap-7 items-center max-w-full overflow-hidden">
                <div className="w-full max-w-5xl flex gap-3">
                    <img
                        className="hidden md:block w-[4.5rem]"
                        src="/icon.svg"
                    />
                    <div className="text-lg md:text-[26px]">
                        <b className="font-bold text-2xl md:text-3xl underline-offset-1">
                            Unclutter
                        </b>{" "}
                        is a new kind of reader mode.
                        <br className="hidden md:block" /> Directly in your
                        browser, without boring walls of text.
                    </div>
                </div>

                <div className="w-full max-w-5xl">
                    <div
                        className="intro-video video-container relative rounded-lg overflow-hidden bg-white shadow-xl"
                        style={{ aspectRatio: "900 / 595" }}
                    >
                        <video
                            className="rounded-lg object-contain"
                            src="media/clips/intro.webm"
                            poster="media/clips/intro.jpg"
                            muted
                            ref={mainVideoRef}
                        ></video>
                    </div>
                </div>

                <div className="w-full max-w-5xl">
                    <InstallLinks repoStars={repoStars} showGithub />
                </div>

                {/* <GithubFloatingIcon repoStars={repoStars} /> */}

                <div className="mt-20 md:mx-5 flex flex-col gap-7 md:gap-10 justify-center">
                    <VideoExample
                        boldTitle="Remove ads,"
                        title="cookie banners & popups."
                        video="media/clips/distractions.webm"
                        poster="media/clips/distractions.png"
                        defaultVisible
                    />
                    <VideoExample
                        boldTitle="Customize text"
                        title="across of all websites."
                        video="media/clips/theme.webm"
                        whiteReplayLogo
                    />
                    <VideoExample
                        boldTitle="Navigate"
                        title="long reads."
                        video="media/clips/outline.webm"
                    />
                    <VideoExample
                        boldTitle="See quotes"
                        title={
                            <>
                                discussed on{" "}
                                <InlineLink href="https://news.ycombinator.com">
                                    Hacker News
                                </InlineLink>
                                .
                            </>
                        }
                        video="media/clips/social.webm"
                    />
                    <VideoExample
                        boldTitle="Save highlights"
                        title="by selecting them."
                        video="media/clips/annotations.webm"
                        whiteReplayLogo
                    />

                    <div className="flex justify-center">
                        <div
                            className="text-center border-neutral-900 border-4 
                         md:my-5 py-2 md:py-5 md:px-20 rounded-2xl bg-transparent shadow-xl"
                        >
                            <div className="text-xl md:text-[26px] font-bold mb-3">
                                Try Unclutter in your browser:
                            </div>
                            <InstallLinks />
                        </div>
                    </div>

                    <Releases repoStars={repoStars} releases={releases} />
                </div>

                <ExamplePageList />
            </main>
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
    let releases = [];
    let repoStars = 73;
    try {
        // GitHub API seems to be rate-limited
        releases = (
            await axios.get(
                "https://api.github.com/repos/lindylearn/unclutter/releases"
            )
        ).data;
        releases[releases.length - 1].published_at = "2022-03-18T10:25:29Z";

        repoStars = (
            await axios.get("https://api.github.com/repos/lindylearn/unclutter")
        ).data?.stargazers_count;
    } catch {}

    return {
        props: { repoStars, releases },
    };
}
