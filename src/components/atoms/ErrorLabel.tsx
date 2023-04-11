import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const ErrorLabel = ({ children, className }: Props) => {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    setShowing(true);
  }, []);

  return (
    <div
      className={`bg-numbers-incorrect rounded-sm p-1 transition-all text-text ${
        showing ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};
