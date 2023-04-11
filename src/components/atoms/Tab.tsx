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
      className={`px-[14px] transition-all py-4  ${
        selected
          ? "bg-primary shadow-[inset_0px_1px_0px_highlight]"
          : "bg-secondary text-textmuted shadow-[inset_0px_0px_0px_highlight]"
      }`}
    >
      {label}
    </button>
  );
};
