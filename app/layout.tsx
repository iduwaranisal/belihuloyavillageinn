import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Belihuloya Village Inn | Peaceful Mountain Escapes in Sri Lanka",
  description:
    "Wake up to misty hills, cool mountain breezes, cozy bonfire nights, and unforgettable local tours in Pambahinna, Belihuloya, Sri Lanka.",
  keywords: [
    "Belihuloya Village Inn",
    "Belihuloya accommodation",
    "Pambahinna hotel",
    "Sri Lanka mountain stay",
    "Belihuloya bonfire",
    "Bambarakanda waterfall tours",
  ],
  authors: [{ name: "Belihuloya Village Inn" }],
  icons: {
    icon: "/image/logo/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${cormorantGaramond.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('bvi_theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased selection:bg-[#1FA2E1] selection:text-white">
        {children}
      </body>
    </html>
  );
}
