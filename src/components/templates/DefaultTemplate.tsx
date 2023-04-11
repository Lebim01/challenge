import { BannerData } from "../organisms/BannerData";
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

      {children}
    </main>
  );
};
