import { Html, Head, Main, NextScript } from "next/document";
import { dmSans, dmSerifDisplay } from "@/styles/fonts";

export default function Document() {
  return (
    <Html lang="pt-BR" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <body className="min-h-screen antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
