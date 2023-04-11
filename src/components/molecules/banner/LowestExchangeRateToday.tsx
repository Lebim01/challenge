import { DataLabel } from "@/components/atoms/DataLabel";
import { NumberDiff } from "@/components/atoms/NumberDiff";
import { useCicadaContext } from "@/context/CicadaContext";
import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";
import { getTodayHistorical } from "@/utils/api/todayHistorical";
import { useTranslation } from "@/utils/i18n/useTranslation";
import { useMemo } from "react";

export const LowestExchagengeRateToday = () => {
  const { pairJoined } = useCicadaContext();
  const t = useTranslation();

  const { data: historicData } = useCicadaHistorical(pairJoined);

  const rate = useMemo(() => {
    if (!historicData) return 0;
    const data = getTodayHistorical(historicData);
    return Number(data["3. low"]);
  }, [historicData]);

  return (
    <DataLabel label={t("lowestExchangeRateToday")}>
      <NumberDiff value={rate} />
    </DataLabel>
  );
};
