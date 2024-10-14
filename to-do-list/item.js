import { getHTMLElement } from "./util.js";

export class Item {
	constructor(value) {
		this.htmlElement = this.getElement(value);
		this.textElement = this.htmlElement.querySelector("span");
		this.value = value;
		this.isEditState = false;
		this.setupDeleteButton();
		this.setupEditButton();
	}

	getElement(value) {
		const htmlStr = `
      <li>
        <div class="item">
          <span>
            ${value}
          </span>
        </div>
      </li>
    `;
		return getHTMLElement(htmlStr);
	}

	setupDeleteButton() {
		const deleteHandler = () => {
			this.htmlElement.remove();
		};
		const string = "<button>Delete</button>";
		const buttonElement = getHTMLElement(string);
		buttonElement.addEventListener("click", deleteHandler);
		this.htmlElement.querySelector("div").append(buttonElement);
	}

	showEditState() {
		// replace text with populated input
		this.textElement.style.display = "none";
		const editHandler = (e) => {
			this.value = e.target.value;
			console.log(this.value);
			this.closeEditState();
		};
		const editInputStr = `
		  <input value="${this.value}"/>
		`;
		this.editButtonElement.style.display = "none";
		this.editInputElement = getHTMLElement(editInputStr);
		this.editInputElement.addEventListener("change", editHandler);
		this.textElement.replaceWith(this.editInputElement);
		this.editInputElement.focus();
		this.editInputElement.setSelectionRange(
			this.value.length,
			this.value.length
		);
		// show save button
		// hide delete button
	}

	closeEditState() {
		// save text in edit input
		this.textElement.style.display = "block";
		this.editButtonElement.style.display = "block";
		this.textElement.innerText = this.value;
		this.editInputElement.replaceWith(this.textElement);

		// replace input with text
		// show delete button
		// hide save button
	}

	toggleEditState() {
		this.isEditState = true;
		this.isEditState ? this.showEditState() : this.closeEditState();
	}

	setupEditButton() {
		const editHandler = (e) => {
			this.showEditState();
		};

		const editButtonStr = "<button>Edit</button>";
		this.editButtonElement = getHTMLElement(editButtonStr);
		this.editButtonElement.addEventListener("click", editHandler);
		this.htmlElement.querySelector("div").append(this.editButtonElement);
	}
}
