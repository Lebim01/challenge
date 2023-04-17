import { Namespace } from "i18next";

import enLang from '@/utils/i18n/locales/en/ns1.json'
import esLang from '@/utils/i18n/locales/es/ns1.json'

export type AvailableLanguages = "en" | "es";
export type AvailableNamespaces = "ns1";

export const fallbackLng: AvailableLanguages = "en";
export const languages: AvailableLanguages[] = [fallbackLng, "es"];
export const defaultNS: AvailableNamespaces = "ns1";

export type l18Values = Namespace<"ns1">;

export const getOptions = (
  lng: AvailableLanguages = fallbackLng,
  ns = defaultNS
) => {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    resources: {
      en: {ns1: enLang},
      es: {ns1: esLang}
    }
  };
};
