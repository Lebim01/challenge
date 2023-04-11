import { CicadaHistorical } from "@/types";

export const getTodayHistorical = (data: CicadaHistorical) => {
  const entries = Object.values(data?.["Time Series FX (Daily)"] || {});
  return entries[entries.length - 1];
};
