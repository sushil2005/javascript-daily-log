function checkArmstrong() {
    let numStr = document.getElementById("num").value;
    let digits = numStr.length;
    let sum = 0;

    for (let i = 0; i < digits; i++) {
        sum += Math.pow(Number(numStr[i]), digits);
    }

    if (sum === Number(numStr)) {
        document.getElementById("result").innerHTML =
            numStr + " is an Armstrong Number";
    } else {
        document.getElementById("result").innerHTML =
            numStr + " is NOT an Armstrong Number";
    }
}