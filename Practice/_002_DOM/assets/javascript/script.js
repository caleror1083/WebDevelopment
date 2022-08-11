var targetDiv = document.getElementById("drink-options");
var drinkList = ["Coffee: $5", "Espresso: $7", "Cappuccino: $6", "Latte: $4", "Tea: $3", "Ice Coffee: $6", "Ice Espresso: $8", "Ice Latte: $6", "Ice Tea: $4"];  // Array holds all of the drinks available

for (var x = 0; x < drinkList.length; x++)
    {
	    targetDiv.textContent = drinkList[x];
	}