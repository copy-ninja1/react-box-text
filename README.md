# react-box-text

[![NPM](https://img.shields.io/npm/v/react-box-text.svg)](https://www.npmjs.com/package/react-box-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-box-text
npm insatll --save styled-components
```

## Screenshot Example

![alt text](https://github.com/copy-ninja1/react-box-text/blob/main/image/react-box-text.png?raw=true)

## Demo Example

[Demo](https://codesandbox.io/s/react-box-text-3muwf?file=/src/App.js)

## Props

- `texts`: Array of texts to display (required)
- `backgroundColor`: BackgroundColor of the box. (optional)
- `textColor`: textColor of the texts. (optional)
- `borderColor`: borderColor of the box. (optional)
- `dotColor`: dotColor of the box. (optional)
- `dotSize`: size of the dot in px. (optional)

## Usage

```jsx
import React from "react";
import BoxText from "react-box-text";

const App = () => {
  return (
    <div>
      <BoxText
        textColor="#0088ff"
        dotColor="#0088ff"
        borderColor="#0088ff"
        dotSize={12}
        texts={["Look", "Good"]}
      ></BoxText>
    </div>
  );
};

export default App;
```

Made with :heart:

## License

MIT © [copy-ninja1](https://github.com/copy-ninja1)
