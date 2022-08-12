// Robert Calero
// This displays the checked and radio button properties

// When the submit button is clicked, the app checks to see whether the checkbox is clicked or not as well as which radio button is selected
document.getElementById("myButton").onclick = function()
    {
        const myCheckbox = document.getElementById("myCheckbox")
        const rdoVisa = document.getElementById("rdoVisa")
        const rdoMaster = document.getElementById("rdoMaster")
        const rdoAmex = document.getElementById("rdoAmex")

        if(myCheckbox.checked)
            {
                console.log("You are subscribed!");
            }
        else
            {
                console.log("You are NOT subscribed!");
            }
        
        if (rdoVisa.checked)
            {
                console.log("You are paying with a Visa!");
            }
        else if (rdoMaster.checked)
            {
                console.log("You are paying with a Mastercard!");
            }
        else if (rdoAmex.checked)
            {
                console.log("You are paying with a Amex!");
            }
        else
            {
                console.log("You must select a payment type!");
            }
    }