import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quote app",
  description: "Quote app from front-end mentor created in Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1f2632] min-h-screen flex flex-col items-center justify-center w-screen">
        {children}
      </body>
    </html>
  );
}
