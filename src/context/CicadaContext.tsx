import { useCicadaPairs } from "@/hooks/useCicadaPairs";
import { createContext, useContext, useEffect, useState } from "react";

export type CicadaContextState = {
  pair?: string;
  setPair: (pair: string) => void;
};

export const CicadaContext = createContext<CicadaContextState>({
  setPair: () => {},
});

export const useCicadaContext = () => {
  return useContext(CicadaContext);
};

export const CicadaContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: pairsAvailable } = useCicadaPairs();
  const [pair, setPair] = useState<string>();

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
        setPair,
      }}
    >
      {children}
    </CicadaContext.Provider>
  );
};
