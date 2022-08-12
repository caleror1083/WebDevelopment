let a, b, c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));    // Hypotenuse equals the square root of a squared + b squared

console.log("The hypotenuse of this right triangle is:", c);