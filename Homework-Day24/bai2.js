function fibonacci(n) {
    if (typeof n !== "number" || n <= 0 || !Number.isInteger(n)) {
        console.log("Số phần tử không hợp lệ");
        return;
    }

    const accResult = accay.from({length:n});
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

// Output:

fibonacci(5); // 0 1 1 2 3

fibonacci(10); // 0 1 1 2 3 5 8 13 21 34

fibonacci(0); // Số phần tử không hợp lệ

fibonacci(-5); // Số phần tử không hợp lệ

fibonacci("abc"); // Số phần tử không hợp lệ

fibonacci(1); // 0