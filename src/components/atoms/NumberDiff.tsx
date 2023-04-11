type Props = {
  value: number;
  diff?: number;
  glow?: boolean;
};
export const NumberDiff = ({ diff = 0, value, glow }: Props) => {
  const isLower = diff < 0;
  const isHigher = diff > 0;
  return (
    <span
      className={`
      ${
        glow
          ? `text-shadow ${
              isLower
                ? "shadow-numbers-incorrect"
                : isHigher
                ? "shadow-numbers-correct"
                : "shadow-text"
            }`
          : ""
      }
      ${
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
