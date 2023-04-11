import { Spinner } from "./Spinner";

type Props = {
  children: React.ReactNode;
  label: string;
  underline?: boolean;
  position?: "center" | "right" | "left";
  className?: string;
  loading?: boolean;
};

export const DataLabel = ({
  label,
  children,
  underline,
  position = "right",
  className,
  loading,
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        position === "center"
          ? "items-center"
          : position === "left"
          ? "items-start"
          : "items-end"
      } ${className}`}
    >
      <label
        className={`text-xs pb-1 select-none text-textMuted ${
          underline ? "border-b" : ""
        }`}
      >
        {label}
      </label>
      {!loading ? children : <Spinner />}
    </div>
  );
};
