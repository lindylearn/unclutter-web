export default function InstallLinks({ repoStars }) {
    return (
        <div className="flex gap-40 justify-center">
            <div className="">
                <h2 className="text-2xl text-center">
                    Install for your browser:
                </h2>
                <div className="mt-5 flex flex-wrap md:flex-nowrap gap-5 justify-center items-center">
                    <a
                        className="flex gap-3 items-center bg-white p-2.5 rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1 relative"
                        href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="inline-block w-8"
                            src="/icons/chrome.svg"
                        ></img>
                        <span className="font-semibold text-lg ">
                            Add to Chrome
                        </span>
                    </a>

                    <a
                        className="flex gap-3 items-center bg-white p-2.5 rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1 relative"
                        href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className="inline-block w-8"
                            src="/icons/firefox.svg"
                        ></img>
                        <span className="font-semibold text-lg ">
                            Add to Firefox
                        </span>
                    </a>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl  text-center">
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
                            src="/icons/github.svg"
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
