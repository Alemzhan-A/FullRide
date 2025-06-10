import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ruRU } from '@clerk/localizations'

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "FullRide - Учись в лучших университетах мира бесплатно",
  description: "Платформа для поиска университетов с полной стипендией, подготовки документов и отслеживания статуса поступления.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ruRU}
      appearance={{
        layout: {
          showOptionalFields: false,
          socialButtonsPlacement: 'bottom',
          privacyPageUrl: '/privacy',
          termsPageUrl: '/terms'
        },
      }}>

      <html lang="ru">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
