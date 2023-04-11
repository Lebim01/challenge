type Props = {
  className?: string;
  horizontal?: boolean;
  vertical?: boolean;
};

export const Line = ({ className, horizontal = true, vertical }: Props) => {
  return (
    <div
      className={`${horizontal ? "w-[2px] h-full" : ""} ${
        vertical ? "h-[2px] w-full" : ""
      } bg-textMuted ${className}`}
    />
  );
};
