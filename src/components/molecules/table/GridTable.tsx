export const GridTable = ({
  children,
  size,
  className,
}: {
  children: React.ReactNode;
  size: number;
  className?: string;
}) => (
  <div
    className={className}
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${size}, 1fr)`,
    }}
  >
    {children}
  </div>
);
