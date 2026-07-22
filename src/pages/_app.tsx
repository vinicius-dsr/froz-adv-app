import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { dmSans, dmSerifDisplay } from "@/styles/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
