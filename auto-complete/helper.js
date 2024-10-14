import { fetchData } from "./api.js";

function getHTMLElement(htmlString) {
	const range = document.createRange();
	return range.createContextualFragment(htmlString).children[0];
}

function debounce(cb) {
	return cb; // todo
}

function search(query) {
	if (!query || query.length === 0) return [];
	return fetchData(query);
}

const debouncedSearch = debounce(search);

export { getHTMLElement, debouncedSearch };
