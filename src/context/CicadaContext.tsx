import { useCicadaPairs } from "@/hooks/useCicadaPairs";
import { AvailableLanguages } from "@/utils/i18n/settings";
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
};

export const CicadaContext = createContext<CicadaContextState>({
  setPair: () => {},
  setInvalidPairs: () => {},
  lang: "en",
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

  useEffect(() => {
    // select the first pair if none is selected
    if (pair) return;
    if (pairsAvailable) {
      setPair(pairsAvailable[0].label);
    }
  }, [pairsAvailable, pair]);
  return (
    <CicadaContext.Provider
      value={{
        pair,
        pairJoined: pair?.replace("-", ""),
        setPair,
        invalidPairs,
        setInvalidPairs,
        lang: lng,
      }}
    >
      {children}
    </CicadaContext.Provider>
  );
};
