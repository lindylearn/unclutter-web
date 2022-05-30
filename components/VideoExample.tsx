import { useState, useEffect, useRef } from "react";
import InstallLinks from "./InstallLinks";

export default function VideoExample({ boldTitle, title, description, video }) {
    return (
        <div className="flex gap-10 justify-start">
            <div className="w-2/6 relative rounded-xl overflow-hidden shadow-xl flex-shrink-0 hover:cursor-pointer hover:shadow-2xl">
                <video
                    className=""
                    src={video}
                    autoPlay={true}
                    muted
                    onClick={(e) => {
                        const video = e.target as HTMLVideoElement;
                        video.pause();
                        video.currentTime = 0;
                        video.play();
                    }}
                ></video>
                {/* <img className="rounded-2xl" src="media/clips/thumbnail.webp" /> */}
            </div>

            <div className="flex flex-col mt-7 gap-3">
                <div className="text-2xl max-w-3xl">
                    <b className="font-bold text-[26px]">{boldTitle}</b> {title}
                </div>

                <div className="ml-32 text-xl max-w-2xl">{description}</div>
            </div>
        </div>
    );
}
