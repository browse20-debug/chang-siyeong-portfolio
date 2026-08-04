import type { Metadata } from "next";
import { MotionController } from "./MotionController";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "Chang Siyeong — Photographer",
    template: "%s — Chang Siyeong",
  },
  description:
    "Seoul-based photographer working across fashion, lookbook, commerce and advertising.",
  openGraph: {
    title: "Chang Siyeong — Photographer",
    description:
      "Fashion, lookbook, commerce and advertising photography from Seoul.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chang Siyeong — Photographer",
    description:
      "Fashion, lookbook, commerce and advertising photography from Seoul.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body id="top">
        <MotionController />
        {children}
      </body>
    </html>
  );
}
