import { Input } from "./input.js";
import { Item } from "./item.js";

document.addEventListener("DOMContentLoaded", () => {
	const inputContainer = document.querySelector(".input-container");
	const listContainer = document
		.querySelector(".items-container")
		.querySelector("ul");

	const newToDoSubmitHandler = (e) => {
		console.log(e);
		// create new to do using event value and append to document
		const item = new Item(e.target.value);
		listContainer.append(item.htmlElement);
	};

	const newToDoInput = new Input("Enter New ToDo...", newToDoSubmitHandler);

	const frag = document.createDocumentFragment();
	frag.appendChild(newToDoInput.htmlElement);
	inputContainer.append(frag);

	// console.log(newToDoInput.htmlElement);
	const item = new Item("Vanilla JS MC");
	listContainer.append(item.htmlElement);
});
