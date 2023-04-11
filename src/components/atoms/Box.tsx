type Props = {
  children: React.ReactNode;
  border?: boolean;
  className?: string;
};

export const Box = ({ children, border, className }: Props) => {
  return (
    <div
      className={`bg-content ${
        border ? "border border-contentBorder" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
