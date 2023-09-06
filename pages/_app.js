import "../styles/globals.css";
import Head from "next/head";

/* fill below meta tags as appropriate */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Your Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="keywords" content="" />
        <meta name="description" content="Your Name | Your Profession" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
