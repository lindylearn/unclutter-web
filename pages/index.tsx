import Head from "../components/Head";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import ExamplePageList from "../components/ExamplePageList";
import GithubButton from "../components/GithubButton";
import InstallLinks from "../components/InstallLinks";
import FAQ from "../components/FAQ";
import VideoExample from "../components/VideoExample";
import Releases from "../components/Releases";

export default function Home({ repoStars, releases }) {
    return (
        <div className="font-display text-neutral-900">
            <Head
                title="Unclutter - Immersive Reading Mode"
                description="A new kind of reader mode to remove distractions, find popular quotes, outline pages & more."
            />

            {/* <header className="flex gap-3 items-center p-2 fixed z-50">
                <img className="w-14" src="/icon.svg" />
                <div className="">
                    <h1 className="text-3xl font-bold">Unclutter</h1>
                </div>
            </header> */}

            <main className="m-3 flex flex-col gap-5 md:gap-10 items-center">
                <div className="max-w-4xl rounded-xl overflow-hidden shadow-xl hover:cursor-pointer hover:shadow-2xl">
                    <video
                        className="rounded-xl object-contain"
                        src="media/clips/intro.webm"
                        poster="media/clips/intro.jpg"
                        autoPlay={true}
                        muted
                        onClick={(e) => {
                            const video = e.target as HTMLVideoElement;
                            video.pause();
                            video.currentTime = 0;
                            video.play();
                        }}
                        style={{ aspectRatio: "900 / 595" }}
                    ></video>
                </div>

                {/* <VideoExample title="The best way to read articles in your browser" /> */}
                <div className="text-xl md:text-2xl max-w-4xl">
                    <b className="font-bold text-2xl md:text-3xl underline underline-offset-1">
                        Unclutter
                    </b>{" "}
                    is a new kind of reader mode.
                    <br className="hidden md:block" /> Directly in your browser,
                    without boring walls of text.
                </div>

                <InstallLinks />

                <div className="md:mx-5 flex flex-col gap-5 md:gap-10 justify-center">
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
                    />
                </div>

                <div className="text-center border-neutral-900 border-4 -mx-2 md:my-5 md:mx-3 py-2 md:py-5 md:px-20 rounded-2xl bg-transparent shadow-lg">
                    <div className="text-xl md:text-[26px] font-bold mb-3">
                        Try Unclutter in your browser:
                    </div>
                    <InstallLinks />
                </div>

                <div className="md:mx-5 lg:mx-auto">
                    <Releases repoStars={repoStars} releases={releases} />
                </div>

                <ExamplePageList />
                {/* <FAQ /> */}
            </main>

            {/* <footer className="mt-3 p-3 flex gap-1 justify-center sm:text-lg">
                <div>
                    From Amsterdam to the world. Only possible with your{" "}
                    <a
                        className="inline-block font-semibold desktop:hover:rotate-1"
                        href="https://twitter.com/lindylearn"
                        target="_blank"
                        rel="noreferrer"
                    >
                        support
                    </a>
                    !
                </div>
            </footer> */}
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
