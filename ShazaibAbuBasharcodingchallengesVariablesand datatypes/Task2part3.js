let operation = prompt(`Enter operation you wanna perform 
+  For Addition
-  For Subtraction
*  For Multiplication
/  For Divison`);
if (operation == "+") {
  console.log("You choose Addition");
  let firstNum = prompt("Enter first Number");
  let secondNum = prompt("Enter second Number");
  console.log(
    "The addition of two numbers is",
    parseInt(firstNum) + parseInt(secondNum)
  );
} else if (operation == "-") {
  console.log("You choose Subtraction");
  let firstNum = prompt("Enter first Number");
  let secondNum = prompt("Enter second Number");
  console.log(
    "The Subtraction of two numbers is",
    parseInt(firstNum) - parseInt(secondNum)
  );
} else if (operation == "*") {
  console.log("You choose Multiplication");
  let firstNum = prompt("Enter first Number");
  let secondNum = prompt("Enter second Number");
  console.log(
    "The multiplication of two numbers is",
    parseInt(firstNum) * parseInt(secondNum)
  );
} else if (operation == "/") {
  console.log("You choose Divsion");
  let firstNum = prompt("Enter first Number");
  let secondNum = prompt("Enter second Number");
  console.log(
    "The Divsion of two numbers is",
    parseInt(firstNum) / parseInt(secondNum)
  );
} else {
  console.log("Wrong Input");
}
