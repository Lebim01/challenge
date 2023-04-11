export type AvailableLanguages = "en" | "es";
export type AvailableNamespaces = "ns1";

export const fallbackLng: AvailableLanguages = "en";
export const languages: AvailableLanguages[] = [fallbackLng, "es"];
export const defaultNS: AvailableNamespaces = "ns1";

export const getOptions = (lng = fallbackLng, ns = defaultNS) => {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
};
