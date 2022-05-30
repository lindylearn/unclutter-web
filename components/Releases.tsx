import GithubButton from "./GithubButton";

export default function Releases({ repoStars, releases }) {
    return (
        <div className="flex gap-10 justify-start">
            <div className="w-2/6 relative overflow-hidden">
                <ul className="">
                    {releases.map(({ name, html_url, published_at }) => {
                        const date = new Date(published_at);

                        const cleanTitle = name.split(": ")[1];
                        return (
                            <li className="flex gap-5">
                                <div className="w-24 flex-shrink-0 text-lg">
                                    {monthNames[date.getMonth()]}{" "}
                                    {date.getDate()}
                                </div>
                                <a
                                    className="font-semibold text-xl transition-all whitespace-nowrap overflow-hidden overflow-ellipsis"
                                    href={html_url}
                                >
                                    {cleanTitle}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="flex flex-col mt-7 gap-5 items-start">
                <div className="text-2xl">
                    <b className="font-bold text-[26px]">Open-source</b> with
                    new updates every week.
                </div>

                <GithubButton repoStars={repoStars} />
            </div>
        </div>
    );
}

export function getDaysAgoDescription(daysAgo) {
    if (daysAgo == 0) {
        return "today";
    } else if (daysAgo == 1) {
        return "yesterday";
    } else {
        return `${daysAgo}d ago`;
    }
}

export function getDaysAgo(dateString) {
    const diffMillis = Math.abs(Date.now() - new Date(dateString));
    const diffDays = Math.floor(diffMillis / (1000 * 60 * 60 * 24));
    return diffDays;
}

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
