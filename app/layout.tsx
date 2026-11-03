import type { Metadata } from "next";
import { MotionController } from "./MotionController";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://changsiyeong.com"),
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
    images: [{ url: "/og.png?v=20261103-road", width: 1200, height: 800 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chang Siyeong — Photographer",
    description:
      "Fashion, lookbook, commerce and advertising photography from Seoul.",
    images: ["/og.png?v=20261103-road"],
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
