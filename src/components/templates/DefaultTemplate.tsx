import { BannerData } from "../organisms/BannerData";
import { DailyTrendTable } from "../organisms/DailyTrendTable";
import { HistoricPricesTable } from "../organisms/HistoricPricesTable";
import { PairMenu } from "../organisms/PairMenu";
import { ChangeLanguage } from "../molecules/lang/ChangeLanguage";
import { HistoricalChart } from "../organisms/HistoricalChart";

export const DefaultTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="px-12 py-6 pb-[10px] flex flex-col gap-14 h-full overflow-auto">
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
      {children}
    </main>
  );
};
