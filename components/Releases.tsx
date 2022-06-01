import { useInView } from "react-intersection-observer";
import GithubButton from "./GithubButton";

export default function Releases({ repoStars, releases }) {
    let { ref, inView } = useInView({
        threshold: 1,
        rootMargin: "0px 0px -30% 0px",
        triggerOnce: true,
    });

    return (
        <div
            className={
                "flex flex-col md:flex-row gap-3 md:gap-10 justify-start " +
                (inView ? "animate-slidein" : "opacity-0")
            }
            ref={ref}
        >
            <div className="hidden md:block w-full md:w-3/6 md:max-w-lg relative overflow-hidden flex-shrink-0 bg-white rounded-xl shadow-xl py-3 px-4">
                <ul className="">
                    {releases
                        .slice(0, 8)
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
                                            (index / 2) * 0.1 + 0.3
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

            <div className="flex flex-col md:mt-5 gap-1 md:gap-3 items-start">
                <div className="text-xl md:text-2xl max-w-3xl">
                    <b className="font-bold md:text-[26px]">Open-source</b>,
                    with new updates every week.
                </div>
                <div className="font-text md:ml-40 text-lg md:text-xl max-w-2xl leading-snug">
                    Just open an issue for any bug or cool idea you find. Star
                    the project on GitHub to follow the development and
                    contribute!
                </div>
                <div className="md:ml-40 mt-1 md:mt-2 mx-auto md:mx-0">
                    <GithubButton repoStars={repoStars} />
                </div>
            </div>
        </div>
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
