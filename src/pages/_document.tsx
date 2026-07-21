import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
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
