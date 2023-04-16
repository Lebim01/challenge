import { useCicadaPairs } from "@/hooks/useCicadaPairs";
import { AvailableLanguages } from "@/utils/i18n/settings";
import { Themes, getStorageTheme, setStorageTheme } from "@/utils/theme/theme";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type CicadaContextState = {
  pair?: string;
  pairJoined?: string;
  setPair: Dispatch<SetStateAction<string | undefined>>;
  invalidPairs?: string[];
  setInvalidPairs: Dispatch<SetStateAction<string[]>>;
  lang: AvailableLanguages;
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
};

export const CicadaContext = createContext<CicadaContextState>({
  setPair: () => {},
  setInvalidPairs: () => {},
  lang: "en",
  theme: "theme-default",
  setTheme: () => {},
});

export const useCicadaContext = () => {
  return useContext(CicadaContext);
};

export const CicadaContextProvider = ({
  children,
  lng,
}: {
  children: React.ReactNode;
  lng: AvailableLanguages;
}) => {
  const { data: pairsAvailable } = useCicadaPairs();
  const [pair, setPair] = useState<string>();
  const [invalidPairs, setInvalidPairs] = useState<string[]>([]);
  const [theme, setTheme] = useState<Themes>(getStorageTheme());
  const router = useRouter();

  useEffect(() => {
    // select the first pair if none is selected
    if (pair) return;
    if (pairsAvailable) {
      setPair(pairsAvailable[0].label);
    }
  }, [pairsAvailable, pair]);

  useEffect(() => {
    const current = getStorageTheme();
    if (current === theme) return;
    setStorageTheme(theme);
    router.refresh();
  }, [theme, router]);
  return (
    <CicadaContext.Provider
      value={{
        pair,
        pairJoined: pair?.replace("-", ""),
        setPair,
        invalidPairs,
        setInvalidPairs,
        lang: lng,
        theme,
        setTheme,
      }}
    >
      {children}
    </CicadaContext.Provider>
  );
};
