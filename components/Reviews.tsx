import clsx from "clsx";
import { useInView } from "react-intersection-observer";
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
                index={0}
            />
            <Review
                text={
                    <>
                        <b className="font-display text-bold">
                            This is a MUST have extension if you&apos;re an avid
                            reader.
                        </b>{" "}
                        Literally one of the best things that has come out this
                        year(or this decade). Thank you dev.
                    </>
                }
                href="https://chrome.google.com/webstore/detail/unclutter-new-tab/bghgkooimeljolohebojceacblokenjn?hl=en-GB&authuser=0"
                index={1}
            />
            <Review
                text={
                    <>
                        [...] Kudos to Clearly, JustRead, and a few other good
                        [reader modes], but{" "}
                        <b className="font-display text-bold">
                            I have only been using UNCLUTTER for an hour and
                            already think it&apos;s the one I am sticking with.
                        </b>{" "}
                        [...]
                    </>
                }
                href="https://chrome.google.com/webstore/detail/unclutter-%E2%80%94-modern-reader/ibckhpijbdmdobhhhodkceffdngnglpk?hl=en-GB&authuser=0"
                index={2}
            />
        </div>
    );
}

function Review({ text, href, index }) {
    const { ref, inView } = useInView({
        threshold: 1.0,
        rootMargin: "0px 0px -20% 0px",
        triggerOnce: true,
    });

    return (
        <a
            className={clsx(
                "flex flex-col gap-3 justify-between",
                inView ? "animate-slidein" : "opacity-0"
            )}
            style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "both",
            }}
            href={href}
            target="_blank"
            rel="noreferrer"
            ref={ref}
        >
            <div className="font-text text-base md:text-xl max-w-xl leading-snug">
                &quot;{text}&quot;
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
