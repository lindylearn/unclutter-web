import { useEffect, useState } from "react";

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
