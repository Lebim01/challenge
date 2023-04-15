import { CICADA_HISTORICAL_ENDPOINT } from "@/const/cicadaEndpoints";
import { useCicadaContext } from "@/context/CicadaContext";
import { CicadaHistorical } from "@/types";
import { useQuery } from "react-query";

export const useCicadaHistorical = (pair?: string) => {
  const { setInvalidPairs } = useCicadaContext();
  return useQuery(
    ["cicadaHistorical", pair],
    async () => {
      const response = await fetch(`${CICADA_HISTORICAL_ENDPOINT}/${pair}`);
      if (!response.ok) throw new Error(response.statusText);
      return (await response.json()) as CicadaHistorical;
    },
    {
      enabled: !!pair,
      retry: false,
      onError: () => {
        if (!pair) return;
        setInvalidPairs((prev) => [...prev, pair]);
      },
    }
  );
};
