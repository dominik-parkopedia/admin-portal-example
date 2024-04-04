import Head from "next/head";
import { Inter } from "next/font/google";
import { api } from "~/utils/api";
import MainNav from "~/components/main-nav";
import "~/styles/globals.css";

import { type AppType } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Parkopedia Admin Panel</title>
      </Head>
      <main
        className={`bg-background min-h-screen font-sans antialiased ${inter.variable}`}
      >
        <div className="min-h-full">
          <MainNav />
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
