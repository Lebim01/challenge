import { DataLabel } from "@/components/atoms/DataLabel";
import { useCicadaContext } from "@/context/CicadaContext";
import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";

import { useTranslation } from "@/utils/i18n/useTranslation";
import { useMemo } from "react";

export const LastUpdate = () => {
  const { pairJoined } = useCicadaContext();
  const t = useTranslation();

  const { data: historicData } = useCicadaHistorical(pairJoined);

  const rate = useMemo(() => {
    if (!historicData) return "00:00:00";

    return historicData["Meta Data"]["5. Last Refreshed"];
  }, [historicData]);

  return <DataLabel label={t("lastUpdate")}>{rate}</DataLabel>;
};
