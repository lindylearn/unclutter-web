import { StarIcon } from "./InstallLinks";

export default function ReviewsSection() {
    return (
        <div className="grid grid-cols-3 gap-5">
            <Review
                text={
                    <>
                        <b className="font-display text-bold">
                            Honestly, [Unclutter] has to be one of the coolest
                            add ons I have.
                        </b>{" "}
                        At least in how refreshing it feels to suddenly
                        unclutter everything in a full second. Not sure what
                        else to say, insanely satisfying.
                    </>
                }
                href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/reviews/1843663/"
            />
            <Review
                text={
                    <>
                        <b className="font-display text-bold">
                            This is a MUST have extension if you're an avid
                            reader.
                        </b>{" "}
                        Literally one of the best things that has come out this
                        year(or this decade). Thank you dev.
                    </>
                }
                href="https://chrome.google.com/webstore/detail/unclutter-new-tab/bghgkooimeljolohebojceacblokenjn?hl=en-GB&authuser=0"
            />
            <Review
                text={
                    <>
                        [...] Kudos to Clearly, JustRead, and a few other good
                        [reader modes], but{" "}
                        <b className="font-display text-bold">
                            I have only been using UNCLUTTER for an hour and
                            already think it's the one I am sticking with.
                        </b>{" "}
                        [...]
                    </>
                }
                href="https://chrome.google.com/webstore/detail/unclutter-%E2%80%94-modern-reader/ibckhpijbdmdobhhhodkceffdngnglpk?hl=en-GB&authuser=0"
            />
        </div>
    );
}

function Review({ text, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-3 justify-between"
        >
            <div className="font-text text-base md:text-xl max-w-xl leading-snug">
                "{text}"
            </div>
            <div className="flex gap-1">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
        </a>
    );
}
