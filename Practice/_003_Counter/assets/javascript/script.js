// Robert Calero
// Displaying a counter

let counter = 0;

document.getElementById("btnDecrease").onclick = function()
    {
        counter -= 1;
        document.getElementById("lblCounter").innerHTML = counter; 
    }

document.getElementById("btnReset").onclick = function()
    {
        counter = 0;
        document.getElementById("lblCounter").innerHTML = counter; 
    }

document.getElementById("btnIncrease").onclick = function()
    {
        counter += 1;
        document.getElementById("lblCounter").innerHTML = counter; 
    }