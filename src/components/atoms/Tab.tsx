type Props = {
  label: string;
  id: string;
  selected?: boolean;
  onClick?: (id: string) => void;
};

export const Tab = ({ label, selected, onClick }: Props) => {
  return (
    <button
      onClick={() => {
        onClick && onClick(label);
      }}
      className={`px-[14px] transition-all py-4 relative before:transition-all  ${
        selected
          ? "bg-primary shadow-[inset_0px_1px_0px_highlight] before:content-[''] before:absolute before:w-full before:h-[2px] before:left-0 before:top-0 before:shadow-[0px_0px_10px_highlight]"
          : "bg-secondary text-textMuted shadow-[inset_0px_0px_0px_highlight] before:shadow-[0px_0px_0px_highlight]"
      }`}
    >
      {label}
    </button>
  );
};
