import { DefaultTemplate } from "@/components/templates/DefaultTemplate";
import "../globals.css";
import { AppProviders } from "@/context/AppProviders";
import { Roboto } from "next/font/google";
import { dir } from "i18next";
import { AvailableLanguages, languages } from "@/utils/i18n/settings";

const inter = Roboto({ weight: ["400"], subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  title: "Cicada Challenge",
};

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: AvailableLanguages };
}) {
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <body className={`${inter.className}`}>
        <AppProviders lang={lng}>
          <DefaultTemplate>{children}</DefaultTemplate>
        </AppProviders>
      </body>
    </html>
  );
}
