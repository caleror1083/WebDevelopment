$(function()    // "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
    {
	    // So $("#id|.class|element").on("action", function(){});
        $("#click-me").on("click", function()
		    {
                alert("I've been clicked!");
            });
    });