type Props = {
  children: React.ReactNode;
  label: string;
  underline?: boolean;
  position?: "center" | "right" | "left";
};

export const DataLabel = ({
  label,
  children,
  underline,
  position = "right",
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        position === "center"
          ? "items-center"
          : position === "left"
          ? "items-start"
          : "items-end"
      }`}
    >
      <label
        className={`text-xs pb-1 text-textMuted ${underline ? "border-b" : ""}`}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
