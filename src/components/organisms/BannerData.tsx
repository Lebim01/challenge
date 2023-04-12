"use client";

import { useTranslation } from "@/utils/i18n/useTranslation";
import { Box } from "../atoms/Box";
import { DataLabel } from "../atoms/DataLabel";
import { useCicadaContext } from "@/context/CicadaContext";
import { Line } from "../atoms/Line";
import { HighestExchagengeRateToday } from "../molecules/banner/HighestExchangeRateToday";
import { LowestExchagengeRateToday } from "../molecules/banner/LowestExchangeRateToday";
import { LastUpdate } from "../molecules/banner/LastUpdate";
import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";
import { ErrorLabel } from "../atoms/ErrorLabel";
import { CurrentExchangeRateValue } from "../molecules/banner/CurrentExchangeRateValue";
import { useCicadaSub } from "@/hooks/useCicadaSub";

export const BannerData = () => {
  const { pair, pairJoined } = useCicadaContext();
  const { isError: subError } = useCicadaSub(pairJoined);
  const t = useTranslation();
  const { isError: historicError } = useCicadaHistorical(pairJoined);
  return (
    <div className="flex flex-col gap-2">
      {(historicError || subError) && (
        <ErrorLabel>
          We couldn&apos;t get today&apos;s data for {pair}
        </ErrorLabel>
      )}

      <Box border className="flex px-2 p-3 w-full">
        <div className="flex justify-between flex-grow">
          <DataLabel label={t("currencyPair")} underline position="left">
            <span className="text-textPrimary">{pair}</span>
          </DataLabel>
        </div>
        <div className="flex gap-4">
          <CurrentExchangeRateValue />

          {!historicError && (
            <>
              <Line />
              <HighestExchagengeRateToday />
              <Line />
              <LowestExchagengeRateToday />
              <Line />
              <LastUpdate />
            </>
          )}
        </div>
      </Box>
    </div>
  );
};
