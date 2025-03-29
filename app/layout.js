import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "🚀 Produk Digital Terbaik | Nama Brand",
  description:
    "Temukan solusi terbaik untuk meningkatkan produktivitas dan kesuksesan Anda dengan produk inovatif dari Nama Brand.",
  keywords: "produk digital, kursus online, sukses bisnis, strategi pemasaran",
  author: "Nama Brand",
  openGraph: {
    title: "🚀 Produk Digital Terbaik | Nama Brand",
    description:
      "Temukan solusi terbaik untuk meningkatkan produktivitas dan kesuksesan Anda.",
    url: "https://www.namabrand.com/",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gambar Produk Digital",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
