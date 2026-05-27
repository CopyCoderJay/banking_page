import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
  display: "swap",
});

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
    <html lang="en" className={`dark ${archivo.variable}`} suppressHydrationWarning>
      <body className={archivo.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
