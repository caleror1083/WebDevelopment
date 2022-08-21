$(document).ready(function()
    {
        $("#drink-options").html("<h1>Drink Selection!</h1><hr />");

	    // Array holds all of the drinks available
    	var drinkList = ["Coffee: $5",
                    	 "Espresso: $7",
		                 "Cappuccino: $6",
		                 "Latte: $4",
		                 "Tea: $3",
		                 "Ice Coffee: $6",
		                 "Ice Espresso: $8",
		                 "Ice Latte: $6",
		                 "Ice Tea: $4"];  

	    var drinkDiv = $("#drink-options");  // selects the drink-options div element

	    // iterates through the total drink list
		for (var i = 0; i < drinkList.length; i++)
			{
				var newDiv = $("<div>" + drinkList[i] + "</div>");  // create a new div for each drink
				drinkDiv.append(newDiv);  // add the ne div to the drinklist div
			}
    });