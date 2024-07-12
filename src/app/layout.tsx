import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils/fonts";
import Sidebar from "@/components/layout/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Ucademy",
  description: "Học các khoá học trực tuyến từ các giáo viên hàng đầu thế giới",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
