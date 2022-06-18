import Head from "../components/Head";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import ExamplePageList from "../components/ExamplePageList";
import GithubButton, { GithubFloatingIcon } from "../components/GithubButton";
import InstallLinks from "../components/InstallLinks";
import FAQ from "../components/FAQ";
import VideoExample from "../components/VideoExample";
import Releases from "../components/Releases";

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

            <main className="m-3 xl:mt-10 flex flex-col gap-5 md:gap-10 items-center">
                <div className="w-full max-w-4xl flex gap-3">
                    <img
                        className="hidden md:block w-[4.5rem]"
                        src="/icon.svg"
                    />
                    <div className="text-lg md:text-[26px]">
                        <b className="font-bold text-2xl md:text-3xl underline underline-offset-1">
                            Unclutter
                        </b>{" "}
                        is a new kind of reader mode.
                        <br className="hidden md:block" /> Directly in your
                        browser, without boring walls of text.
                    </div>
                </div>

                <div className="w-full max-w-4xl">
                    <div
                        className="video-container relative rounded-lg overflow-hidden bg-white shadow-xl hover:cursor-pointer hover:shadow-2xl"
                        style={{ aspectRatio: "900 / 595" }}
                    >
                        <video
                            className="rounded-lg object-contain"
                            src="media/clips/intro.webm"
                            poster="media/clips/intro.jpg"
                            muted
                            onClick={(e) => {
                                const video = e.target as HTMLVideoElement;
                                video.pause();
                                video.currentTime = 0;
                                video.play();
                            }}
                            ref={mainVideoRef}
                        ></video>
                        <svg
                            className="replay-icon absolute bottom-2 right-2 w-7 text-black drop-shadow-xl opacity-0 invisible"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="w-full max-w-4xl">
                    <InstallLinks repoStars={repoStars} showGithub />
                </div>

                {/* <GithubFloatingIcon repoStars={repoStars} /> */}

                <div className="mt-5 md:mx-5 flex flex-col gap-5 md:gap-10 justify-center">
                    <VideoExample
                        boldTitle="Remove ads,"
                        title="cookie banners & popups."
                        description={
                            <>
                                Unclutter uses a website&apos;s{" "}
                                <InlineLink href="https://github.com/lindylearn/unclutter#how-this-works">
                                    responsive CSS
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
                                Unlike other reader modes, Unclutter keeps the{" "}
                                <InlineLink href="https://github.com/lindylearn/unclutter/blob/main/docs/comparison.md">
                                    original style
                                </InlineLink>{" "}
                                of websites intact, while making them more
                                readable.
                            </>
                        }
                        video="media/clips/theme.webm"
                        whiteReplayLogo
                    />
                    <VideoExample
                        boldTitle="Outline & navigate"
                        title="long reads."
                        description={
                            <>
                                Unclutter parses article{" "}
                                <InlineLink href="https://github.com/lindylearn/unclutter/blob/main/docs/outline.md">
                                    chapters
                                </InlineLink>{" "}
                                from the page and updates the outline and
                                reading time as you scroll.
                            </>
                        }
                        video="media/clips/outline.webm"
                    />
                    <VideoExample
                        boldTitle="Find quotes"
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
                                    comments
                                </InlineLink>{" "}
                                that mention article quotes turn up directly
                                within the extension. No more stumbing around to
                                find the important bits.
                            </>
                        }
                        video="media/clips/social.webm"
                    />
                    <VideoExample
                        boldTitle="Save highlights"
                        title="by simply selecting them."
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
                                . Everything works with one click.
                            </>
                        }
                        video="media/clips/annotations.webm"
                        whiteReplayLogo
                    />

                    <div className="flex justify-center">
                        <div className="text-center border-neutral-900 border-4 -mx-2 md:my-5 py-2 md:py-5 md:px-20 rounded-2xl bg-transparent shadow-xl">
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

export function InlineLink({ href, children }) {
    return (
        <a
            href={href}
            className="inline-block underline underline-offset-1 decoration-2 hover:rotate-1 transition-transform"
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
