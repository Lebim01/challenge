import { DataLabel } from "@/components/atoms/DataLabel";
import { NumberDiff } from "@/components/atoms/NumberDiff";
import { useCicadaContext } from "@/context/CicadaContext";
import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";
import { useCicadaSub } from "@/hooks/useCicadaSub";
import { getTodayHistorical } from "@/utils/api/todayHistorical";
import { useTranslation } from "@/utils/i18n/useTranslation";

export const CurrentExhcangeRateValue = () => {
  const { pairJoined } = useCicadaContext();
  const { isLoading, data } = useCicadaSub(pairJoined);
  const { data: historicalData } = useCicadaHistorical(pairJoined);
  const t = useTranslation();

  const current = historicalData && getTodayHistorical(historicalData);
  const diff = Number(data?.value) - Number(current?.["1. open"]);

  return (
    <DataLabel loading={isLoading} label={t("currentExchangeRateValue")}>
      <NumberDiff value={data?.value || 0} diff={diff} glow />
    </DataLabel>
  );
};
