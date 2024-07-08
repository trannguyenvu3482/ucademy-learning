import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils/fonts";
import Sidebar from "@/components/layout/Sidebar";

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
    <html lang="en">
      <body className={manrope.className}>
        <div className="wrapper grid grid-cols-[300px_minmax(0,1fr)] h-screen">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
