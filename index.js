//Event Listeners
//Like the name implies, it listens for an event. In this case, it is "click" and carries out a function in this case, "handleClick"

//Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

function handleClick() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
}

var i = 0;

while (i<numberOfDrumButtons) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    i++;
}


//playing sound with javascript
/*
var audio = new Audio(file location);
audio.play();
*/

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
                
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
                
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            break;
    }
}

//Detecting key press
function keyPushed(event) {
    makeSound(event.key)

    buttonAnimation(event.key)
}

document.addEventListener("keydown", keyPushed);

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 150);
}