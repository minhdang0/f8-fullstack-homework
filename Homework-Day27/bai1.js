const data = [
	{
		id: 1,
		name: "Chuyên mục 1",
		parent: 0,
	},
	{
		id: 2,
		name: "Chuyên mục 2",
		parent: 0,
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		parent: 0,
	},
	{
		id: 4,
		name: "Chuyên mục 2.1",
		parent: 2,
	},
	{
		id: 5,
		name: "Chuyên mục 2.2",
		parent: 2,
	},
	{
		id: 6,
		name: "Chuyên mục 2.3",
		parent: 2,
	},
	{
		id: 7,
		name: "Chuyên mục 3.1",
		parent: 3,
	},
	{
		id: 8,
		name: "Chuyên mục 3.2",
		parent: 3,
	},
	{
		id: 9,
		name: "Chuyên mục 3.3",
		parent: 3,
	},
	{
		id: 10,
		name: "Chuyên mục 2.2.1",
		parent: 5,
	},
	{
		id: 11,
		name: "Chuyên mục 2.2.2",
		parent: 5,
	},
];

const convertNested = (data, parent = 0) => {
	if(Array.isArray(data) && data.length === 0) {
		return "Valid input";
	}
    const result = data.filter((item) => item.parent === parent  ).map((item) => {
		const children = convertNested(data, item.id);
        const newObj =  {
            id: item.id,
            name:item.name,
        }

		if (children.length > 0 ) {
			newObj.children = children;
		}

		return newObj;
    })
    
	return result;
}

console.log(convertNested(data));