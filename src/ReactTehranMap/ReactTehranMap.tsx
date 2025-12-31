import React, { useCallback } from "react";
import { IReactTehranMap } from "./types";
import { TEHRAN_PATHS, TEHRAN_TEXTS } from "./constants/map";
import { useAreaSelection } from "./hooks/useAreaSelection";

export const ReactTehranMap = ({
  width = 800,
  defaultAreas = [],
  fillColor = "#CCD1D1",
  hoverColor = "#C1C1C1",
  selectedColor = "#58D68D",
  textColor = "#000000",
  textFontSize = 14,
  textFontFamily = "sans-serif",
  onSelect = console.log
}: IReactTehranMap) => {
  const { selected, toggle } = useAreaSelection(defaultAreas);

  const toPersianNumbers = useCallback((input: number): string => {
    return input.toString().replace(/\d/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'[+d]);
  }, []);

  return (
    <svg width={width} viewBox="0 0 900 600">
      {TEHRAN_PATHS.map((path, i) => {
        const id = i + 1;
        const isSelected = selected.includes(id);
        return (
          <path
            d={path}
            style={{
              fill: isSelected ? selectedColor : fillColor,
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              if (!isSelected) e.currentTarget.style.fill = hoverColor;
            }}
            onMouseLeave={e => {
              if (!isSelected) e.currentTarget.style.fill = fillColor;
            }}
            onClick={() => {
              toggle(id);
              const next = selected.includes(id)
                ? selected.filter(a => a !== id)
                : [...selected, id];
              onSelect?.(next);
            }}
            className={`react-tehran-map__area ${isSelected ? 'react-tehran-map__area--selected' : ''}`}
            key={`react-tehran-map-path-${id}`}
          />
        );
      })}

      {/* --- RENDER TEXT LABELS --- */}
      {TEHRAN_TEXTS.map((item, index) => (
        <text
          className="react-tehran-map__code"
          transform={item}
          style={{
            fill: textColor,
            pointerEvents: 'none',
            fontSize: textFontSize,
            fontFamily: textFontFamily
          }}
          key={`react-tehran-map-text-${index}`}
        >
          {toPersianNumbers(index + 1)}
        </text>
      ))}
    </svg>
  );
};
