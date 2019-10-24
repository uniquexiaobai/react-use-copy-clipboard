# @lokibai/react-use-copy-clipboard

> copy to clipboard

[![NPM](https://img.shields.io/npm/v/@lokibai/react-use-copy-clipboard.svg)](https://www.npmjs.com/package/@lokibai/react-use-copy-clipboard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @lokibai/react-use-copy-clipboard
```

## Usage

```jsx
import React from 'react';
import { useCopyClipboard } from '@lokibai/react-use-copy-clipboard';

const App = () => {
	const [isCopied, setCopied] = useCopyClipboard('initial text');

	const handleClick = () => {
		// setCopied('text');
		setCopied();
	};

	return (
		<button onClick={handleClick}>Was it copied? {isCopied ? 'Yes! 👍' : 'Nope! 👎'}</button>
	);
};
```

## License

MIT © [](https://github.com/)

---

This hook is created using [create-react-library](https://github.com/udilia/create-react-library).
