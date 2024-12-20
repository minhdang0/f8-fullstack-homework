const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];

console.log()
const flattenCategories = (categories, level = 0) => {
	if(!Array.isArray(categories))
	{
		console.log("Sai dữ liệu đầu vào!");
		return;
	}

    let result = [];

    for (let i = 0 ; i < categories.length ; i++) {
        const {id, name} = categories[i];
        result.push({id,name,level});

        if(categories[i].children) {
            result = result.concat(flattenCategories(categories[i].children, level + 1 ))
        }
    }

    return result;
}

const newArray = flattenCategories(categories);
console.log(newArray);

const getCategoryName = (categories, categoryId) =>{
	if(!Array.isArray(categories))
		{
			console.log("Sai dữ liệu đầu vào!");
			return;
		}
    const result = categories.find((categories) => categories.id === categoryId);

    if (!result) return null;

    return result.name;
}

console.log(getCategoryName(newArray, 3)); // Output: "Apple"
console.log(getCategoryName(newArray, 10)); // Output: "Non-Fiction"
console.log(getCategoryName(newArray, 99)); // Output: null
