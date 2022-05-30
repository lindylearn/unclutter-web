import Head from "../components/Head";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import VideoSection from "../components/VideoSection";
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
                title="Unclutter browser extension"
                description="Automatically remove distractions from web articles. With dark mode & page outlines."
            />

            <header className="flex gap-3 items-center p-2 fixed z-50">
                <img className="w-14" src="/icon.svg" />
                <div className="">
                    <h1 className="text-3xl font-bold">Unclutter</h1>
                </div>
            </header>

            <main className="flex flex-col gap-10 mb-10 items-center">
                <div className="mt-5 w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl hover:cursor-pointer hover:shadow-2xl">
                    <video
                        className={"rounded-2xl"}
                        src={`media/clips/clip_0.webm`}
                        autoPlay={true}
                        muted
                    ></video>
                    {/* <img className="rounded-2xl" src="media/clips/thumbnail.webp" /> */}
                </div>

                {/* <VideoExample title="The best way to read articles in your browser" /> */}
                <div className="text-2xl max-w-4xl">
                    <b className="font-bold text-3xl">Unclutter</b> is a new
                    kind of reader mode to customize web articles. Directly in
                    your browser, without boring walls of text.
                </div>

                <InstallLinks />

                <div className="mt-5 w-5/6 mx-auto flex flex-col gap-10">
                    <VideoExample
                        boldTitle="Remove distractions"
                        title="like ads, cookie banners & popups."
                        video={`media/clips/clip_1.webm`}
                    />
                    <VideoExample
                        boldTitle="Improve readability"
                        title="by using your preferred font size and color theme across all websites."
                        video={`media/clips/clip_2.webm`}
                    />
                    <VideoExample
                        boldTitle="Quickly navigate"
                        title="between chapters and see how much reading time is left."
                        video={`media/clips/clip_3.webm`}
                    />
                    <VideoExample
                        boldTitle="Find popular quotes"
                        title=" discussed on Hacker News and Hypothes.is."
                        video={`media/clips/clip_4.webm`}
                    />
                    <VideoExample
                        boldTitle="Save highlights"
                        title="and write notes by simply selecting any text."
                        video={`media/clips/clip_4.webm`}
                    />
                </div>

                <div className="text-center border-neutral-800 border-4 py-5 px-20 rounded-2xl bg-transparent shadow">
                    <div className="text-2xl mb-3">
                        Try it out for your browser:
                    </div>
                    <InstallLinks />
                </div>

                <div className="mt-5 w-5/6 mx-auto flex flex-col gap-10">
                    <Releases repoStars={repoStars} releases={releases} />
                </div>

                <ExamplePageList />
                <FAQ />
            </main>

            {/* <footer className="mt-3 p-3 flex gap-1 justify-center sm:text-lg">
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
            </footer> */}
        </div>
    );
}

export async function getStaticProps() {
    const releases = (
        await axios.get(
            "https://api.github.com/repos/lindylearn/unclutter/releases"
        )
    ).data;
    releases[releases.length - 1].published_at = "2022-03-18T10:25:29Z";

    const repoStars = (
        await axios.get("https://api.github.com/repos/lindylearn/unclutter")
    ).data?.stargazers_count;

    return {
        props: { repoStars, releases },
    };
}
