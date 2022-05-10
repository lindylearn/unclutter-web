export default function InstallLinks() {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold text-center">
                Install for your browser:
            </h2>
            <div className="mt-5 flex flex-wrap md:flex-nowrap gap-5 justify-center items-center">
                <a
                    className="flex-shrink-0 w-52 bg-white rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1"
                    href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
                >
                    <img
                        className="object-contain h-16"
                        src="/chrome-badge.png"
                    ></img>
                </a>

                <a
                    className="flex-shrink-0 w-36 bg-[#109ad6] rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1"
                    href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
                >
                    <img
                        className="object-contain h-12 my-1 mx-auto"
                        src="/firefox-badge.png"
                    ></img>
                </a>
            </div>
        </div>
    );
}
