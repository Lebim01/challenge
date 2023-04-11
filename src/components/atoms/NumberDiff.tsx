type Props = {
  value: number;
  diff?: number;
};
export const NumberDiff = ({ diff = 0, value }: Props) => {
  const isLower = diff < 0;
  const isHigher = diff > 0;
  return (
    <span
      className={`${
        isLower
          ? "text-numbers-incorrect"
          : isHigher
          ? "text-numbers-correct"
          : "text-text"
      }`}
    >
      {value}
    </span>
  );
};
