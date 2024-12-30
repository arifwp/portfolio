import { SpeedInsights } from "@vercel/speed-insights/next";
import BottomNavigation from "./components/BottomNavigation";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

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
