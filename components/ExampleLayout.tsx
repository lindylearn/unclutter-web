import { useInView } from "react-intersection-observer";

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
    const { ref, inView } = useInView({
        threshold: 0.5,
        rootMargin: "0px 0px -30% 0px",
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                onInView();
            }
        },
    });

    return (
        <div
            className={
                "grid gap-3 md:gap-5 lg:gap-10 grid-cols-2 " +
                (!inView && defaultVisible ? "opacity-10" : "") +
                (!inView && !defaultVisible ? "opacity-0" : "") +
                (inView && !defaultVisible ? "animate-slidein" : "")
            }
            ref={ref}
        >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
                {children}
            </div>

            <div className="flex flex-col md:mt-3 gap-1 md:gap-5 items-start basis-3/6">
                <div className="text-lg md:text-[26px] flex gap-3 items-center">
                    {/* {icon} */}
                    <h2>
                        <b className="font-bold text-2xl md:text-3xl">
                            {boldTitle}
                        </b>{" "}
                        {title}
                    </h2>
                </div>

                <div className="font-text text-base md:text-xl max-w-xl leading-snug mb-1 flex flex-col gap-3">
                    {description}
                </div>

                {descriptionChildren}
            </div>
        </div>
    );
}
