import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyivstar.Tech",
  description: "Kyivstar.Tech",
  generator: "Kyivstar.Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
