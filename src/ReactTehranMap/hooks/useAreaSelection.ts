import { useCallback, useState } from "react";

export const useAreaSelection = (defaultAreas: number[]) => {
  const [selected, setSelected] = useState<number[]>(defaultAreas);

  const toggle = useCallback((id: number) => {
    setSelected((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((a: number) => a !== id)
        : [...prev, id]
    );
  }, []);

  return { selected, toggle, setSelected };
};
