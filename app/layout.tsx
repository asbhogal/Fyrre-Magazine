import Container from "@/components/ui/container";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fyrre Magazine",
  description: "Art & Life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logos/FyrreMagazineFavicon.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
