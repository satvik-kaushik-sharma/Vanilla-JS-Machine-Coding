import { getHTMLElement } from "./helper.js";

export class Input {
	constructor(changeHandler) {
		this.inputElement = this.getInputElement(changeHandler);
	}

	getInputElement(changeHandler) {
		const htmlString = `<input placeholder="Type..."/>`;
		const inputElement = getHTMLElement(htmlString);
		inputElement.addEventListener("input", changeHandler);
		return inputElement;
	}
}
