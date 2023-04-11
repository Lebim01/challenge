"use client";

import { useTranslation } from "@/utils/i18n/useTranslation";
import { Box } from "../atoms/Box";
import { DataLabel } from "../atoms/DataLabel";
import { useCicadaContext } from "@/context/CicadaContext";
import { NumberDiff } from "../atoms/NumberDiff";
import { Line } from "../atoms/Line";

export const BannerData = () => {
  const [t] = useTranslation("en", "ns1");
  const { pair } = useCicadaContext();
  return (
    <Box border className="flex px-2 p-3 w-full">
      <div className="flex justify-between flex-grow">
        <DataLabel label={t("currencyPair")} underline position="left">
          <span className="text-textPrimary">{pair}</span>
        </DataLabel>
      </div>
      <div className="flex gap-4">
        <DataLabel label={t("currentExchangeRateValue")}>
          <NumberDiff value={0} diff={1} />
        </DataLabel>
        <Line />
        <DataLabel label={t("highestExchagengeRateToday")}>
          <NumberDiff value={0} diff={1} />
        </DataLabel>
        <Line />
        <DataLabel label={t("lowestExchangeRateToday")}>
          <NumberDiff value={0} diff={1} />
        </DataLabel>
        <Line />
        <DataLabel label={t("lastUpdate") + " (UTC)"}>
          <NumberDiff value={0} diff={1} />
        </DataLabel>
      </div>
    </Box>
  );
};
