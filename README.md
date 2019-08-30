# @lokibai/react-use-copy-clipboard

> copy clipboard

[![NPM](https://img.shields.io/npm/v/@lokibai/react-use-copy-clipboard.svg)](https://www.npmjs.com/package/@lokibai/react-use-copy-clipboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @lokibai/react-use-copy-clipboard
```

## Usage

```jsx
import React, { Component } from 'react'
import { useCopyClipboard } from '@lokibai/react-use-copy-clipboard'

const App = () => {
    const [isCopied, setCopied] = useCopyClipboard('hello world');

	return (
		<button onClick={setCopied}>
			Was it copied? {isCopied ? 'Yes! 👍' : 'Nope! 👎'}
		</button>
	);
}
```

## License

MIT © [](https://github.com/)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
