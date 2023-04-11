"use client";

import { useTranslation } from "@/utils/i18n/useTranslation";
import { Box } from "../atoms/Box";
import { DataLabel } from "../atoms/DataLabel";
import { useCicadaContext } from "@/context/CicadaContext";
import { NumberDiff } from "../atoms/NumberDiff";

export const BannerData = () => {
  const [t] = useTranslation("en", "ns1");
  const { pair } = useCicadaContext();
  return (
    <Box border className="flex px-2 p-3 w-full">
      <div className="flex justify-between flex-grow">
        <DataLabel label={t("currencyPair")} underline position="left">
          <span className="text-textPrimary">{pair}</span>
        </DataLabel>
        <DataLabel label={t("currentExchangeRateValue")}>
          <NumberDiff value={0} diff={1} />
        </DataLabel>
      </div>
      <div></div>
    </Box>
  );
};
