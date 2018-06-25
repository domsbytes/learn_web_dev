var colors = randomRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for( var i = 0; i < squares.length; i++){

    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of the clicked sqaure
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color){
    //loop through all the squares
    for(var i=0; i< squares.length; i++){
        //change each color to match the given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    //pick a random "rgb(0-255, 0-255, 0-255)"
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function randomRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for (var i=0; i<num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue 0-255
    var b = Math.floor(Math.random() * 256);
    //Form your rgb("r,g,b")final string to return
    return "rgb(" + r + ", " + g + ", " + b + ")";

}
