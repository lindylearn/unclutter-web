import { InlineLink } from "../pages";
import ExampleLayout from "./ExampleLayout";
import GithubButton from "./GithubButton";

export default function Releases({ repoStars, releases }) {
    return (
        <ExampleLayout
            boldTitle="Open-source,"
            title="with new updates every week."
            icon={<></>}
            description={
                <>
                    Open an issue for anything that&apos;s wrong, read the{" "}
                    <InlineLink
                        href="https://github.com/lindylearn/unclutter/tree/main/docs"
                        className="mt-3"
                    >
                        documentation
                    </InlineLink>
                    , or contribute!
                </>
            }
            descriptionChildren={<GithubButton repoStars={repoStars} />}
        >
            {(inView) => (
                <div className="hidden md:block w-full relative flex-shrink-0 bg-white rounded-xl shadow-xl py-3 px-4">
                    <ul className="">
                        {releases
                            .slice(0, 9)
                            .map(({ name, html_url, published_at }, index) => {
                                const date = new Date(published_at);

                                const cleanTitle = name
                                    .split(": ")[1]
                                    .split("&")[0]
                                    .split(",")[0];
                                return (
                                    <li
                                        key={html_url}
                                        className={
                                            "flex gap-5 " +
                                            (inView
                                                ? "animate-slideinSlightly"
                                                : "opacity-0")
                                        }
                                        style={{
                                            animationDelay: `${
                                                (index / 2) * 0.05 + 0.3
                                            }s`,
                                            animationFillMode: "both",
                                        }}
                                    >
                                        <div className="w-16 md:w-24 flex-shrink-0 md:text-lg">
                                            {monthNames[date.getMonth()]}{" "}
                                            {date.getDate()}
                                        </div>
                                        <a
                                            className="text-lg md:text-xl transition-all whitespace-nowrap overflow-hidden overflow-ellipsis hover:underline"
                                            href={html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {cleanTitle}
                                        </a>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            )}
        </ExampleLayout>
    );
}

// export function getDaysAgoDescription(daysAgo) {
//     if (daysAgo == 0) {
//         return "today";
//     } else if (daysAgo == 1) {
//         return "yesterday";
//     } else {
//         return `${daysAgo}d ago`;
//     }
// }

// export function getDaysAgo(dateString) {
//     const diffMillis = Math.abs(Date.now() - new Date(dateString));
//     const diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24));
//     return diffDays;
// }

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
