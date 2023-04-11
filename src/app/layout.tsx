import { DefaultTemplate } from "@/components/templates/DefaultTemplate";
import "./globals.css";
import { AppProviders } from "@/context/AppProviders";

import { Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Roboto({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-background text-text ${inter.className}`}>
        <AppProviders>
          <DefaultTemplate>{children}</DefaultTemplate>
        </AppProviders>
      </body>
    </html>
  );
}
