window.alert("Hello Fellow People")
console.log("Welcome To My Calculator")



let firstNumber = "";
let secondNumber = "";
let operation = ""; // inclues the + - * /

//function for the numbers being pressed
function pressNumber(num) {
    if (operation === "") {
        firstNumber += num;
        document.getElementById("theDisplay").innerHTML = firstNumber;
    }
    else {
        secondNumber += num;
        document.getElementById("theDisplay").innerHTML = secondNumber;
    }
        updateDisplay();
    console.log("First # = ", firstNumber, "second # = ", secondNumber);
}

function setOperation(op){
    operation = op;
    updateDisplay();
    console.log("Operation set to: " + operation);
    
}
//function when clicking the equals sign 
function calculateResult() {
    let result;

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);


    if(operation === "+"){
        result = num1 + num2;
    } 

    if(operation === "-"){
        result = num1 - num2;
    } 

    if(operation === "*"){
        result = num1 * num2;
    } 

    if(operation === "/"){
        result = num1 / num2;
    } 

    

    document.getElementById("theDisplay").innerHTML = result;
    console.log("result: ", result, );

    //This resets the numbers and allows the user to work with different choices
    firstNumber = "";
    secondNumber = "";
    operation = "";

}

//function when clicking clear
function clearDisplay() {
    firstNumber = "";
    secondNumber = "";
    operation = "";

    document.getElementById("theDisplay").innerHTML = "0";

    console.log("calc cleared");

}

//function for updating the display with the operator and second number 
function updateDisplay() {
    let originalDisplay = firstNumber;

    if(operation !== ""){
        originalDisplay += operation;
    }
    if (secondNumber !== ""){
        originalDisplay += secondNumber;
    }

    document.getElementById("theDisplay").innerHTML = originalDisplay;

}


