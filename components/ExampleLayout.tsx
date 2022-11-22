import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "usehooks-ts";

export default function ExampleLayout({
    boldTitle,
    title,
    icon,
    description,
    children,
    descriptionChildren = null,
    defaultVisible = false,
    onInView = () => {},
}) {
    const isMobile = useMediaQuery("(max-width: 767px)");

    const { ref, inView } = useInView({
        threshold: defaultVisible ? 0.1 : 0.4,
        rootMargin: `0px 0px ${isMobile ? "-40%" : "-30%"} 0px`,
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
                "grid gap-3 md:gap-5 lg:gap-10 md:grid-cols-2",
                inView ? "animate-slidein" : "opacity-0"
            )}
            ref={ref}
        >
            <div className="relative md:rounded-xl overflow-hidden shadow-lg -mx-3 md:mx-0">
                {children}
            </div>

            <div className="flex flex-col md:mt-3 gap-3 md:gap-5 items-start">
                <div className="flex gap-3 items-center">
                    {/* {icon} */}
                    <h2 className="text-lg md:text-[26px]">
                        <b className="font-bold text-2xl md:text-3xl">
                            {boldTitle}
                        </b>{" "}
                        {title}
                    </h2>
                </div>

                <div
                    className={clsx(
                        "font-text text-base md:text-xl max-w-xl leading-snug mb-1 flex flex-col gap-3",
                        inView ? "animate-slidein" : "opacity-0"
                    )}
                >
                    {description}
                </div>

                {/* {descriptionChildren} */}
            </div>
        </div>
    );
}
