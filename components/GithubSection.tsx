export default function GithubSection() {
    return (
        <div>
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
            <div>Recent Releases</div>
        </div>
    );
}
