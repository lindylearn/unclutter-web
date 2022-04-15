import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ExamplePage } from ".";

export default function Home() {
    const videoRefs = [useRef(), useRef()];
    useEffect(() => {
        setTimeout(() => videoRefs[0].current?.play(), 1000);
        setTimeout(() => videoRefs[1].current?.play(), 3000);
    }, []);

    return (
        <div className="font-display text-neutral-800">
            <Head>
                <title>Thank you for installing Unclutter!</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="pt-5 pb-10 max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold">
                    Thank you for installing Unclutter!
                </h1>
                {/* <h2>Here's how to activate the extension.</h2> */}

                <div className="mt-10 relative">
                    <div className="absolute -left-5 text-lg">1.</div>
                    <h1 className="text-lg">To activate the extension:</h1>

                    <div className="mt-3 flex gap-10">
                        <div className="">
                            <video
                                ref={videoRefs[0]}
                                className="w-80"
                                src={`media/tutorial/1.mov`}
                                muted
                            />
                            <h2 className="pt-2">
                                Either click the extension icon
                            </h2>
                        </div>

                        <div>
                            <video
                                ref={videoRefs[1]}
                                className="w-80"
                                src={`media/tutorial/2.mov`}
                                muted
                            />
                            <h2 className="pt-2">
                                Or on this button that appears on most articles
                            </h2>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-7 relative">
                    <div className="absolute -left-5 text-lg">2.</div>
                    <h1 className="text-lg">
                        Customize via the theme settings
                    </h1>
                    <video
                        className={"w-80"}
                        src={`media/tutorial/3.mov`}
                        autoPlay={true}
                        muted
                    />
                </div> */}

                {/* <div className="mt-7 relative">
                    <div className="absolute -left-5 text-lg">2.</div>
                    <h1 className="text-lg">
                        To automatically enable the extension:
                    </h1>
                    <video
                        className={"mt-3 w-80"}
                        src={`media/tutorial/4.mov`}
                        autoPlay={true}
                        muted
                    />
                </div> */}

                <div className="mt-10 relative">
                    <div className="absolute -left-5 text-lg">2.</div>
                    <h1 className="text-lg">
                        Here are some examples to try it on:
                    </h1>

                    <div className="mt-3 flex flex-wrap justify-start gap-2 sm:gap-5">
                        <ExamplePage index={0} />
                        <ExamplePage index={7} />
                        <ExamplePage index={3} />
                        <ExamplePage index={5} />
                    </div>
                </div>

                <div className="mt-10 relative">
                    <div className="absolute -left-5 text-lg">3.</div>
                    <h1 className="text-lg">
                        See the extension settings for more. <br />
                        Please report any bugs you find{" "}
                        <a
                            className="inline-block font-semibold hover:rotate-1 transition-all"
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
