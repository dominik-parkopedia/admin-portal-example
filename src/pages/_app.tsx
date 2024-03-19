import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MainNav from "~/components/main-nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={`bg-background min-h-screen font-sans antialiased ${inter.variable}`}
    >
      <div className="min-h-full">
        <MainNav />
        <Component {...pageProps} />
      </div>
    </main>
  );
};

export default api.withTRPC(MyApp);
