//alert("the script has been incorporated");
var gamePattern=[]
var button_color=["red", "blue", "green", "yellow"];    
var ran_num;
function random_num(){
    ran_num= Math.floor(Math.random()*4);

}
random_num();
var randomChosenColour =button_color[ran_num];

gamePattern.push(randomChosenColour);
function blink(color){
    $("#" + color).addClass("pressed");
    setTimeout( function(){
        $("#" + color).removeClass("pressed");
    },100);
}
blink(gamePattern[0]);

const sound_blue = new Audio("./sounds/blue.mp3");
const sound_green = new Audio("./sounds/green.mp3");
const sound_red = new Audio("./sounds/red.mp3");
const sound_yellow = new Audio("./sounds/yellow.mp3");
const sound_wrong = new Audio("./sounds/wrong.mp3");

function playSound(color) {
    switch (color) {
        case "blue":
            sound_blue.play();
            break;
        case "green":
            sound_green.play();
            break;
        case "red":
            sound_red.play();
            break;
        case "yellow":
            sound_yellow.play();
            break;
        default:
            sound_wrong.play();
    }
}

// Binding click events to the buttons to play corresponding sounds
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
    blink(userChosenColour);
});
