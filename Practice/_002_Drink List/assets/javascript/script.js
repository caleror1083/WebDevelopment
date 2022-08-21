var drinkList = []; // declaring an array
var drinkDiv;

// initializing the variable with an array of strings
drinkList = ["Coffee: $5",
             "Espresso: $7",
             "Cappuccino: $6",
             "Latte: $4",
             "Tea: $3",
             "Ice Coffee: $6",
             "Ice Espresso: $8",
             "Ice Latte: $6",
             "Ice Tea: $4"];

drinkDiv = document.getElementById("drink-options"); // gets the div element in the HTML document

// iterate through the drinkList array
for (var i = 0; i < drinkList.length; i++)
    {
	    var newDrink = document.createElement("p"); // for each drink in the array, create a new paragraph to hold the text during each iteration
	    newDrink.textContent = drinkList[i];        // assign the text of the paragraph to be the text in the array
	    drinkDiv.appendChild(newDrink);             // add the paragraph to the main div on the HTML page
    }