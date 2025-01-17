const countElements = (tagname) => {
    const isValidTag = document.createElement(tagname).toString() !== "[object HTMLUnknownElement]";

    if (!isValidTag) {
        return `Invalid: "${tagname}"  card ís not exist.`;
    }
    const result = document.querySelectorAll(tagname);
    return result.length;
}

console.log(countElements("div"));
console.log(countElements("p"));
console.log(countElements("psdfgs"));