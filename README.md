## 🗺️ react-tehran-map

Tehran's map in SVG format for React JS applications.
\
\
**Note:** This library works with React versions `^18.0.0` and `^19.0.0`
\
\
![npm version](https://img.shields.io/npm/v/react-tehran-map)
![npm downloads](https://img.shields.io/npm/dm/react-tehran-map)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-tehran-map)
\
\
\
![react-tehran-map](https://raw.githubusercontent.com/buglessir/react-tehran-map/main/assets/react-tehran-map.webp)

## Install
Run the following command to install:

`npm i react-tehran-map`

## Props

| Prop | Type | Default | Description |
|------|--------|----------|-------------|
| **width** | `number` | 800 | Sets the map width. (px) |
| **defaultAreas** | `number[]` | [] | Pre-selected area IDs. |
| **fillColor** | `string` | `#CCD1D1` | Background color of areas. |
| **hoverColor** | `string` | `#C1C1C1` | Background color on hover. |
| **selectedColor** | `string` | `#58D68D` | Background color for selected areas. |
| **textColor** | `string` | `#000000` | Text (label) color for areas. |
| **textFontSize** | `number` | `14` | Font size of area labels. |
| **textFontFamily** | `string` | `sans-serif` | Font family for area labels. |
| **onSelect** | `(areas: number[]) => void` | `console.log` | Callback when areas are selected. |

## Example

```javascript
import TehranMap from 'react-tehran-map';

const App = () => {
  return (
    <TehranMap defaultAreas={[5]} onSelect={console.log} />
  )
}

export default App;
```

## Demo

In order to start the demo version, run the following commands:

```
npm run build
cd ./example
npm i
npm run dev
```
The example project uses **Vite** in background and the output will be here by default: `http://localhost:5173/`
