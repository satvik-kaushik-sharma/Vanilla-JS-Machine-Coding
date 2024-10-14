function getHTMLElement(htmlString) {
	const range = document.createRange();
	return range.createContextualFragment(htmlString).children[0];
}

export { getHTMLElement };
