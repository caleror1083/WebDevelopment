let age = window.prompt("How old are you?");    // Receives user input by assigning the value entered to a variable via a windows prompt

console.log("Before conversion age is of type", typeof age);
age = Number(age);    // Converts the String value entered into a Number type
console.log("After conversion age is of type", typeof age);
console.log("");
age += 9;

console.log("Happy birthday! You are", age, "years old");    // Displays the value of the variable to the console window