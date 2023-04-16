"use client";

import { ChangeLanguage } from "@/components/molecules/config/ChangeLanguage";
import { ChangeTheme } from "@/components/molecules/config/ChangeTheme";
import { BannerData } from "@/components/organisms/BannerData";
import { DailyTrendTable } from "@/components/organisms/DailyTrendTable";
import { HistoricPricesTable } from "@/components/organisms/HistoricPricesTable";
import { HistoricalChart } from "@/components/organisms/HistoricalChart";
import { PairMenu } from "@/components/organisms/PairMenu";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="flex flex-col md:flex-row justify-between">
          <PairMenu />
          <div>
            <ChangeLanguage />
            <ChangeTheme />
          </div>
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
