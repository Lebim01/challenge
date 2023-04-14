import { DefaultTemplate } from "@/components/templates/DefaultTemplate";
import "./globals.css";
import { AppProviders } from "@/context/AppProviders";

import { Roboto } from "next/font/google";
import { dir } from "i18next";
import { AvailableLanguages, languages } from "@/utils/i18n/settings";
// If loading a variable font, you don't need to specify the font weight
const inter = Roboto({ weight: ["400"], subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: AvailableLanguages };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`bg-background text-text ${inter.className}`}>
        <AppProviders lang={lng}>
          <DefaultTemplate>{children}</DefaultTemplate>
        </AppProviders>
      </body>
    </html>
  );
}