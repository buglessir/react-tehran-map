## react-tehran-map

Tehran's map in SVG format for React JS applications.
\
\
\
![react-tehran-map](https://github.com/user-attachments/assets/7dbece18-c2ff-475b-9485-d833272814e7)

#### Install
`npm i react-tehran-map`

#### Props

`width`: To set the map's width - `width?: number`

`defaultAreas`: Default selected areas - `defaultAreas?: number[]`

`fillColor`: Area background-color (default: `#CCD1D1`) - `fillColor?: string`

`hoverColor`: Area mouse hover background-color (default: `#C1C1C1`) - `hoverColor?: string`

`selectedColor`: Area selected background-color (default: `#58D68D`) - `selectedColor?: string`

`textColor`: Area label text color (default: `#000000`) - `textColor?: string`

`textFontSize`: Area label text font-size (default: `14`) - `textFontSize?: number`

`textFontFamily`: Area label text font-family (default: `sans-serif`) - `textFontFamily?: number`

`onSelect`: On-select area function (default: `console.log`) - `onSelect?: (areas: number[]) => void`

#### Example

```
import TehranMap from 'react-tehran-map';

const App = () => {
  return (
    <TehranMap defaultAreas={[5]} onSelect={console.log} />
  )
}

export default App;
```

#### Demo

In order to start the demo version, run the following commands:

```
npm run build
cd ./example
npm i
npm run dev
```
The example project uses **Vite** in background and the output will be here by default: `http://localhost:5173/`