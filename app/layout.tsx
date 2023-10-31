import type { ReactNode } from "react";
import type { Metadata } from "next";
import { cn } from "./utils";
import { cormorant } from "./libs/font";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brown Patience",
  keywords: "Ghostwriting, Content writing, writing",
  // description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(cormorant.className, "text-jet text-base flex flex-col")}
      >
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
