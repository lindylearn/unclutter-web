import axios from "axios";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { ExamplePage } from "../components/ExamplePageList";
import { GithubFloatingIcon } from "../components/GithubButton";

export default function Home({ repoStars }) {
    const videoRefs = [useRef(), useRef()];
    useEffect(() => {
        setTimeout(
            () => (videoRefs[0].current as HTMLVideoElement)?.play(),
            1000
        );
        setTimeout(
            () => (videoRefs[1].current as HTMLVideoElement)?.play(),
            3000
        );
    }, []);

    return (
        <div className="font-display text-neutral-800">
            <Head>
                <title>Thank you for installing Unclutter!</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <GithubFloatingIcon repoStars={repoStars} />

            <main className="pt-5 pb-10 max-w-4xl mx-auto flex flex-col gap-10">
                <h1 className="text-3xl font-semibold">
                    Welcome to Unclutter!
                </h1>

                <div className="flex gap-10">
                    <div className="">
                        <h1 className="text-lg">
                            Click the extension icon to activate the reader
                            mode:
                        </h1>
                        <video
                            ref={videoRefs[0]}
                            className="mt-3 w-80"
                            src={`media/tutorial/1.mov`}
                            muted
                        />
                    </div>
                </div>

                <div className="">
                    <h1 className="text-lg">Here are some example articles:</h1>

                    <div className="mt-3 w-[1000px] flex justify-start gap-2 sm:gap-5">
                        <ExamplePage index={0} />
                        <ExamplePage index={7} />
                        <ExamplePage index={3} />
                        <ExamplePage index={5} />
                        <ExamplePage index={6} />
                    </div>
                </div>

                <div className="text-lg flex flex-col gap-1">
                    <h1 className="">
                        See the{" "}
                        <a
                            className="inline-block font-bold cursor-pointer desktop:hover:rotate-1 transition-all"
                            onClick={openExtensionSettings}
                        >
                            extension settings
                        </a>{" "}
                        for more.
                    </h1>
                    <h1>
                        This project is open-source! Please post any bugs you
                        find{" "}
                        <a
                            className="inline-block font-bold desktop:hover:rotate-1 transition-all"
                            href="https://github.com/lindylearn/unclutter/issues"
                            target="_blank"
                            rel="noreferrer"
                        >
                            on GitHub
                        </a>
                        !
                    </h1>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}

function openExtensionSettings() {
    // listened for in extension boot.js
    window.postMessage({ type: "openUnclutterOptionsPage" }, "*");
}

export async function getStaticProps() {
    let repoStars = 73;
    try {
        // GitHub API seems to be rate-limited
        repoStars = (
            await axios.get("https://api.github.com/repos/lindylearn/unclutter")
        ).data?.stargazers_count;
    } catch {}

    return {
        props: { repoStars },
    };
}
