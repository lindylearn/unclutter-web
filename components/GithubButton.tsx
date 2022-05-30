export default function GithubButton({ repoStars }) {
    return (
        <a
            className="flex gap-3 items-center bg-white p-2.5 rounded-lg shadow transition-all hover:shadow-lg hover:rotate-1 relative"
            href="https://github.com/lindylearn/unclutter"
            target="_blank"
            rel="noreferrer"
        >
            <img className="inline-block w-8" src="/icons/github.svg"></img>
            <span className="font-semibold text-lg flex-grow-0">
                Star on GitHub
            </span>
            <div className="absolute -right-12">
                <div className="bg-white px-2.5 py-1 rounded shadow text-lg">
                    {repoStars}
                </div>
                <div className="left-arrow"></div>
            </div>
        </a>
    );
}
