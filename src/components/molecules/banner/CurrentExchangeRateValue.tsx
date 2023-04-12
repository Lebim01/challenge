import { DataLabel } from "@/components/atoms/DataLabel";
import { NumberDiff } from "@/components/atoms/NumberDiff";
import { useCicadaContext } from "@/context/CicadaContext";
import { useCicadaSub } from "@/hooks/useCicadaSub";
import { useTranslation } from "@/utils/i18n/useTranslation";

export const CurrentExhcangeRateValue = () => {
  const { pairJoined } = useCicadaContext();
  const { isLoading, data } = useCicadaSub(pairJoined);
  const t = useTranslation();

  return (
    <DataLabel loading={isLoading} label={t("currentExchangeRateValue")}>
      <NumberDiff value={data?.value || 0} glow />
    </DataLabel>
  );
};
