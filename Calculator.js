function calculate(num1,operator,num2){
    return "Error:Invalid operator";
}
if(num1=="number" || num2=="number"|| Array.isArray(num1) || Array.isArray(num2)){
    return "Error:Invalid input";
}
switch(operator){
    case "+": //Addition
    return num1 +num2;
    case "-": //Subtraction
    return num1 - num2;
    case "*": //Multiplication
    return num1 * num2;
    case "/": //Division
    if(num2==0){
    return "Error: Division by zero";
    }
    return num1 / num2;
    default:
    return "Error: Invalid operator";
    case "%": //Modulus
    return num1 % num2;
}
console.log(calculate(10, "+", 5)); // Output: 15
console.log(calculate(10, "-", 5)); // Output: 5
console.log(calculate(10, "*", 5)); // Output: 50
console.log(calculate(10, "/", 5)); // Output: 2
console.log(calculate(10, "/", 0)); // Output: Error: Division by zero
console.log(calculate(10, "%", 3)); // Output: 1

c  