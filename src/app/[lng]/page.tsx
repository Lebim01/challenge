"use client";

import { BannerData } from "@/components/organisms/BannerData";
import { Configuration } from "@/components/organisms/Configuration";
import { DailyTrendTable } from "@/components/organisms/DailyTrendTable";
import { HistoricPricesTable } from "@/components/organisms/HistoricPricesTable";
import { HistoricalChart } from "@/components/organisms/HistoricalChart";
import { PairMenu } from "@/components/organisms/PairMenu";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="flex flex-col md:flex-row justify-between lg:items-center">
          <PairMenu />
          <Configuration />
        </div>
        <BannerData />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-9">
        <div className="lg:w-1/2">
          <HistoricPricesTable />
        </div>
        <div className="lg:w-1/2">
          <DailyTrendTable />
        </div>
      </div>

      <HistoricalChart />
    </>
  );
}
