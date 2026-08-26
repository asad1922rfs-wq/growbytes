import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GrowBytes — Digital Experiences That Move Businesses Forward",
  description:
    "GrowBytes designs, builds and grows digital experiences — web, e-commerce, software and AI automation for ambitious businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-w-[320px] overflow-x-hidden font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
