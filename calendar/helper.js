export const getHTMLElement = (string) => {
	const range = document.createRange();
	return range.createContextualFragment(string).children[0];
};

export const processTime = (time) => {
	const [hour, minutes] = time.split(":");
	return parseInt(hour) + parseInt(minutes) / 60;
};

export const preProcessEvents = (events) => {
	events.sort((a, b) => processTime(a.startTime) - processTime(b.startTime));
	let count = 0,
		maxEnd = processTime(events[0].endTime);
	events[0].overlapCount = 0;
	for (let i = 1; i < events.length; i++) {
		if (processTime(events[i].startTime) < maxEnd) {
			count++;
		} else {
			count = 0;
		}
		maxEnd = Math.max(maxEnd, processTime(events[i].endTime));
		events[i].overlapCount = count;
	}
	// console.log(events);

	return events;
};
