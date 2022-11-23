import clsx from "clsx";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "usehooks-ts";

export default function ExampleLayout({
    index,
    boldTitle,
    title,
    icon,
    description,
    children,
    descriptionChildren = null,
    defaultVisible = false,
    onInView = () => {},
}) {
    let isMobile = useMediaQuery("(max-width: 767px)");
    // useEffect(() => {
    //     isMobile = window.matchMedia("(max-width: 767px)").matches
    // }, [])

    const { ref, inView } = useInView({
        threshold: defaultVisible ? 0.1 : 0.4,
        rootMargin: `0px 0px ${isMobile && index === 0 ? "-50%" : "-30%"} 0px`,
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                onInView();
            }
        },
    });

    return (
        <div
            className={clsx(
                "grid gap-4 md:gap-5 lg:gap-10 md:grid-cols-2",
                inView && "animate-slidein",
                !inView && ((isMobile && index === 0) ? "opacity-30" : "opacity-0")
            )}
            ref={ref}
        >
            <div className="relative md:rounded-xl overflow-hidden shadow-lg -mx-3 md:mx-0">
                {children}
            </div>

            <div className="flex flex-col gap-3 md:gap-5 items-start">
                <div className="flex gap-3 items-center">
                    {/* {icon} */}
                    <h2 className="text-lg md:text-[26px] bg-white px-2 py-0.5 md:px-3 md:py-2 rounded-xl">
                        <span className="">{boldTitle}</span>
                        {/* {title} */}
                    </h2>
                </div>

                <div
                    className={clsx(
                        "font-text text-base md:text-xl max-w-xl leading-snug mb-1 flex flex-col gap-3",
                        inView && "animate-slidein",
                        !inView && ((isMobile && index === 0) ? "opacity-30" : "opacity-0")
                    )}
                >
                    {description}
                </div>

                {/* {descriptionChildren} */}
            </div>
        </div>
    );
}
