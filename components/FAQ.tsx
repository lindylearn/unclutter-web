export default function FAQ() {
    return (
        <div className="flex flex-col items-center max-w-6xl mx-auto">
            <h1 className="text-2xl">FAQ</h1>
            <ul className="mt-5 flex flex-col justify-center gap-3">
                <FAQItem
                    question="What is this project?"
                    answer="Unclutter is a free browser extension to make web articles more
                    readable."
                />
                <FAQItem
                    question="How is this different than other 'reader modes'?"
                    answer="This extension rewrites the CSS of webpages dynamically (using a website's mobile style) instead of extracting only the text from the page. This means that the original design and functionality of websites stays intact, and that it works on more websites."
                />
                {/* <FAQItem
                    question="How does it work?"
                    answer="The basic idea is to use a website's mobile style to block noisy page elements. There are also other heuristics to hide CSS classes, remove margin from paragraph elements, override scrollocks etc."
                /> */}
                <FAQItem
                    question="Can I customize the extension?"
                    answer="Yes! Set your own font size or color theme, turn off features you don't use, or configure the extension to automatically activate on certain website domains."
                />
                <FAQItem
                    question="What do you mean by 'social annotations'?"
                    answer="If you want, the extension also shows Hacker News comments that contain article quotes right next to the article. The goal is to show what other people thought about while reading."
                />
                <FAQItem
                    question="How can I help?"
                    answer="Try out the extension and leave some feedback on GitHub!"
                />
            </ul>
        </div>
    );
}

function FAQItem({ question, answer }) {
    return (
        <li className="flex items-start text-lg">
            <h2 className="font-semibold w-80 flex-shrink-0">{question}</h2>
            <div>{answer}</div>
        </li>
    );
}
