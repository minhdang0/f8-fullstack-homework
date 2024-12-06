let a = 7;
let b = 4;
let c = 10;
console.log("Thứ tự ban đầu", a, b, c)
let temp;
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}
console.log("Thứ tự tăng dần", a, b, c)