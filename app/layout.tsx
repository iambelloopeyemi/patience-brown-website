import "./globals.css";
import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Patience Brown",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-jet flex flex-col">
        <Header />
        <main className="grow min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
