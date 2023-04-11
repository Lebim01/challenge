type Props = {
  children: React.ReactNode;
  label: string;
  underline?: boolean;
};

export const DataLabel = ({ label, children, underline }: Props) => {
  <div>
    <label
      className={`text-xs text-textSecondary ${
        underline ? "shadow:[inset_0px_-1px_0px_text]" : ""
      }`}
    >
      {label}
    </label>
  </div>;
};
