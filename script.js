function getNumbers() {
    const num1 = parseFloat(document.getElementById("first-number").value);
    const num2 = parseFloat(document.getElementById("second-number").value);
    return { num1, num2 };
}

function displayResult(result) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = String(result);
    
    if (result < 0) {
        outputElement.style.color = "red";
        outputElement.style.backgroundColor = "lightcoral";
    } else {
        outputElement.style.color = "black";
        outputElement.style.backgroundColor = "transparent";
    }
}

function addition() {
    const { num1, num2 } = getNumbers();
    displayResult(num1 + num2);
}

function subtraction() {
    const { num1, num2 } = getNumbers();
    displayResult(num1 - num2);
}

function multiplication() {
    const { num1, num2 } = getNumbers();
    displayResult(num1 * num2);
}

function division() {
    const { num1, num2 } = getNumbers();
    if (num2 === 0) {
        displayResult("Error: Division by zero");
    } else {
        displayResult(num1 / num2);
    }
}

function power() {
    const { num1, num2 } = getNumbers();
    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }
    displayResult(result);
}

function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black";
    document.getElementById("output").style.backgroundColor = "transparent";
}
