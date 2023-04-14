"use client";

import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { AvailableNamespaces, getOptions } from "./settings";
import { useCicadaContext } from "@/context/CicadaContext";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: any, namespace: any) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init(getOptions());

export function useTranslation() {
  const { lang } = useCicadaContext();

  const ns: AvailableNamespaces = "ns1";
  if (i18next.resolvedLanguage !== lang) i18next.changeLanguage(lang);
  return useTranslationOrg(ns)[0];
}
