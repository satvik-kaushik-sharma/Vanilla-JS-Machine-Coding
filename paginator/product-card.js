import { getHTMLElement } from "./helper.js";

export class ProductCard {
	constructor(productData) {
		this.productData = productData;
		this.cardElement = ProductCard.getCardElement(this.productData);
	}

	static getCardElement(productData) {
		const htmlString = `
    <div class="product-card">
			<img src="${productData.images.at(0)}" alt="" class="product-card__image" />
			<h2 class="product-card__title">${productData.title}</h2>
		</div>
    `;
		return getHTMLElement(htmlString);
	}
}
