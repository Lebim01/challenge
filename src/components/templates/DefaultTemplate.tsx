export const DefaultTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="px-12 py-6 pb-[10px] flex flex-col gap-14 h-full overflow-auto">
      {children}
    </main>
  );
};
