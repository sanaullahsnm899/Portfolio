import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sana Ullah | AI Engineer & Robotics Researcher",
  description: "Portfolio of Sana Ullah, Software Engineering Student passionate about AI, Machine Learning, Human-Robot Interaction, and Autonomous Intelligent Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-background text-text-main selection:bg-primary/30">
        {children}
      </body>
    </html>
  );
}
