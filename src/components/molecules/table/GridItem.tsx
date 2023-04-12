export const GridItem = ({
  index,
  children,
  col,
  row,
  size,
  className,
}: {
  index: number;
  children: React.ReactNode;
  col: number;
  row: number;
  size: number;
  className?: string;
}) => (
  <div
    className={className}
    style={{
      gridRow: row,
      gridColumn: col,
      textAlign: index === size - 1 ? "right" : index === 0 ? "left" : "right",
    }}
    key={`value-${index}`}
  >
    {children}
  </div>
);
