import { EventCard } from "./card.js";
import { apiData } from "./event-data.js";
import { getHTMLElement, preProcessEvents } from "./helper.js";

document.addEventListener("DOMContentLoaded", () => {
	const timeContainer = document.querySelector(".time-col");
	const linesContainer = document.querySelector(".lines-col");

	timeContainer.replaceChildren(...generateTimeHTML());
	linesContainer.replaceChildren(...generateLineHTML());
	const frag = document.createDocumentFragment();

	const events = preProcessEvents(apiData);
	events.map((event) => {
		const eventObj = new EventCard(event);
		frag.appendChild(eventObj.cardElement);
	});
	console.log(frag);
	linesContainer.append(frag);
});

function generateLineHTML() {
	const res = [];
	for (let i = 0; i < 24; i++) {
		res.push(generateLineHelper());
	}
	return res;
}

function generateTimeHTML() {
	const timeList = getTimeList();
	const timeElementList = timeList.map((time) => {
		return generateTimeHelper(time);
	});
	return timeElementList;
}

function generateLineHelper() {
	const htmlStr = `<div>
      <hr>
  </div>`;
	return getHTMLElement(htmlStr);
}

function generateTimeHelper(time) {
	const htmlStr = `<div>
      ${time}
  </div>`;
	return getHTMLElement(htmlStr);
}

function getTimeList() {
	const res = [];
	for (let i = 0; i < 24; i++) {
		res.push(`${i}:00`);
	}
	return res;
}
