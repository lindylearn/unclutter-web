export default function InstallLinks({ repoStars }) {
    return (
        <div className="flex gap-40 justify-center">
            <div className="">
                <h2 className="text-2xl font-semibold text-center">
                    Install for your browser:
                </h2>
                <div className="mt-5 flex flex-wrap md:flex-nowrap gap-5 justify-center items-center">
                    <a
                        className="flex-shrink-0 w-52 bg-white rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1"
                        href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="object-contain h-16"
                            src="/chrome-badge.png"
                        ></img>
                    </a>

                    <a
                        className="flex-shrink-0 w-36 bg-[#109ad6] rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1"
                        href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="object-contain h-12 my-1 mx-auto"
                            src="/firefox-badge.png"
                        ></img>
                    </a>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl font-semibold text-center">
                    Follow the development:
                </h2>
                <div className="mt-5 flex flex-wrap md:flex-nowrap gap-5 justify-center items-center">
                    <a
                        className="flex gap-3 items-center bg-white p-2.5 rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1 relative"
                        href="https://github.com/lindylearn/unclutter"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="inline-block w-8"
                            src="/github.svg"
                        ></img>
                        <span className="font-semibold text-lg ">
                            Star on GitHub
                        </span>
                        <div className="absolute -right-11">
                            <div className="bg-white px-2.5 py-1 rounded shadow text-lg">
                                {repoStars}
                            </div>
                            <div className="left-arrow"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
