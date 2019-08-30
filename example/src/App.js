import React from 'react'
import { useCopyClipboard } from '@lokibai/react-use-copy-clipboard'

const App = () => {
    const [isCopied, setCopied] = useCopyClipboard('hello world');

	return (
		<button onClick={setCopied}>
			Was it copied? {isCopied ? 'Yes! 👍' : 'Nope! 👎'}
		</button>
	);
}

export default App