import { useCicadaContext } from "@/context/CicadaContext";
import { AvailableLanguages } from "@/utils/i18n/settings";
import { useTranslation } from "@/utils/i18n/useTranslation";

export const ChangeLanguage = () => {
  const t = useTranslation();
  return (
    <div className="flex gap-2">
      <LanguageItem lang="en" label={t("English")} />
      <LanguageItem lang="es" label={t("Spanish")} />
    </div>
  );
};

const LanguageItem = ({
  lang,
  label,
}: {
  lang: AvailableLanguages;
  label: string;
}) => {
  const { lang: currentLang } = useCicadaContext();
  return (
    <a
      className={`${
        lang === currentLang ? "opacity-100" : "opacity-50"
      } transition-opacity`}
      href={`${lang}`}
    >
      {label}
    </a>
  );
};
