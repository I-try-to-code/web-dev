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
