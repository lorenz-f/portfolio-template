import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet"/>
      </Head> 
      <body className = "text-lg font-inter overflow-x-hidden tracking-tight text-black bg-[#E6E3D3] transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
