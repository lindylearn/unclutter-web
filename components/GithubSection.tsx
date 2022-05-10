export default function GithubSection({}) {
    return (
        <div className=" mx-auto">
            <div className="text-2xl font-semibold text-center">
                Follow the development:
            </div>
            <div className="mt-3 flex gap-3 items-center">
                {/* <a
                    className="flex gap-3 items-center bg-white p-2.5 rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1"
                    href="https://github.com/lindylearn/unclutter"
                >
                    <img className="inline-block w-8" src="/github.svg"></img>
                    <span className="font-semibold text-lg ">
                        View on GitHub
                    </span>
                </a> */}

                <a
                    className="flex gap-3 items-center bg-white p-2.5 rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1 relative"
                    href="https://github.com/lindylearn/unclutter"
                >
                    <img className="inline-block w-8" src="/github.svg"></img>
                    <span className="font-semibold text-lg ">
                        Star on GitHub
                    </span>
                    <div className="absolute -right-5">5</div>
                </a>

                {/* <iframe
                    src="https://ghbtns.com/github-btn.html?user=lindylearn&repo=unclutter&type=star&count=true&size=large"
                    className="mt-0 mx-auto scale-125"
                    frameBorder="0"
                    scrolling="0"
                    width="125"
                    height="30"
                    title="GitHub"
                ></iframe> */}

                {/* <div>
                    <ul className="text-lg">
                        {releases.map(({ name, html_url, published_at }) => {
                            const date = new Date(published_at);
                            return (
                                <li className="flex gap-5">
                                    <div className="w-28 opacity-50">
                                        {monthNames[date.getMonth()]}{" "}
                                        {date.getDate()}
                                    </div>
                                    <a
                                        className="font-semibold text-lg hover:scale-105 transition-all"
                                        href={html_url}
                                    >
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div> */}
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
