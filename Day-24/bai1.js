
// Input:
const fruits = ["apple", "banana", "kiwi", "kiwi", "banana", "orange", "apple", "kiwi"];
// const push = "mkk";
function removeDuplicate(arr) {
    if (!Array.isArray(arr)) {
        return "Du lieu sai!";
    }
	return arr.reduce((arr,cur) => {
        if (arr.includes(cur)) {
            return arr;
        }
        
        arr.push(cur);

        return arr;
    },[])
}

// Output:

const result = removeDuplicate(fruits);

console.log(result); // ["apple", "banana", "kiwi", "orange"]
