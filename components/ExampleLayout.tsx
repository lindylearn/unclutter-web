import { useInView } from "react-intersection-observer";
import { createContext } from "react";

export const ExampleLayoutContext = createContext({ inView: false });

export default function ExampleLayout({
    boldTitle,
    title,
    description,
    children,
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
                "flex flex-col md:flex-row gap-3 md:gap-5 lg:gap-10 justify-start items-start " +
                (!inView && defaultVisible ? "opacity-20" : "") +
                (!inView && !defaultVisible ? "opacity-0" : "") +
                (inView && !defaultVisible ? "xl:animate-slidein" : "")
            }
            ref={ref}
        >
            <div className="w-full md:max-w-sm lg:max-w-lg flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl desktop:hover:cursor-pointer desktop:hover:shadow-2xl">
                <ExampleLayoutContext.Provider value={{ inView }}>
                    {children}
                </ExampleLayoutContext.Provider>
            </div>

            <div className="max-w-full  flex flex-col md:mt-5 gap-1 md:gap-3 items-start">
                <div className="text-xl md:text-2xl max-w-2xl">
                    <b className="font-bold md:text-[26px]">{boldTitle}</b>{" "}
                    {title}
                </div>

                <div className="font-text text-lg md:text-xl max-w-xl leading-snug">
                    {description}
                </div>
            </div>
        </div>
    );
}
