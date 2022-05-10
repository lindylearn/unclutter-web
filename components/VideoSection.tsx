import { useState, useEffect, useRef } from "react";

export default function VideoSection() {
    const videoRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];

    const [activeVideoSegement, setActiveVideoSegment] = useState(0);
    function selectSegment(newIndex) {
        const prevVideo = videoRefs[activeVideoSegement]
            .current as HTMLVideoElement;
        prevVideo.pause();

        setActiveVideoSegment(newIndex);
        const video = videoRefs[newIndex].current as HTMLVideoElement;
        video.pause();
        video.currentTime = 0;
        video.play();
    }
    function onSegmentComplete() {
        let newIndex = activeVideoSegement + 1;
        if (newIndex === 5) {
            return;
        }
        selectSegment(newIndex);
    }

    // const [duration, setDuration] = useState(null);
    // useEffect(() => {
    //     const activeVideo = videoRefs[activeVideoSegement]
    //         .current as HTMLVideoElement;

    //     setDuration(activeVideo.duration);
    //     console.log(activeVideo.duration);
    //     // activeVideo.ontimeupdate = (event) => {
    //     //     const progress = Math.round(
    //     //         (activeVideo.currentTime / activeVideo.duration) * 100
    //     //     );
    //     //     setProgress(progress);
    //     // };
    // }, [activeVideoSegement]);

    return (
        <div className="mt-2 xl:mt-10 flex flex-col xl:flex-row gap-5 sm:gap-10 px-5 xl:px-10 justify">
            <div className="w-full xl:w-7/12 relative rounded-2xl overflow-hidden shadow-xl">
                {Array.from(Array(5).keys()).map((i) => (
                    <video
                        key={i}
                        ref={videoRefs[i]}
                        className={
                            "rounded-2xl transition-all absolute " +
                            (i === activeVideoSegement
                                ? "z-40"
                                : i === activeVideoSegement - 1
                                ? "z-30"
                                : "hidden")
                        }
                        src={`media/clips/clip_${i}.webm`}
                        autoPlay={i === 0}
                        muted
                        onEnded={onSegmentComplete}
                    ></video>
                ))}
                <img className="rounded-2xl" src="media/clips/thumbnail.webp" />
                {/* <div
                    className="absolute bottom-0 h-2 bg-black z-50"
                    style={{
                        transition: `width ${duration}s linear`,
                    }}
                /> */}
            </div>

            <div className="flex flex-col justify-start">
                <header className="hidden xl:flex gap-3 items-center">
                    <img className="w-20" src="/icon.svg" />
                    <div className="">
                        <h1 className="text-4xl font-bold">
                            <span className="">Unclutter</span>
                            <span className="font-normal">
                                {" "}
                                browser extension
                            </span>
                        </h1>
                        <h2 className="text-xl">
                            A new approach to reader mode
                        </h2>
                    </div>
                </header>

                {/* <div>Features:</div> */}
                <ul className="xl:mt-32 sm:ml-10 xl:ml-20 flex flex-col sm:gap-1 text-2xl sm:text-3xl font-semibold select-none	">
                    <VideoSegmentCaption
                        index={0}
                        title="Remove distractions"
                        activeVideoSegement={activeVideoSegement}
                        selectSegment={selectSegment}
                    />
                    <VideoSegmentCaption
                        index={1}
                        title="Customize colors & font"
                        activeVideoSegement={activeVideoSegement}
                        selectSegment={selectSegment}
                    />
                    <VideoSegmentCaption
                        index={2}
                        title="Outline long pages"
                        activeVideoSegement={activeVideoSegement}
                        selectSegment={selectSegment}
                    />
                    <VideoSegmentCaption
                        index={3}
                        title="Automatically activate"
                        activeVideoSegement={activeVideoSegement}
                        selectSegment={selectSegment}
                    />
                    <VideoSegmentCaption
                        index={4}
                        title="Right in your browser"
                        activeVideoSegement={activeVideoSegement}
                        selectSegment={selectSegment}
                    />
                </ul>
            </div>
        </div>
    );
}

function VideoSegmentCaption({
    index,
    title,
    activeVideoSegement,
    selectSegment,
}) {
    const [wiggle, setWiggle] = useState(false);
    useEffect(() => {
        if (index !== 0 && index === activeVideoSegement) {
            setWiggle(true);
        }
    }, [activeVideoSegement]);

    return (
        <li
            className={
                "font-semibold cursor-pointer relative hover:scale-105  transition-all " +
                (index === activeVideoSegement
                    ? "opacity-100 "
                    : "opacity-40 ") +
                (wiggle ? "animate-wiggle " : " ")
            }
            onClick={(event) => {
                setWiggle(true);
                selectSegment(index);
            }}
            onAnimationEnd={() => setWiggle(false)}
        >
            <svg
                className={
                    "absolute -left-6 top-1.5 w-4 " +
                    (index === activeVideoSegement ? "block" : "hidden")
                }
                viewBox="0 0 320 512"
            >
                <path
                    fill="currentColor"
                    d="M320 256C320 344.4 248.4 416 160 416C71.63 416 0 344.4 0 256C0 167.6 71.63 96 160 96C248.4 96 320 167.6 320 256z"
                />
            </svg>
            {index + 1}. {title}
        </li>
    );
}
