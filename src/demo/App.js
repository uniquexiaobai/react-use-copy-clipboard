import React from 'react';
import { useCopyClipboard } from '../lib';

const App = () => {
	const [isCopied, setCopied] = useCopyClipboard('initial text');

	const handleClick = () => {
		setCopied('text');
	};

	return (
		<button onClick={handleClick}>Was it copied? {isCopied ? 'Yes! 👍' : 'Nope! 👎'}</button>
	);
};

export default App;
