import axios from "axios";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ExamplePage } from "../components/ExamplePageList";

type BrowserType = "chromium" | "firefox";
export function getBrowserType(): BrowserType {
    // @ts-ignore
    if (typeof browser !== "undefined") {
        return "firefox";
    } else {
        return "chromium";
    }
}

export default function Home({ repoStars }) {
    const videoRefs = [useRef(), useRef()];
    const [showExamplePages, setShowExamplePages] = useState(false);

    useEffect(() => {
        setTimeout(
            () => (videoRefs[0].current as HTMLVideoElement)?.play(),
            1000
        );
        setTimeout(
            () => (videoRefs[1].current as HTMLVideoElement)?.play(),
            6500
        );
        setTimeout(() => setShowExamplePages(true), 9500);
    }, []);

    const unclutterLibraryLink =
        getBrowserType() === "firefox"
            ? "https://addons.mozilla.org/en-GB/firefox/addon/unclutter-library"
            : "https://chrome.google.com/webstore/detail/bghgkooimeljolohebojceacblokenjn";

    return (
        <div className="font-display text-stone-900">
            <Head>
                <title>Welcome to Unclutter!</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <GithubFloatingIcon repoStars={repoStars} /> */}

            <main className="pt-5 pb-10 max-w-4xl mx-auto flex flex-col gap-10">
                <h1 className="text-3xl font-semibold">
                    Welcome to Unclutter!
                </h1>

                <div className="grid grid-cols-2 gap-10">
                    <div className="">
                        <div className="text-lg">
                            1. Click the extension icon to unclutter articles
                        </div>
                        <video
                            ref={videoRefs[0]}
                            className="mt-3 w-80"
                            src={`media/tutorial/1.mov`}
                            muted
                        />
                    </div>
                    <div
                        className="animate-slidein"
                        style={{
                            animationDelay: "5s",
                            animationFillMode: "both",
                        }}
                    >
                        <div className="text-lg">
                            2. Press TAB to open your library
                        </div>
                        <video
                            ref={videoRefs[1]}
                            className="mt-3 w-full"
                            src={`media/tutorial/2.mov`}
                            muted
                        />
                    </div>
                </div>

                <div className="">
                    <div
                        className="text-lg animate-slidein"
                        style={{
                            animationDelay: "9.5s",
                            animationFillMode: "both",
                        }}
                    >
                        3. Here are some examples to try:
                    </div>

                    <div className="mt-3 xl:w-[1000px] flex justify-start gap-2 sm:gap-5">
                        <ExamplePage index={0} inView={showExamplePages} />
                        <ExamplePage index={7} inView={showExamplePages} />
                        <ExamplePage index={3} inView={showExamplePages} />
                        <ExamplePage index={5} inView={showExamplePages} />
                        <ExamplePage index={6} inView={showExamplePages} />
                    </div>
                </div>

                <div
                    className="text-lg flex flex-col gap-1 animate-slidein"
                    style={{
                        animationDelay: "12s",
                        animationFillMode: "both",
                    }}
                >
                    <div className="">
                        4. See the{" "}
                        <a
                            className="inline-block font-bold cursor-pointer desktop:hover:rotate-1 transition-all"
                            onClick={openExtensionSettings}
                        >
                            extension settings
                        </a>{" "}
                        for more. Install the{" "}
                        <a
                            className="inline-block font-bold cursor-pointer desktop:hover:rotate-1 transition-all"
                            href={unclutterLibraryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Unclutter New Tab
                        </a>{" "}
                        to access your reading queue from your new tab page.
                    </div>
                </div>

                <div
                    className="text-lg flex flex-col gap-1 animate-slidein"
                    style={{
                        animationDelay: "14s",
                        animationFillMode: "both",
                    }}
                >
                    <div>
                        5. This project is open source! Add your ideas to our{" "}
                        <a
                            href="https://unclutter.canny.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-bold cursor-pointer desktop:hover:-rotate-1 transition-all"
                        >
                            open roadmap
                        </a>{" "}
                        or contribute{" "}
                        <a
                            href="https://github.com/lindylearn/unclutter/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-bold cursor-pointer desktop:hover:rotate-1 transition-all"
                        >
                            on GitHub
                        </a>{" "}
                        to improve reading on the web for everyone.
                    </div>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}

function openExtensionSettings() {
    // listened for in extension boot.js
    window.postMessage({ event: "openOptionsPage" }, "*");
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
