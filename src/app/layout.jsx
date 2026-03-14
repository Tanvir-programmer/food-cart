import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "taxi burger",
    template: "%s | taxi-burger",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-4 py-2 flex justify-between gap-5 bg-stone-800 text-white items-center">
          <Link href={"/"}>
            {" "}
            <Image
              width={120}
              height={30}
              src="/favicon.ico"
              alt=""
              className="w-[120px] rounded-[300px]"
            />
          </Link>
          <div className="flex gap-5">
            <Link href={"/foods"} className="btn">
              Foods
            </Link>
            <Link href={"/reviews"} className="btn">
              Reviews
            </Link>
          </div>
        </header>
        <div className="px-5 py-4">
          <CartProvider>{children}</CartProvider>
        </div>
      </body>
    </html>
  );
}
