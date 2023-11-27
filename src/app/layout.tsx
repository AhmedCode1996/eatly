import { inter, manrope, poppin } from "@/config/fonts";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eatly",
  description: "Enjoy Foods all over the world",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="light">
        <body
          className={`${inter.variable} ${poppin.variable} ${manrope.variable}`}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
