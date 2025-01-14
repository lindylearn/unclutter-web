import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Work+Sans:wght@400&display=fallback"
                        rel="stylesheet"
                    />
                </Head>
                <body
                    className="bg-gradient-to-b to-amber-400 via-yellow-400 from-amber-300"
                    style={{
                        backgroundImage:
                            "linear-gradient(120deg, var(--tw-gradient-stops))",
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
