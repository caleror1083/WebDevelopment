// Variable declarations and initializations
var targetDiv = document.getElementById("empty-div");  // vGrab the "empty-div" div id from the HTML page using the getElementById selector.
var newDiv = document.createElement("div");  // Create a new div called "newDiv" using the createElement selector

// Process
targetDiv.textContent = "Hello friends!";  // Using property textContent to change the content to "Hello friends!"
newDiv.textContent = "A pleasure to meet you!";
targetDiv.appendChild(newDiv);  // Using the appendChild method to combine the two divs together on the page.
newDiv.setAttribute("class", "fancy");    // We then apply CSS to our newDiv.