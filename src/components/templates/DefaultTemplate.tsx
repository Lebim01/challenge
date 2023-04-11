import { PairMenu } from "../organisms/PairMenu";

export const DefaultTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="px-12 py-6">
      <PairMenu />
      {children}
    </main>
  );
};
