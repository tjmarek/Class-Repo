// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
var outputNum;

switch(operand) {
  case "add":
    outputNum = parseInt(num1) + parseInt(num2);
    break;
  case "subtract":
    outputNum = parseInt(num1) - parseInt(num2);
    break;
  case "multiply":
    outputNum = parseInt(num1) * parseInt(num2);
    break;
  case "divide":
    outputNum = parseInt(num1) / parseInt(num2);
    break;
  case "power":
    outputNum = Math.pow(parseInt(num1), parseInt(num2));
    break;
  default:
    console.log("Not a valid command");
}

console.log(outputNum);