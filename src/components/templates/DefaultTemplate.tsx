import { BannerData } from "../organisms/BannerData";
import { DailyTrendTable } from "../organisms/DailyTrendTable";
import { HistoricPricesTable } from "../organisms/HistoricPricesTable";
import { PairMenu } from "../organisms/PairMenu";

export const DefaultTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="px-12 py-6 flex flex-col gap-14">
      <div className="flex flex-col gap-9">
        <PairMenu />
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

      {children}
    </main>
  );
};
