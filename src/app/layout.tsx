import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "@/utils/fonts";
import Sidebar from "@/components/layout/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <body className={manrope.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer
              autoClose={2000}
              bodyClassName="text-sm font-medium"
              position="top-right"
              closeOnClick
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
