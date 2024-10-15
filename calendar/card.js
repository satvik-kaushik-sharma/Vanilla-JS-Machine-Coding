import { getHTMLElement, processTime } from "./helper.js";

export class EventCard {
	constructor(event) {
		this.event = event;
		const start = processTime(event.startTime);
		const end = processTime(event.endTime);
		this.event.top = start * 40; // add offset for previous div's of 18px
		this.event.height = (end - start) * 40;
		this.cardElement = this.getCardElement();
	}

	getCardElement() {
		console.log(this.event, processTime(this.event.startTime));

		const htmlStr = `<div style="top: ${this.event.top}px; height: ${
			this.event.height
		}px; background-color: ${this.event.color}; width: ${
			100 / (this.event.overlapCount + 1)
		}%" class="card">
        <span>
          ${this.event.startTime} - ${this.event.endTime}
        </span>
    </div>`;
		return getHTMLElement(htmlStr);
	}
}
