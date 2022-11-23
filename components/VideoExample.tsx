import { useRef } from "react";
import ExampleLayout from "./ExampleLayout";

export default function VideoExample({
    index = null,
    boldTitle,
    title,
    icon,
    description,
    video,
    poster = null,
    defaultVisible = false,
    whiteReplayLogo = false,
}) {
    const videoRef = useRef();

    return (
        <ExampleLayout
            index={index}
            boldTitle={boldTitle}
            title={title}
            icon={icon}
            description={description}
            defaultVisible={defaultVisible}
            onInView={() => (videoRef.current as HTMLVideoElement)?.play()}
        >
            <div className="video-container">
                <video
                    className="object-cover object-left-top"
                    poster={poster}
                    ref={videoRef}
                    muted
                    style={{ aspectRatio: "1806 / 1138" }}
                    // controls
                >
                    <source src={video} type="video/webm" />
                    <source
                        src={video.replace(".webm", ".mp4")}
                        type="video/mp4"
                    />
                </video>
            </div>
        </ExampleLayout>
    );
}
