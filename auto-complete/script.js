import { debouncedSearch } from "./helper.js";
import { Input } from "./input.js";
import { SuggestionList } from "./suggestion.js";

document.addEventListener("DOMContentLoaded", () => {
	const container = document.querySelector(".container");
	console.log(container);
	const onSelection = (selectedText) => {
		input.inputElement.value = selectedText;
		suggestionList.updateList("", []);
		input.inputElement.focus();
	};
	const suggestionList = new SuggestionList(onSelection);
	const inputChangeHandler = async (e) => {
		const results = await debouncedSearch(e.target.value);
		suggestionList.updateList(e.target.value, results);
	};
	const input = new Input(inputChangeHandler);
	container.appendChild(input.inputElement);
	container.appendChild(suggestionList.listContainerElement);
});
