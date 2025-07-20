import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import BottomNavigation from "./components/BottomNavigation";
import "./styles/globals.css";

export const metadata: Metadata = {
  icons: {
    icon: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    shortcut: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
    apple: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
  },
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
        width: 1200,
        height: 630,
        alt: "Profile of Arif Wahyu Prasetyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: `${process.env.NEXT_PUBLIC_FE_URL}/images/profile-about.png`,
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["arif.wpras@gmail.com", `${process.env.NEXT_PUBLIC_FE_URL}`],
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
