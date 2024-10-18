// need to re-render page buttons on page selection to show nearby buttons

import { getHTMLElement } from "./helper.js";

// generate pages - need a mechanism to notify user on page change
// render buttons for movement & page buttons
export class Paginator {
	constructor(currentPage, totalPages, onPageChange) {
		this.paginatorElement = Paginator.getPaginatorElement();
		console.log(currentPage);

		this.currentPage = currentPage; // todo implement functionality
		this.buttons = this.generateButtons(this.currentPage, totalPages);

		this.buttons.map((button) => {
			this.paginatorElement.appendChild(button.buttonElement);
		});

		this.paginatorElement.addEventListener("click", (event) => {
			const element = event.target.closest(".page-button");
			const pageClicked = element.dataset.buttonNumber;
			if (pageClicked === this.currentPage) return;
			onPageChange(+pageClicked);
		});
	}

	static getPaginatorElement() {
		const htmlString = `<div class="buttons"></div>`;
		return getHTMLElement(htmlString);
	}

	generateButtons(currentPage, totalPages) {
		const maxButtons = 5;
		const start = Math.max(1, Math.floor(currentPage - maxButtons / 2));
		const end = Math.min(totalPages, start + maxButtons - 1);
		const buttons = [];

		// also include arrow buttons & truncation
		if (start !== 1) {
			const button = new PageButton(1, 1 === currentPage);
			buttons.push(button);
		}
		for (let i = Math.max(1, start); i <= end; i++) {
			const button = new PageButton(i, i === currentPage);
			buttons.push(button);
		}
		if (end !== totalPages) {
			const button = new PageButton(totalPages, totalPages === currentPage);
			buttons.push(button);
		}
		if (end) return buttons;
	}
}

// use event propagation - to efficiently capture events - only have one event attached on parent component
// use data-button-number to capture which button was clicked

class PageButton {
	constructor(pageNumber, isActive) {
		this.buttonElement = PageButton.getButtonElement(pageNumber, isActive);
	}

	static getButtonElement(pageNumber, isActive) {
		const htmlString = `
    <div class="page-button" data-is-active=${isActive} data-button-number = ${pageNumber}>
      <button >${pageNumber}</button>
		</div>
    `;
		return getHTMLElement(htmlString);
	}
}
