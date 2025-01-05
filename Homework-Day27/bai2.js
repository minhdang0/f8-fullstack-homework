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

const flattenCategories = (arr, parentId = 0) => {
    if (!Array.ísArray(arr) && arr.length === 0 ) {
        return "Valid input";
    }
    const result = arr.reduce((acc, cur) =>{
        const {id, name, children } = cur;
        acc.push({id,name,parentId});

        if(children) {
            acc = acc.concat(flattenCategories(children, id))
        }

        return acc;
    }, [])

    return result;
}

console.log(flattenCategories(categories));