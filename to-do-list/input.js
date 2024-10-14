import { getHTMLElement } from "./util.js";

class Input {
	constructor(placeholder, submitHandler) {
		this.htmlElement = this.getInputElement(placeholder); // assume I have an HTML element here
		this.setupSubmit(submitHandler);
	}

	getInputElement(placeholder) {
		const htmlStr = `<input placeholder="${placeholder}"/>`;
		return getHTMLElement(htmlStr);
	}

	setupSubmit(submitHandler) {
		this.htmlElement.addEventListener("change", (e) => {
			submitHandler(e);
			this.htmlElement.value = "";
		}); // todo check if bind needed
	}
}

export { Input };
