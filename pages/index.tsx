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
        }, 1000);
    }, []);

    return (
        <div className="font-display text-neutral-900">
            <Head
                title="Unclutter - Immersive Reading Mode"
                description="A new kind of reader mode to remove distractions, find popular quotes, outline pages & more."
            />

            <main className="m-5 xl:mt-10 flex flex-col gap-5 md:gap-10 items-center">
                <div className="w-full max-w-4xl flex gap-3">
                    {/* <img className="w-16" src="/icon.svg" /> */}
                    <div className="text-xl md:text-2xl">
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
                        className="video-container relative rounded-xl overflow-hidden bg-white shadow-xl hover:cursor-pointer hover:shadow-2xl"
                        style={{ aspectRatio: "900 / 595" }}
                    >
                        <video
                            className="rounded-xl object-contain"
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
                    <InstallLinks />
                </div>

                <GithubFloatingIcon repoStars={repoStars} />

                <div className="mt-5 md:mx-5 flex flex-col gap-5 md:gap-10 justify-center">
                    <VideoExample
                        boldTitle="Remove distractions"
                        title="like ads, cookie banners & popups."
                        description="Unclutter uses a website's mobile style to remove non-essential page elements. Everything is animated, so you see exactly what's happening."
                        video="media/clips/distractions.webm"
                        poster="media/clips/distractions.png"
                        defaultVisible
                    />
                    <VideoExample
                        boldTitle="Customize font size"
                        title="and color theme across all websites."
                        description="Articles keep their original style, but sizes get normalized to be more readable. Dark mode activates automatically."
                        video="media/clips/theme.webm"
                        whiteReplayLogo
                    />
                    <VideoExample
                        boldTitle="Quickly navigate"
                        title="long reads."
                        description="Unclutter parses article chapters from the page and updates the outline and reading time as you scroll."
                        video="media/clips/outline.webm"
                    />
                    <VideoExample
                        boldTitle="Find memorable quotes"
                        title="discussed on Hacker News."
                        description="55,688+ social comments that mention articles quotes turn up directly within the extension. No more stumbing around to find the important bits."
                        video="media/clips/social.webm"
                    />
                    <VideoExample
                        boldTitle="Save highlights"
                        title="by simply selecting text."
                        description="Your notes are saved locally, or can be synced to Hypothes.is and note-taking apps. Everything works with one click."
                        video="media/clips/annotations.webm"
                        whiteReplayLogo
                    />

                    <div className="flex justify-center">
                        <div className="text-center border-neutral-900 border-4 -mx-2 md:my-5 md:mx-3 py-2 md:py-5 md:px-20 rounded-2xl bg-transparent shadow-lg">
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
