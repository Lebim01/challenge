"use client";

import { useCicadaContext } from "@/context/CicadaContext";
import dynamic from "next/dynamic";

const DefaultTemplate_ = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useCicadaContext();
  return (
    <main
      id="mainTemplate"
      className={`px-2 lg:px-12 py-6 pb-[10px] flex flex-col gap-14 h-full overflow-auto bg-background text-text ${theme}`}
    >
      {children}
    </main>
  );
};

export const DefaultTemplate = dynamic(
  () => Promise.resolve(DefaultTemplate_),
  {
    ssr: false,
  }
);
