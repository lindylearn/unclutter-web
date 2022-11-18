import PlausibleProvider from "next-plausible";
import "../styles/globals.css";
import "../styles/looper.css";

function MyApp({ Component, pageProps }) {
    return (
        <PlausibleProvider
            domain="unclutter.lindylearn.io"
            trackOutboundLinks={true}
        >
            <Component {...pageProps} />
        </PlausibleProvider>
    );
}

export default MyApp;
