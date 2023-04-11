"use client";

import { useTranslation } from "@/utils/i18n/useTranslation";
import { Box } from "../atoms/Box";

export const BannerData = () => {
  const [t] = useTranslation("en", "ns1");
  return (
    <Box border className="flex px-2 p-3">
      {t("currencyPair")}
    </Box>
  );
};
