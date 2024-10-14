import { getHTMLElement } from "./helper.js";

// todo add loading state
// add keyboard navigation + selection
export class SuggestionList {
	constructor(selectionHandler) {
		this.selectionHandler = selectionHandler;
		this.listContainerElement =
			this.getListContainerElement().querySelector(".item");
	}

	getListContainerElement() {
		const htmlString = `<div class="list-container">
        <ul class="item">
        </ul>
      </div>`;
		return getHTMLElement(htmlString);
	}

	updateList(query, list) {
		const listElements = list.map((item) => {
			const split = item.split(new RegExp(`(${query})`, "gi")).map((part) => {
				if (part.toLowerCase() === query.toLowerCase()) {
					return `<span class="f-700">${part}</span>`;
				}
				return part;
			});
			const htmlString = `<li tabIndex="0">${split.join("")}</li>`;
			const liElement = getHTMLElement(htmlString);
			liElement.addEventListener("click", () => {
				console.log(liElement);
				this.selectionHandler(item);
			});
			liElement.addEventListener("keyup", (e) => {
				if (e.key === "Enter") {
					console.log(liElement);
					this.selectionHandler(item);
				}
			});
			return liElement;
		});
		this.listContainerElement.replaceChildren(...listElements);
	}
}
