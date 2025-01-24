import { SpeedInsights } from "@vercel/speed-insights/next";
import BottomNavigation from "./components/BottomNavigation";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["arif.wpras@gmail.com", "https://arifwahyu.id"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md mx-auto">
          <main className="w-full mb-20">{children}</main>

          <BottomNavigation />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
