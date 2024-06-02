//alert("the script has been incorporated");
var gamePattern=[];
var userClickedPattern=[];
var button_color=["red", "blue", "green", "yellow"];    
var ran_num;

//setting initial level to zero
var level=0;

//audio files
const sound_blue = new Audio("./sounds/blue.mp3");
const sound_green = new Audio("./sounds/green.mp3");
const sound_red = new Audio("./sounds/red.mp3");
const sound_yellow = new Audio("./sounds/yellow.mp3");
const sound_wrong = new Audio("./sounds/wrong.mp3");

function random_num(){
    ran_num= Math.floor(Math.random()*4);

}
function gen_col(){
random_num();
var randomChosenColour =button_color[ran_num];
gamePattern.push(randomChosenColour);
}

function blink(color){
    $("#" + color).addClass("pressed");
    setTimeout( function(){
        $("#" + color).removeClass("pressed");
    },100);
}



function nex_seq(){
level++;
$("h1").text(" level "+ level );


}

// function to play sound of color passed
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
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    blink(userChosenColour);
});


$(document).keypress(function (event) {
    if (level==0){
    nex_seq();
    }
});

