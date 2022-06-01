export default function InstallLinks({}) {
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-7 justify-center font-semibold md:text-lg">
            <a
                className="flex gap-2 md:gap-3 items-center bg-white p-2 md:p-2.5 rounded-lg shadow transition-all desktop:hover:shadow-lg desktop:hover:rotate-1 relative"
                href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="inline-block w-7 md:w-8"
                    src="/icons/chrome.svg"
                ></img>
                <span className="">Add to Chrome</span>
            </a>

            <a
                className="flex gap-2 md:gap-3 items-center bg-white p-2.5 rounded-lg shadow transition-all desktop:hover:shadow-lg desktop:hover:rotate-1 relative"
                href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="inline-block w-7 md:w-8"
                    src="/icons/firefox.svg"
                ></img>
                <span className="">Add to Firefox</span>
            </a>

            <a
                className="flex flex-col gap-0.5 items-center pt-2"
                href="https://chrome.google.com/webstore/detail/unclutter-immersive-readi/ibckhpijbdmdobhhhodkceffdngnglpk"
                target="_blank"
                rel="noreferrer"
            >
                <div className="flex gap-1">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
                <span className="">8 reviews</span>
            </a>
        </div>
    );
}

function StarIcon() {
    return (
        <svg className="w-5" viewBox="0 0 576 512">
            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
        </svg>
    );
}
