const calculateBill = () => {
    let totalBill = parseFloat(document.getElementById('totalBill').value);
    let peopleCount = parseInt(document.getElementById('peopleCount').value);
    let tipAmount = parseFloat(document.getElementById('tipAmount').value) || 0;

    document.getElementById('errorTotalBill').innerText = "";
    document.getElementById('errorPeopleCount').innerText = "";
    document.getElementById('errorTipAmount').innerText = "";

    let isValid = true;
    if (isNaN(totalBill) || totalBill <= 0) {
        document.getElementById('errorTotalBill').innerText = "Tong bill phai lon hon 0";
        isValid = false;
    }

    if (isNaN(peopleCount) || peopleCount <= 0 || !Number.isInteger(peopleCount)) {
        document.getElementById('errorPeopleCount').innerText = "So nguoi la so nguyen len hon 0";
        isValid = false;
    }

    if (tipAmount < 0 || tipAmount > totalBill) {
        document.getElementById('errorTipAmount').innerText = "Tien tip phai duong va nho hon tong bill";
        isValid = false;
    }

    if (!isValid) return; 

    let totalToPay = totalBill + tipAmount;
    let perPerson = totalToPay / peopleCount;

    document.getElementById('perPerson').innerText = `Mỗi người cần trả: ${perPerson.toFixed(2)} VND`;
    document.getElementById('totalAmount').innerText = `Tổng số tiền cần trả: ${totalToPay.toFixed(2)} VND`;
}