import { CicadaPair } from "@/types";
import { CICADA_PAIRS_ENDPOINT } from "@/const/cicadaEndpoints";
import { useQuery } from "react-query";

export const endpointsKey = "endpoints";

export const useCicadaPairs = () => {
  return useQuery(endpointsKey, async () => {
    const response = await fetch(CICADA_PAIRS_ENDPOINT);
    const data = await response.json();
    return data as CicadaPair[];
  });
};
