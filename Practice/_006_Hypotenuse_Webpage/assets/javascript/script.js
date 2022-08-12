// Robert Calero
// Finding the hypotenuse of a right triangle

let a;
let b;
let c;

document.getElementById("submit").onclick = function()
    {
        a = document.getElementById("textboxA").value;
        a = Number(a);

        b = document.getElementById("textboxB").value;
        b = Number(b);

        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));    // Hypotenuse equals the square root of a squared + b squared

        document.getElementById("labelC").innerHTML = "The hypotenuse of this right triangle is: " + c;
    }