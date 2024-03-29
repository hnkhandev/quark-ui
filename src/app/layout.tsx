import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { Providers } from "@/providers/providers";
import { LeftSideNav } from "@/components/left-side-nav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.className,
          "min-h-screen flex flex-col items-center antialiased bg-background"
        )}
      >
        <Providers>
          <SiteHeader />
          <main className="flex justify-center flex-1 w-full">
            <div className="flex w-full h-full max-w-5xl">
              <LeftSideNav />
              <section className="flex flex-col items-center flex-1 h-full p-4">
                {children}
              </section>
              <div className="max-w-[160px] w-full hidden lg:block"></div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
