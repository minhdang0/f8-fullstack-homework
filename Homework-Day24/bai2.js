function fibonacci(n) {
    if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
        console.log("Số phần tử không hợp lệ");
        return;
    }

    const accResult = Array.from({length:n});
    // console.log(accResult); // [underfined x n ]

    const result = accResult.reduce((acc, _, i) => {
        if (i === 0) {
            acc.push(0);
        } else if (i === 1) {
            acc.push(1);
        } else {
            acc.push(acc[i - 1] + acc[i - 2]);
        }
        return acc;
    }, []);

    console.log(result.join(" "));
}
let n = parseInt(prompt("Nhập số phần tử trong dãy fibonaci"));
// Output:
fibonacci(n); 

