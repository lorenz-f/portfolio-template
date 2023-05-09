import "../styles/globals.css";
import Head from "next/head";

// set tags to your liking
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="all" />
        <meta
          name="keywords"
          content="Portfolio" 
        />
        <meta name="description" content="Portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
