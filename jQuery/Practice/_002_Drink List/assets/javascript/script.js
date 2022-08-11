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

		for (var x = 0; x < drinkList.length; x++)
			{
				var newDiv = $("<div>");
				newDiv.text(drinkList[x]);
				$("#drink-options").append(newDiv);
			}
    });