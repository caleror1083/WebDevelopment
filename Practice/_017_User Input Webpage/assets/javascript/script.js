let username;

// When the button is clicked, the value of what's in the textbox will be displayed where the label is
document.getElementById("myButton").onclick = function()
    {
        username = document.getElementById("myText").value;    // Takes the value of what is entered and assigns it the the username variable
        document.getElementById("myLabel").innerHTML = "Hello " + username;    // Displays the value of the username variable through concatenation 
    }