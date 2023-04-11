"use client";

import { useTranslation } from "@/utils/i18n/useTranslation";
import { Box } from "../atoms/Box";
import { DataLabel } from "../atoms/DataLabel";
import { useCicadaContext } from "@/context/CicadaContext";
import { NumberDiff } from "../atoms/NumberDiff";
import { Line } from "../atoms/Line";
import { HighestExchagengeRateToday } from "../molecules/banner/HighestExchangeRateToday";
import { LowestExchagengeRateToday } from "../molecules/banner/LowestExchangeRateToday";
import { LastUpdate } from "../molecules/banner/LastUpdate";

export const BannerData = () => {
  const { pair } = useCicadaContext();
  const t = useTranslation("en", "ns1");

  return (
    <Box border className="flex px-2 p-3 w-full">
      <div className="flex justify-between flex-grow">
        <DataLabel label={t("currencyPair")} underline position="left">
          <span className="text-textPrimary">{pair}</span>
        </DataLabel>
      </div>
      <div className="flex gap-4">
        <DataLabel label={t("currentExchangeRateValue")}>
          <NumberDiff glow value={0} diff={1} />
        </DataLabel>
        <Line />
        <HighestExchagengeRateToday />
        <Line />
        <LowestExchagengeRateToday />
        <Line />
        <LastUpdate />
      </div>
    </Box>
  );
};
