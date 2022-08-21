$(document).ready(function()
    {
		// variable declarations for trackng the nubmer of sandwiches eaten
        var pbjCounter;
		var grilledCheeseCounter;
		var roastBeefCounter;

		pbjCounter = 0;
		grilledCheeseCounter = 0;
		roastBeefCounter = 0;

	    // onClick function which captures the Peanut Butter Jelly click
		$("#pbj").on("click", function()
			{
			    alert("Mmm... Peanut Butter Jelly Time.");              // creates an alert
			    pbjCounter++;                                           // updates the counter
			    alert("You've eaten " + pbjCounter + " PB&J sandwiches"); // show the updated count
		    });

		// onClick function which captures the Grilled Cheese click
		$("#grilledcheese").on("click", function()
			{
			    alert("Nom nom nom. Gooey gooey grilled cheese!.");              // creates an alert
			    grilledCheeseCounter++;                                           // updates the counter
			    alert("You've eaten " + grilledCheeseCounter + " Grilled cheese sandwiches"); // show the updated count
		    });

	    // onClick function which captures the Roast beef click
		$("#roastbeef").on("click", function()
			{
			    alert("No qualms about animal rights here. I'm all about that roast beef.");              // creates an alert
			    roastBeefCounter++;                                           // updates the counter
			    alert("You've eaten " + roastBeefCounter + " Roast beef sandwiches"); // show the updated count
		    });
    });