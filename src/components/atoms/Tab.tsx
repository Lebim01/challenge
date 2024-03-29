"use client";

import { cssvar } from "@/utils/colors";

type Props = {
  label: string;
  id: string;
  selected?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (id: string) => void;
  invalid?: boolean;
};

export const Tab = ({ label, selected, onClick, invalid }: Props) => {
  return (
    <button
      disabled={invalid}
      onClick={() => {
        onClick && onClick(label);
      }}
      className={`px-[14px] transition-all py-4 relative before:transition-all whitespace-nowrap ${
        invalid ? "cursor-not-allowed opacity-40" : ""
      }  ${
        selected
          ? `bg-primary ${
              invalid
                ? "outline outline-1 outline-numbers-incorrect"
                : "shadow-[inset_0px_1px_0px] before:shadow-[0px_0px_10px]"
            } before:content-[''] before:absolute before:w-full before:h-[2px] before:left-0 before:top-0`
          : "bg-secondary text-textMuted shadow-[inset_0px_0px_0px] before:shadow-[0px_0px_0px]"
      }`}
      style={{
        color: cssvar("--twc-highlight"),
      }}
    >
      <span className="text-text">{label}</span>
    </button>
  );
};
