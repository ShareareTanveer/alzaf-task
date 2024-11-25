import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const roboto = Roboto({ subsets: [], weight: "400" });
// const inter = Inter({ subsets: [], weight: "400" });

export const metadata: Metadata = {
  title: "softloan",
  description: "softloan",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${roboto.className}`}>
      <body>
            <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
