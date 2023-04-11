"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { CicadaContextProvider } from "./CicadaContext";

import { queryClient } from "@/utils/queryClient";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CicadaContextProvider>{children}</CicadaContextProvider>
    </QueryClientProvider>
  );
};
