import { ThemeProvider } from "@/components/common/ThemeProvider";
import { manrope } from "@/utils/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";

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
