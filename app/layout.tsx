import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Patience Brown",
  description: "",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-jet flex flex-col`}>
        <Header />
        <main className="grow min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
