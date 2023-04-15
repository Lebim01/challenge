"use client";

import { ChangeLanguage } from "@/components/molecules/lang/ChangeLanguage";
import { BannerData } from "@/components/organisms/BannerData";
import { DailyTrendTable } from "@/components/organisms/DailyTrendTable";
import { HistoricPricesTable } from "@/components/organisms/HistoricPricesTable";
import { HistoricalChart } from "@/components/organisms/HistoricalChart";
import { PairMenu } from "@/components/organisms/PairMenu";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="flex justify-between">
          <PairMenu /> <ChangeLanguage />
        </div>
        <BannerData />
      </div>

      <div className="flex justify-between gap-9">
        <div className="w-1/2">
          <HistoricPricesTable />
        </div>
        <div className="w-1/2">
          <DailyTrendTable />
        </div>
      </div>

      <HistoricalChart />
    </>
  );
}
