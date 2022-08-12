let canvas = document.getElementById('myCanvas');    // reference to the Canvas HTML element
let context = canvas.getContext('2d');    // allows you to draw objects on the canvas (aka paint brush, pencil)

context.font = '32pt Arial';    // font size and family
context.fillStyle = 'DeepSkyBlue';    // font solid color
context.strokeStyle = 'DarkSlateGray';    // font border color
context.fillText("What smells?", 30, 200);    // Adds text to the canvas using the fill color, x and y coords
context.strokeText("What smells?", 30, 200);    // Adds text to the canvas using the stroke color, x and y coords