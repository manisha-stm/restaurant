import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloom & Bite – Where Taste Meets Aesthetic",
  description:
    "Bloom & Bite is a trendy cafe crafted for those who love beautiful food, cozy vibes, and Instagram-worthy moments. Reserve your table today.",
  openGraph: {
    title: "Bloom & Bite – Where Taste Meets Aesthetic",
    description:
      "Aesthetic, elegant, and utterly delicious. Discover Bloom & Bite.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
