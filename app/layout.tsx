import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/common/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Ceylon Coffee - AI-Powered Solutions for Sri Lankan coffee Industry",
  description: "AI-Powered Solutions for Sri Lankan coffee Industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-7xl mx-auto relative z-20">
              <Header />
              {children}
              <Footer />
            </div>
            <Toaster position="bottom-right" />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
