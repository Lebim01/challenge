"use client";

import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";
import { Table } from "../molecules/table/Table";
import { useCicadaContext } from "@/context/CicadaContext";
import { NumberDiff } from "../atoms/NumberDiff";
import { useTranslation } from "@/utils/i18n/useTranslation";

export const DailyTrendTable = () => {
  const { pairJoined } = useCicadaContext();
  const { data } = useCicadaHistorical(pairJoined);
  const t = useTranslation();

  const tableData = Object.values(data?.["Time Series FX (Daily)"] || {}).map(
    (item) => {
      return {
        [t("date")]: data?.["Meta Data"]["5. Last Refreshed"] || "loading",
        [t("open")]: item["1. open"],
        [t("close")]: item["4. close"],
        [t("difference")]: +item["4. close"] - +item["1. open"],
      };
    }
  );

  return (
    <Table
      data={tableData}
      title={t("dailyTrend")}
      render={(key, value) => {
        if (key === t("date")) {
          return `${value}`;
        }
        if (key === t("difference")) {
          return <NumberDiff value={+value} diff={+value} />;
        }
        return <NumberDiff value={+value} />;
      }}
    />
  );
};
