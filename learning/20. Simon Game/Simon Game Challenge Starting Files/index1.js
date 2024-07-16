var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];    
var level = 0;
var started = false;

// Audio files
const sounds = {
    blue: new Audio("./sounds/blue.mp3"),
    green: new Audio("./sounds/green.mp3"),
    red: new Audio("./sounds/red.mp3"),
    yellow: new Audio("./sounds/yellow.mp3"),
    wrong: new Audio("./sounds/wrong.mp3")
};

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    var randomChosenColour = buttonColors[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColour);
    playSequence();
}

function playSound(color) {
    if (sounds[color]) {
        sounds[color].play();
    }
}

function animatePress(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function() {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function playSequence() {
    let i = 0;
    const interval = setInterval(function() {
        if (i < gamePattern.length) {
            let color = gamePattern[i];
            $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(color);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 600); // Adjust the speed of the sequence playback here
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function() {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});
