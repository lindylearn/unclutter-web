import { useRef } from "react";
import ExampleLayout from "./ExampleLayout";

export default function VideoExample({
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
                    src={video}
                    poster={poster}
                    ref={videoRef}
                    muted
                    style={{ aspectRatio: "1806 / 1138" }}
                ></video>
            </div>
        </ExampleLayout>
    );
}
