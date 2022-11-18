import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { exampleUrls } from "../components/ExamplePageList";

export default function NetflixPage({}) {
    return (
        <div className="py-10">
            <InfiniteLooper speed={20} direction="right">
                {Array.from(Array(10).keys()).map((i) => (
                    <div className="">
                        <ExamplePage key={i} index={i} />
                    </div>
                ))}
            </InfiniteLooper>
        </div>
    );
}

export function ExamplePage({ index }) {
    return (
        <a
            className="w-28 sm:w-36 xl:w-48 flex rounded-lg shadow-lg desktop:hover:shadow-2xl"
            href={exampleUrls[index]}
            target="_blank"
            rel="noreferrer"
        >
            <Image
                className="rounded-lg"
                src={`/media/pages/screenshot_${index}.png`}
                width={1360}
                height={1600}
            />
        </a>
    );
}

// from https://blog.finiam.com/blog/infinite-looping-react-component
function InfiniteLooper({
    speed,
    direction,
    children,
}: {
    speed: number;
    direction: "right" | "left";
    children: React.ReactNode;
}) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    function resetAnimation() {
        if (innerRef?.current) {
            innerRef.current.setAttribute("data-animate", "false");

            setTimeout(() => {
                if (innerRef?.current) {
                    innerRef.current.setAttribute("data-animate", "true");
                }
            }, 10);
        }
    }

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const { width } = innerRef.current.getBoundingClientRect();

        const { width: parentWidth } = outerRef.current.getBoundingClientRect();

        const widthDeficit = parentWidth - width;

        const instanceWidth = width / innerRef.current.children.length;

        if (widthDeficit) {
            setLooperInstances(
                looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
            );
        }

        resetAnimation();
    }, [looperInstances]);

    /*
    6 instances, 200 each = 1200
    parent = 1700
  */

    useEffect(() => setupInstances(), [setupInstances]);

    useEffect(() => {
        window.addEventListener("resize", setupInstances);

        return () => {
            window.removeEventListener("resize", setupInstances);
        };
    }, [looperInstances, setupInstances]);

    return (
        <div className="looper" ref={outerRef}>
            <div
                className="looper__innerList flex gap-2 sm:gap-5"
                ref={innerRef}
                data-animate="true"
            >
                {[...Array(looperInstances)].map((_, ind) => (
                    <div
                        key={ind}
                        className="looper__listInstance flex gap-2 sm:gap-5"
                        style={{
                            animationDuration: `${speed}s`,
                            animationDirection:
                                direction === "right" ? "reverse" : "normal",
                        }}
                    >
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}
