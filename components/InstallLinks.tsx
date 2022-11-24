import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export default function InstallLinks({
    repoStars = 72,
    initial = false,
    showStores = true,
    showGithub = true,
    showProductHunt = false,
    inViewOverride = false,
}) {
    const { ref, inView } = useInView({
        threshold: 1.0,
        rootMargin: `0px 0px ${initial ? "-10%" : "-20%"} 0px`,
        triggerOnce: true,
    });

    return (
        <div
            className={clsx(
                "flex flex-wrap md:flex-nowrap gap-3 md:gap-7 justify-start items-center"
            )}
            ref={ref}
        >
            {showStores && (
                <>
                    <InstallButton
                        title="Add to Chrome"
                        iconPath="/icons/chrome.svg"
                        href="https://chrome.google.com/webstore/detail/ibckhpijbdmdobhhhodkceffdngnglpk"
                        inView={inView || inViewOverride}
                        animationIndex={0}
                    />
                    <InstallButton
                        title="Add to Firefox"
                        iconPath="/icons/firefox.svg"
                        href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn"
                        inView={inView || inViewOverride}
                        animationIndex={1}
                    />
                </>
            )}

            {showGithub && (
                <GithubButton
                    repoStars={repoStars}
                    inView={inView || inViewOverride}
                    className={showStores && "hidden md:flex"}
                    animationIndex={2}
                />
            )}

            {showProductHunt && (
                <ProductHuntButton
                    inView={inView || inViewOverride}
                    animationIndex={3}
                />
            )}
        </div>
    );
}

export function InstallButton({
    title,
    iconPath,
    href,
    animationIndex,
    inView,
    children,
    className,
}: {
    title: string;
    iconPath?: string;
    href: string;
    animationIndex?: number;
    inView?: boolean;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <a
            className={clsx(
                "install-link w-max text-md md:text-xl flex gap-2 md:gap-3 items-center bg-white px-1.5 md:px-2.5 py-1 md:py-1.5 rounded-lg md:rounded-xl shadow-md transition-all relative",
                `desktop:hover:shadow-lg desktop:hover:${
                    animationIndex % 2 === 0 ? "" : "-"
                }rotate-1`,
                animationIndex !== undefined &&
                    (inView ? "animate-slidein" : "opacity-0"),
                className
            )}
            style={{
                animationDelay: animationIndex && `${animationIndex * 50}ms`,
                animationFillMode: "backwards",
            }}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {iconPath && (
                <img
                    className="inline-block w-6 h-6 md:w-8 md:h-8"
                    src={iconPath}
                ></img>
            )}

            <div className="">{title}</div>
            {children}
        </a>
    );
}

export function ProductHuntButton({ inView, animationIndex }) {
    return (
        <a
            style={{
                animationDelay: animationIndex && `${animationIndex * 50}ms`,
                animationFillMode: "backwards",
            }}
            className={clsx(
                "shadow-md rounded-lg hover:rotate-1 transition-transform",
                animationIndex !== undefined &&
                    (inView ? "animate-slidein" : "opacity-0")
            )}
            href="https://www.producthunt.com/posts/unclutter-c9b0437e-5b84-4193-abe3-dee9c861d157?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-unclutter&#0045;c9b0437e&#0045;5b84&#0045;4193&#0045;abe3&#0045;dee9c861d157"
            target="_blank"
            rel="noreferrer"
        >
            <img
                className="h-[40px] md:h-[45px]"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=366985&theme=light"
                alt="Unclutter - Read&#0032;and&#0032;collect&#0032;articles&#0032;with&#0032;style | Product Hunt"
            />
        </a>
    );
}

export function GithubButton({
    repoStars,
    animationIndex,
    inView,
    className,
}: {
    repoStars: number;
    animationIndex?: number;
    inView?: boolean;
    className?: string;
}) {
    return (
        <InstallButton
            title="Star on GitHub"
            iconPath="/icons/github.svg"
            href="https://github.com/lindylearn/unclutter"
            inView={inView}
            animationIndex={animationIndex}
            className={clsx("mr-14", className)}
        >
            <div className="absolute -right-12 md:-right-14">
                <div className="bg-white px-1.5 py-0.5 rounded-lg shadow-md text-md md:text-lg">
                    {repoStars}
                </div>
                <div className="left-arrow"></div>
            </div>
        </InstallButton>
    );
}

export function StarIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 576 512">
            <path
                fill="currentColor"
                d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
            />
        </svg>
    );
}
