export default function GithubSection({}) {
    return (
        <div className=" mx-auto">
            <div className="text-2xl font-semibold text-center">
                Follow the development:
            </div>
            <div className="mt-3 flex gap-3 items-center">
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
