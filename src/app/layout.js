import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Quote app",
  description: "Quote app from front-end mentor created in Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon-32x32.png" />
      <body className="bg-[#1f2632] min-h-screen flex flex-col items-center justify-center w-screen">
        {children}{" "}
        <h2 className="text-[#52ffa8] tracking-[5px] text-xs font-extrabold absolute bottom-2">
          SOLOMON MUYONJO
        </h2>
      </body>
      <GoogleAnalytics gaId="G-GG1K2PTQXG" />
    </html>
  );
}
