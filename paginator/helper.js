export function getHTMLElement(string) {
	const range = document.createRange();
	return range.createContextualFragment(string).children[0];
}
