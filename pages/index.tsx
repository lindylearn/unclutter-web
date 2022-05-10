import Head from "../components/Head";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import VideoSection from "../components/VideoSection";
import ExamplePageList from "../components/ExamplePageList";
import GithubSection from "../components/GithubSection";
import InstallLinks from "../components/InstallLinks";

export default function Home() {
    return (
        <div className="font-display text-neutral-900">
            <Head
                title="Unclutter browser extension"
                description="Automatically remove distractions from web articles. With dark mode & page outlines."
            />

            <header className="flex xl:hidden gap-2 items-start p-2 sm:p-5">
                <img className="w-16" src="/icon.svg" />
                <div className="">
                    <h1 className="text-3xl font-bold">
                        <span className="">Unclutter</span>
                        <span className="font-semibold">
                            {" "}
                            <span className="hidden sm:inline">
                                browser extension
                            </span>
                        </span>
                    </h1>
                    <h2 className="text-lg sm:text-xl">
                        A new approach to reader mode
                    </h2>
                </div>
            </header>

            <VideoSection />

            <InstallLinks />

            <GithubSection />

            <ExamplePageList />

            {/* <FAQ /> */}

            <footer className="mt-3 p-3 flex gap-1 justify-center sm:text-lg">
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
            </footer>
        </div>
    );
}
