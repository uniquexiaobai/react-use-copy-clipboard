import { useState } from 'react';

const copyPolyfill = text => {
	const textArea = document.createElement('textarea');

	textArea.style.position = 'absolute';
	textArea.style.top = '-9999px';
	textArea.style.left = '-9999px';
	textArea.value = text;

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		return document.execCommand('copy');
	} catch (err) {
		console.log(err);
		return false;
	} finally {
		document.body.removeChild(textArea);
	}
};

const copy = text => {
	document.addEventListener('copy', function onCopy(e) {
		e.clipboardData.setData('text/plain', text);
		e.preventDefault();
		document.removeEventListener('copy', onCopy);
	});

	let isCopied;

	try {
		isCopied = document.execCommand('copy');
	} catch (err) {
		isCopied = false;
		console.log(err);
	}

	if (!isCopied) {
		isCopied = copyPolyfill();
	}

	return isCopied;
};

const useCopyClipboard = initialText => {
	const [isCopied, setCopied] = useState(false);

	return [
		isCopied,
		(text = initialText) => {
			const didCopy = copy(text);
			return setCopied(didCopy);
		},
	];
};

export default useCopyClipboard;
