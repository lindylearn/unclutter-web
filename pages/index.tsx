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
                title="Unclutter - Immersive Reading Mode"
                description="A new kind of reader mode to remove distractions, find popular quotes, outline pages & more."
            />

            <main className="m-3 md:mt-10 flex flex-col gap-5 md:gap-10 items-center max-w-full overflow-hidden">
                <div className="w-full max-w-4xl flex gap-3">
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

                <div className="mt-5 md:mx-5 flex flex-col gap-7 md:gap-10 justify-center">
                    <VideoExample
                        boldTitle="Remove ads,"
                        title="cookie banners & popups."
                        description={
                            <>
                                Unclutter analyses a website&apos;s{" "}
                                <InlineLink href="https://github.com/lindylearn/unclutter#how-this-works">
                                    CSS
                                </InlineLink>{" "}
                                to remove non-essential page elements. All
                                changes are animated.
                            </>
                        }
                        video="media/clips/distractions.webm"
                        poster="media/clips/distractions.png"
                        defaultVisible
                    />
                    <VideoExample
                        boldTitle="Customize text"
                        title="across of all websites."
                        description={
                            <>
                                Yet unlike with other reader modes, websites
                                keep their{" "}
                                <InlineLink href="https://github.com/lindylearn/unclutter/blob/main/docs/comparison.md">
                                    original style
                                </InlineLink>
                                .
                            </>
                        }
                        video="media/clips/theme.webm"
                        whiteReplayLogo
                    />
                    <VideoExample
                        boldTitle="Navigate"
                        title="long reads."
                        description={
                            <>
                                Unclutter generates{" "}
                                <InlineLink href="https://github.com/lindylearn/unclutter/blob/main/docs/outline.md">
                                    chapters
                                </InlineLink>{" "}
                                from the page and updates them as you scroll.
                            </>
                        }
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
                        description={
                            <>
                                85,643+{" "}
                                <InlineLink href="https://github.com/lindylearn/unclutter/blob/main/docs/social-highlights.md">
                                    public comments
                                </InlineLink>{" "}
                                that mention article quotes turn up directly
                                within the extension.
                            </>
                        }
                        video="media/clips/social.webm"
                    />
                    <VideoExample
                        boldTitle="Save highlights"
                        title="by selecting them."
                        description={
                            <>
                                Your notes are saved locally or can be synced to{" "}
                                <InlineLink href="https://web.hypothes.is">
                                    Hypothes.is
                                </InlineLink>{" "}
                                and{" "}
                                <InlineLink href="https://web.hypothes.is/tools-plug-ins-and-integrations/#:~:text=For%20note%2Dtaking%20apps">
                                    note-taking apps
                                </InlineLink>
                                .
                            </>
                        }
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
