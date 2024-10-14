const items = [
	"okaxis",
	"BARODAMPAY",
	"rbl",
	"upi",
	"allbank",
	"aubank",
	"axisbank",
	"bandhan",
	"indus",
	"kbl",
	"federal",
	"sbi",
	"yesbank",
	"citi",
	"citigold",
	"dlb",
	"dbs",
	"freecharge",
	"hsbc",
	"icici",
	"kotak",
	"paytm",
	"ybl",
	"okhdfcbank",
	"okicici",
	"oksbi",
	"axl",
	"ibl",
	"sib",
];

// todo change to real api call
// function fetchData(query) {
// 	const result = [];
// 	items.map((item) => {
// 		if (item.indexOf(query) != -1) {
// 			result.push(item);
// 		}
// 	});
// 	return result;
// }
async function fetchData(query) {
	const res = await fetch("https://dummyjson.com/products/search?q=" + query);
	const data = await res.json();
	return data.products.map((product) => product.title);
}
export { fetchData };
