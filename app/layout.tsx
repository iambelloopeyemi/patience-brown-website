import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <html lang="en">
      <body className="text-jet flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
