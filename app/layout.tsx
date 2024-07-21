import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";

// I'm assigning custom fonts that i'll be using and i'm only loading the latin subsets of those
// fonts then giving them variables so that it easy to refrence them when styling.
const inter = Inter({ subsets: ["latin"] , variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})


export const metadata: Metadata = {
  title: "S-Kay",
  description: "S-Kay is mordern banking platform for everyone.",
  icons: '/icons/logo.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Here we are loading the fonts so that we can be able to access them across our application */}
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body> 
    </html>
  );
}
