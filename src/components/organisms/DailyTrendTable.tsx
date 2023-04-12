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
        Date: data?.["Meta Data"]["5. Last Refreshed"] || "loading",
        Open: item["1. open"],
        Close: item["4. close"],
        Difference: +item["4. close"] - +item["1. open"],
      };
    }
  );

  return (
    <Table
      data={tableData}
      title={t("dailyTrend")}
      render={(key, value) => {
        if (key === "Date") {
          return `${value}`;
        }
        if (key === "Difference") {
          return <NumberDiff value={+value} diff={+value} />;
        }
        return <NumberDiff value={+value} />;
      }}
    />
  );
};
