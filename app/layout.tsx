import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Layout from "@/components/Layout";
import { CartContextProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Parsa",
  description: "Online Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <CartContextProvider>
          <Layout> {children}</Layout>
        </CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
