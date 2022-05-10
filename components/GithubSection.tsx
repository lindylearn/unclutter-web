export default function GithubSection({ releases }) {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="text-2xl font-semibold text-center">
                Developed open-source
            </div>
            <a
                className="flex-shrink-0"
                href="https://addons.mozilla.org/en-GB/firefox/addon/lindylearn/"
            >
                <iframe
                    src="https://ghbtns.com/github-btn.html?user=lindylearn&repo=unclutter&type=star&count=true&size=large"
                    className="mt-0 mx-auto scale-100"
                    frameBorder="0"
                    scrolling="0"
                    width="125"
                    height="30"
                    title="GitHub"
                ></iframe>
            </a>
            <div>
                <div className="text-2xl font-semibold">Recent Releases:</div>
                <ul className="text-lg">
                    {releases.map(({ name, html_url, published_at }) => {
                        const date = new Date(published_at);
                        return (
                            <li className="flex gap-5">
                                <div className="w-28">
                                    {monthNames[date.getMonth()]}{" "}
                                    {date.getDate()}
                                </div>
                                <a
                                    className="font-semibold text-lg"
                                    href={html_url}
                                >
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
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
