import { useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function VideoExample({
    boldTitle,
    title,
    description,
    video,
    poster = null,
    defaultVisible = false,
}) {
    const videoRef = useRef();
    const { ref, inView } = useInView({
        threshold: 0.5,
        rootMargin: "0px 0px -30% 0px",
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                (videoRef.current as HTMLVideoElement)?.play();
            }
        },
    });

    return (
        <div
            className={
                "flex flex-col md:flex-row gap-3 md:gap-10 justify-start " +
                (!inView && defaultVisible ? "opacity-20" : "") +
                (!inView && !defaultVisible ? "opacity-0" : "") +
                (inView && !defaultVisible ? "xl:animate-slidein" : "")
            }
            ref={ref}
        >
            <div className="video-container w-full md:w-3/6 md:max-w-lg relative rounded-xl overflow-hidden shadow-xl flex-shrink-0 desktop:hover:cursor-pointer desktop:hover:shadow-2xl">
                <svg
                    className="replay-icon absolute bottom-2 right-2 w-7 text-black drop-shadow-xl opacity-0 invisible"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.86 0-95.19-15.58-134.2-44.86c-14.14-10.59-17-30.66-6.391-44.81c10.61-14.09 30.69-16.97 44.8-6.375c27.84 20.91 61 31.94 95.89 31.94C344.3 415.8 416 344.1 416 256s-71.67-159.8-159.8-159.8C205.9 96.22 158.6 120.3 128.6 160H192c17.67 0 32 14.31 32 32S209.7 224 192 224H48c-17.67 0-32-14.31-32-32V48c0-17.69 14.33-32 32-32s32 14.31 32 32v70.23C122.1 64.58 186.1 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"
                    />
                </svg>
                <video
                    className=""
                    src={video}
                    poster={poster}
                    ref={videoRef}
                    muted
                    onClick={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.pause();
                        video.currentTime = 0;
                        video.play();
                    }}
                    style={{ aspectRatio: "1806 / 1138" }}
                ></video>
                {/* <img className="rounded-2xl" src="media/clips/thumbnail.webp" /> */}
            </div>

            <div className="flex flex-col md:mt-5 gap-1 md:gap-3 items-start">
                <div className="text-xl md:text-2xl max-w-3xl">
                    <b className="font-bold md:text-[26px]">{boldTitle}</b>{" "}
                    {title}
                </div>

                <div className="font-text md:ml-40 text-lg md:text-xl max-w-2xl leading-snug">
                    {description}
                </div>
            </div>
        </div>
    );
}
