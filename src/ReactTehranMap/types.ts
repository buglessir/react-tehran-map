export interface IReactTehranMap {
  width?: number;
  defaultAreas?: number[];

  fillColor?: string;
  hoverColor?: string;
  selectedColor?: string;

  textColor?: string;
  textFontSize?: number;
  textFontFamily?: string;

  onSelect?: (areas: number[]) => void;
}
