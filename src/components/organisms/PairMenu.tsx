"use client";

import { useCicadaPairs } from "@/hooks/useCicadaPairs";
import { Tab } from "../atoms/Tab";
import { useCicadaContext } from "@/context/CicadaContext";

export const PairMenu = () => {
  const pairs = useCicadaPairs();
  const { setPair, pair: selectedPair, invalidPairs } = useCicadaContext();

  const handleClick = (pairId: string) => {
    setPair(pairId);
  };

  return (
    <div className="flex gap-2 py-2 overflow-auto">
      {pairs.data?.map((pair) => (
        <Tab
          onClick={handleClick}
          id={pair.id}
          invalid={invalidPairs?.includes(pair.label.replace("-", ""))}
          label={pair.label}
          key={pair.id}
          selected={pair.label === selectedPair}
        />
      ))}
    </div>
  );
};
