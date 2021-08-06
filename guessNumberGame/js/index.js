var arr = [];

const checkNum = (value, errorId) => {
    const pattern = /^([1-9][0-9]?|100)$/g;
    if (pattern.test(value)) {
        document.querySelector(errorId).innerHTML = "";
        return true;
    }
    document.querySelector(errorId).style.display = "inline";
    return false;
}

const checkText = (value, errorId) => {
    if (value.length >= 0 || value > 0) {
        document.querySelector(errorId).innerHTML = "";
        return true;
    }
    document.querySelector(errorId).style.display = "inline";
    return false;
}

const validate = () => {
    const userNumber = +document.querySelector("#txtNumber").value;

    let isValid = true;

    isValid &= checkText(userNumber, "#notNullError")
    isValid &= checkNum(userNumber, "#onlyNumberError");

    return isValid;
}

const addNum = () => {
    if (!validate()) {
        alert("Lỗi, xin thử lại");
    }
    else {
        const userNumber = +document.querySelector("#txtNumber").value;
        var newNum = new Number(userNumber);
        if (userNumber !== 0 && userNumber > 0) {
            arr.push(newNum.value);
        }
        if (arr.length <= 3) {
            localStorage.setItem("guessNum", arr);
        }
        // document.querySelector("#firstGuess").innerHTML = "Lần 1 :" + new;

        if (arr.length === 1) {
            document.querySelector("#firstGuess").innerHTML = `Lần 1 : ${arr[0]}`;
        }
        else if (arr.length === 2) {
            document.querySelector("#secondGuess").innerHTML = `Lần 2 : ${arr[1]}`;
        }
        else if (arr.length == 3) {
            document.querySelector("#thirdGuess").innerHTML = `Lần 3 : ${arr[2]}`;
            document.querySelector("#txtNumber").value = "";
            setTimeout(() => {
                localStorage.clear();
                location.reload()
                alert("Tự động reset history khi đủ 3 lần bạn nhé");
                document.querySelector("#firstGuess").innerHTML = "";
                document.querySelector("#secondGuess").innerHTML = "";
                document.querySelector("#thirdGuess").innerHTML = "";
            }, 5000);
        }
        if (arr.length > 3) {
            alert("Do quá 3 lần, sẽ Reset History bạn nhé");
            localStorage.clear();
            location.reload();
            document.querySelector("#firstGuess").innerHTML = "";
            document.querySelector("#secondGuess").innerHTML = "";
            document.querySelector("#thirdGuess").innerHTML = "";
            document.querySelector("#txtResult").innerHTML = "none";
        }
    }


}


const randomNumber = () => {
    if (!validate()) {
        return;
    }
    else {
        let guessNumber = Math.round(Math.random() * 100);
        console.log(guessNumber);
        document.querySelector("#txtResult").style.display = "inline";
        document.querySelector("#txtResult").innerHTML = `Đáp án quay số lần này : ${guessNumber}`
        const userNumber = +document.querySelector("#txtNumber").value;
        document.querySelector("#txtHigh").style.display = "none";
        document.querySelector("#txtLow").style.display = "none";
        document.querySelector("#txtBingo").style.display = "none";

        if (userNumber < guessNumber && userNumber !== 0) {
            document.querySelector("#txtLow").style.display = "block";
            document.querySelector("#txtLow").style.color = "red";
        }
        else if (userNumber > guessNumber && userNumber <= 100) {
            document.querySelector("#txtHigh").style.display = "block";
            document.querySelector("#txtHigh").style.color = "red";
        }
        else if (userNumber === guessNumber) {
            document.querySelector("#txtBingo").style.display = "block";
            document.querySelector("#txtBingo").style.color = "red";
            alert("Trúng rồi !!!!!!!")
        }
    }


}




