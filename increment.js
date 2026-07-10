function increaseValue() {

    let value = parseInt(document.getElementById("count").value);

    value = value + 1;

    document.getElementById("count").value = value;

}