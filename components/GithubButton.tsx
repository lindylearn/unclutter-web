import { useEffect, useState } from "react";

export default function GithubButton({ repoStars }) {
    return (
        <a
            className="flex gap-2 md:gap-3 items-center bg-white px-1.5 md:px-2.5 py-1 md:py-2 rounded-lg shadow transition-all desktop:hover:shadow-lg desktop:hover:rotate-1 relative"
            href="https://github.com/lindylearn/unclutter"
            target="_blank"
            rel="noreferrer"
        >
            <img className="inline-block w-6 md:w-8" src="/icons/github.svg" />
            <span className="md:text-lg flex-grow-0">Star on GitHub</span>
            <div className="absolute -right-11 md:-right-14">
                <div className="bg-white px-1.5 md:px-2 py-1 rounded shadow text-sm md:text-lg">
                    {repoStars}
                </div>
                <div className="left-arrow"></div>
            </div>
        </a>
    );
}

export function GithubFloatingIcon({ repoStars }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            setVisible(true);
            window.removeEventListener("scroll", onScroll);
        };
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <a
            className={
                "hidden md:block fixed right-0 top-0 py-3.5 px-3 transition-all desktop:hover:rotate-2 " +
                (visible ? "opacity-1" : "opacity-0")
            }
            href="https://github.com/lindylearn/unclutter"
            target="_blank"
            rel="noreferrer"
        >
            <div className="relative">
                <img
                    className="inline-block w-7 md:w-8 mr-2 -mt-[5px]"
                    src="/icons/github.svg"
                />
                <span className="text-xl font-bold">{repoStars}</span>
            </div>
        </a>
    );
}
