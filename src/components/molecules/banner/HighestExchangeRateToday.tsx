import { DataLabel } from "@/components/atoms/DataLabel";
import { NumberDiff } from "@/components/atoms/NumberDiff";
import { useCicadaContext } from "@/context/CicadaContext";
import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";
import { getTodayHistorical } from "@/utils/api/todayHistorical";
import { useTranslation } from "@/utils/i18n/useTranslation";
import { useMemo } from "react";

export const HighestExchagengeRateToday = () => {
  const { pairJoined } = useCicadaContext();
  const t = useTranslation();

  const { data: historicData, isLoading } = useCicadaHistorical(pairJoined);

  const rate = useMemo(() => {
    if (!historicData) return 0;
    const data = getTodayHistorical(historicData);
    return Number(data["2. high"]);
  }, [historicData]);

  return (
    <DataLabel loading={isLoading} label={t("highestExchagengeRateToday")}>
      <NumberDiff value={rate} />
    </DataLabel>
  );
};
