function isTriangle(a, b, c) {
    if ( a + b > c && a + c > b && b + c > a) {
        return true;
    }
    return false;
}

const a = parseFloat(prompt("Nhập cạnh a"));
const b = parseFloat(prompt("Nhập cạnh b"));
const c = parseFloat(prompt("Nhập cạnh c"));

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log("Vui lòng nhập các giá trị hợp lệ và lớn hơn 0!");
} else {
    if (isTriangle(a, b, c)) {
        console.log(`Ba cạnh ${a}, ${b}, ${c} là 3 cạnh của một tam giác`);
    } else {
        console.log(`Ba cạnh ${a}, ${b}, ${c} không phải là 3 cạnh của một tam giác`);
    }
}