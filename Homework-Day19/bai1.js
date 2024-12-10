function calSquare(n){
    for (let i = 1; i * i <= n; i++) {
        console.log(i * i); 
    }
}

let n = parseInt(prompt("Nhập số tự nhiên"));
if(isNaN(n) || n<=0 || !isFinite(n)) {
    console.log("Nhập sai dữ liệu");
} else {
    calSquare(n);
}