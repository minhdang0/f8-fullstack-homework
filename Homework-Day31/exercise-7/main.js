const calculate = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.querySelector('input[name="operation"]:checked');
    let result = document.getElementById("result");
    let error = document.getElementById("error-message");

    if(isNaN(num1) || isNaN(num2)) {
        error.textContent = "Vui long nhap so";
        result.value = "";
        return;
    }

    if (!operation) {
        error.textContent = "Vui long chon 1 phep tinh";
        result.value = "";
        return;
    }

    let resultFinal;
    switch(operation.value) {
        case "add":
            resultFinal = num1 + num2;
            break;
        case "subtract":
            resultFinal = num1 - num2;
            break;
        case "multiply":
            resultFinal = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                errorMessage.textContent = "Không thể chia cho 0!";
                result.value = "";
                return;
            }
            resultFinal = (num1 / num2).toFixed(5);
            break;
        default:
            result = "Lỗi!";
    }
    result.value = resultFinal;
    error.textContent = " ";
}