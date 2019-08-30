import React, { useState } from 'react'

const copy = (text) => {
	document.addEventListener('copy', function onCopy(e) {
		e.clipboardData.setData('text/plain', text);
		e.preventDefault();
		document.removeEventListener('copy', onCopy);
	});

	return document.execCommand('copy');
}

export const useCopyClipboard = (text) => {
	const [isCopied, setCopied] = useState(false);

	return [
		isCopied,
		() => {
			const didCopy = copy(text);
			return setCopied(didCopy);
		}
	];
}
