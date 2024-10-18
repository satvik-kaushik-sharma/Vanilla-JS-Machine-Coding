import { Paginator } from "./paginator.js";
import { ProductCard } from "./product-card.js";

document.addEventListener("DOMContentLoaded", async () => {
	const productGridRef = document.querySelector(".product-grid");
	const paginatorRef = document.querySelector(".paginator-container");

	const fetchProducts = async (pageNumber) => {
		const productData = await fetch(
			"https://dummyjson.com/products?limit=10&skip=" + (pageNumber - 1) * 10
		).then((res) => res.json());
		const cards = [];
		productData.products.map((product) => {
			cards.push(new ProductCard(product).cardElement);
		});
		productGridRef.replaceChildren(...cards);
		renderPaginator(
			pageNumber,
			Math.ceil(productData.total / 10),
			onPageChange
		);
	};

	const onPageChange = (selectedPage) => {
		console.log(selectedPage);
		fetchProducts(selectedPage);
	};

	const renderPaginator = (currentPage, totalPages, onPageChange) => {
		const paginator = new Paginator(currentPage, totalPages, onPageChange);

		paginatorRef.replaceChildren(paginator.paginatorElement);
	};

	fetchProducts(1);
});
