"use client";

import { QueryClientProvider } from "react-query";
import { CicadaContextProvider } from "./CicadaContext";

import { queryClient } from "@/utils/queryClient";
import { AvailableLanguages } from "@/utils/i18n/settings";

export const AppProviders = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: AvailableLanguages;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CicadaContextProvider lng={lang}>{children}</CicadaContextProvider>
    </QueryClientProvider>
  );
};
