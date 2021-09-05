# react-tehran-map
Tehran's map in SVG format for React JS applications.

![ScreenShot](https://i.imgur.com/ayYXwnn.jpeg "Screenshot")

#### Install
`npm i react-tehran-map`

#### Example

```
import React from 'react';
import { render } from 'react-dom';
import TehranMap from 'react-tehran-map';

render(
  <TehranMap width={1024} onSelect={console.log} />,
  document.getElementById('root')
);
```

#### Props

`width`: To set the map's width and should be `Number`

`onSelect`: To get the selected area's code and should be `Function`
