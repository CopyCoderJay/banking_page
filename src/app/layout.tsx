import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N7 | The New Foundation of Modern Banking",
  description: "We drive innovation and growth, provide seamless customer experience and operational excellence in banking solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
