/*  jQuery syntax
    $(selector).action()

    $ define/access jQuery
    (selector) to query or find HTML elements
    action() jQuery method to be performed on the element

    Examples
    $(this).hide() - hides the current element
    $("p").hide() - hides all <p> elements
    $(".test").hide() - hides all elements with class="test"
    $("#test").hide() - hides the element with id="test".
*/

$(document).ready(function () {
    $("#empty-div").html("<h1>Hello friends!</h1>");

    var newDiv = $("<div>");    // jQuery alternative to: var newDiv = document.createElement("div");
    newDiv.text("A pleasure to meet you!");    // jQuery alternative to: newDiv.textContent = "A pleasure to meet you!";
    $("#empty-div").append(newDiv);    // We can then  append it to the other div using the same ".append" method. jQuery alternative to: document.querySelector("#empty-div").appendChild(newDiv);
    newDiv.attr("class", "fancy");    // If we need to apply some CSS, we can quickly do so, using the jQuery ".attr" method.
});