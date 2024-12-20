const products = [
	{
		id: 1,
		name: "Apple iPhone 12",
		price: 1000,
	},
	{
		id: 2,
		name: "Samsung Galaxy S21",
		price: 900,
	},
	{
		id: 3,
		name: "Xiaomi Mi 11",
		price: 800,
	},
	{
		id: 4,
		name: "Apple iPhone 11",
		price: 700,
	},
	{
		id: 5,
		name: "Samsung Galaxy S20",
		price: 600,
	},
	{
		id: 6,
		name: "Xiaomi Mi 10",
		price: 500,
	},
];

const getTopProducts = (products, top) => {
	if (!Array.isArray(products) || isNaN(top) || !Number.isInteger(top) || top < 0) {
		console.log("Sai dữ liệu đầu vào")
		return;
	}

    const topProduct = [];

    while (topProduct.length < top){
        
        let maxIndex = 0; 

        for ( let i = 1; i < products.length; i++){
            if (products[i].price > products[maxIndex].price) {
                maxIndex = i;
            }
        }

        topProduct.push(products[maxIndex]);

        products.splice(maxIndex,1)
    }

    return topProduct;

}

const result = getTopProducts(products, 3);
console.log(result);