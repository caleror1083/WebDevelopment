// Thanks to jQuery's handy $ selector ... we have a wealth of new methods for selecting and manipulating HTML.
$("#empty-div").html("<h1>Hello friends!</h1>");    // Here we are using jQuery's .HTML method to instantly select and change the contents of our empty-div.
// $("#empty-div").append("A pleasure to meet you!");    // We can just as easily append a new line using a similarly simple .append method.

// If we needed each line to be its own div, we could just as easily create a new div.
var newDiv = $("<div>");    // jQuery alternative to: var newDiv = document.createElement("div");
newDiv.text("A pleasure to meet you!");    // jQuery alternative to: newDiv.textContent = "A pleasure to meet you!";

/* NOTICE THE DIFFERENCE
   $("#empty-div") <--FIND a DOM node with the ID empty-div
   $("<div>")      <-- CREATE a new DIV
*/

$("#empty-div").append(newDiv);    // We can then  append it to the other div using the same ".append" method. jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
newDiv.attr("class", "fancy");    // If we need to apply some CSS, we can quickly do so, using the jQuery ".attr" method.