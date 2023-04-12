"use client";

import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";
import { Table } from "../molecules/table/Table";
import { useCicadaContext } from "@/context/CicadaContext";
import { NumberDiff } from "../atoms/NumberDiff";
import { useTranslation } from "@/utils/i18n/useTranslation";

export const HistoricPricesTable = () => {
  const { pairJoined } = useCicadaContext();
  const { data } = useCicadaHistorical(pairJoined);
  const t = useTranslation();

  const tableData = Object.values(data?.["Time Series FX (Daily)"] || {}).map(
    (item) => {
      return {
        Date: data?.["Meta Data"]["5. Last Refreshed"] || "loading",
        High: item["2. high"],
        Low: item["3. low"],
      };
    }
  );

  return (
    <Table
      data={tableData}
      title={t("historicPrices")}
      render={(key, value) => {
        if (key === "Date") {
          return `${value}`;
        }
        return <NumberDiff value={+value} />;
      }}
    />
  );
};
