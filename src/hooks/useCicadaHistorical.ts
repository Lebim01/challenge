import { CICADA_HISTORICAL_ENDPOINT } from "@/const/cicadaEndpoints";
import { CicadaHistorical } from "@/types";
import { useQuery } from "react-query";

export const useCicadaHistorical = (pair?: string) => {
  return useQuery(
    ["cicadaHistorical", pair],
    async () => {
      const response = await fetch(`${CICADA_HISTORICAL_ENDPOINT}/${pair}`);
      return (await response.json()) as CicadaHistorical;
    },
    { enabled: !!pair }
  );
};
