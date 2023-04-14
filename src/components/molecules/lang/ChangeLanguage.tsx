"use client";

import { useCicadaContext } from "@/context/CicadaContext";
import { useRouter } from "next/navigation";

export const ChangeLanguage = () => {
  const { lang } = useCicadaContext();
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/${lang === "en" ? "es" : "en"}`);
      }}
    >
      change to spanish
    </button>
  );
};
