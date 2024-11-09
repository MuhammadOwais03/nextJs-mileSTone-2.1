import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../../components/header";
import './globals.css';


// Define fonts using localFont with appropriate configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// RootLayout component that wraps all pages and applies global font styles
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontClassNames = `${geistSans.variable} ${geistMono.variable} antialiased`;

  return (
    <html lang="en">
      <body className={`${fontClassNames} bg-red-100`}>
        <header>
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}

