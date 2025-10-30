import type { Metadata } from "next";
import "./globals.css";
import AOSInitializer from '../components/AOSInitializer';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "The Gentry Cut",
  description: "Exclusive Grooming, Redefined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans bg-deep-black text-subtle-off-white antialiased"
        suppressHydrationWarning
      >
        <AOSInitializer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
