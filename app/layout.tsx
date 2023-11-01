import type { ReactNode } from "react";
import type { Metadata } from "next";
import { cn } from "./utils";
import { cormorant } from "@/app/libs/font";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brown Patience",
  keywords: "",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(cormorant.className, "text-jet text-base flex flex-col")}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
