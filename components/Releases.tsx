import GithubButton from "./GithubButton";

export default function Releases({ repoStars, releases }) {
    return (
        <div className="flex gap-10 justify-start">
            <div className="w-2/6 relative overflow-hidden flex-shrink-0 bg-white rounded-xl shadow-xl py-3 px-4">
                <ul className="">
                    {releases
                        .slice(0, 8)
                        .map(({ name, html_url, published_at }) => {
                            const date = new Date(published_at);

                            const cleanTitle = name
                                .split(": ")[1]
                                .split("&")[0]
                                .split(",")[0];
                            return (
                                <li key={html_url} className="flex gap-5">
                                    <div className="w-24 flex-shrink-0 text-lg">
                                        {monthNames[date.getMonth()]}{" "}
                                        {date.getDate()}
                                    </div>
                                    <a
                                        className="text-xl transition-all whitespace-nowrap overflow-hidden overflow-ellipsis hover:underline"
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

            <div className="flex flex-col mt-7 gap-3 items-start">
                <div className="text-2xl">
                    <b className="font-bold text-[26px]">
                        Everything is open-source
                    </b>
                    , with new updates every week.
                </div>
                <div className="ml-32 text-xl max-w-2xl">
                    Just open an issue for any bug or cool idea you find. Star
                    the project on GitHub to follow the development and
                    contribute!
                </div>
                <div className="ml-32 mt-2">
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
