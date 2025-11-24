import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/client-layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://luxeyline-articles.netlify.app"),
  title: 'Luxeyline News | Artikel Real Estate Terbaru',
  description:
    'Selamat datang di Luxeyline News — sumber terpercaya Anda untuk berita, tren, dan insight terbaru di dunia properti mewah. Tetap terdepan dengan update berkualitas dari tim editorial kami.',
  openGraph: {
    title: 'Luxeyline News | Artikel Real Estate Terbaru',
    description:
      'Dapatkan wawasan mendalam tentang pasar properti mewah, tren terbaru, dan artikel pilihan yang dikurasi oleh tim Luxeyline.',
    url: 'https://luxeyline-articles.netlify.app/',
    siteName: 'Luxeyline News',
    images: [
      {
        url: '/assets/images/luxeyline.png', // Use absolute path
        width: 1200,
        height: 630,
        alt: 'Luxeyline News | Artikel Properti Mewah',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
