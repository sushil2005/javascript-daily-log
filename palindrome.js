function checkPalindrome() {
    let text = document.getElementById("inputText").value;
    let reversed = text.split("").reverse().join("");

    if (text === reversed) {
        document.getElementById("result").innerHTML =
            text + " is a Palindrome.";
    } else {
        document.getElementById("result").innerHTML =
            text + " is not a Palindrome.";
    }
}