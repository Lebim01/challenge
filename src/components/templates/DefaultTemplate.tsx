"use client";

import { useCicada } from "@/hooks/useCicada";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const DefaultTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(() => new QueryClient());
  useCicada();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
