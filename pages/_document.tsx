import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <title>Cartão de Natal</title>
      </Head>
      <body className="bg-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-snow bg-top-0 bg-bottom-0 bg-left-0 bg-right-0 bg-snow1 animate-[snowfall_30s_linear_infinite]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-snow bg-top-0 bg-bottom-0 bg-left-0 bg-right-0 bg-snow2 opacity-50 animate-[snowfall2_30s_linear_infinite]"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
