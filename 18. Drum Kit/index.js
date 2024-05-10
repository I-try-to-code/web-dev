var no_of_drums = document.querySelectorAll(".drum").length;

for (var i = 0; i < no_of_drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button_inner_html = this.innerHTML;

        switch (button_inner_html) {
            case "w":
                var audioFile = "sounds/tom-1.mp3";
                break;
            case "a":
                var audioFile = "sounds/tom-2.mp3";
                break;
            case "s":
                var audioFile = "sounds/tom-3.mp3";
                break;
            case "d":
                var audioFile = "sounds/tom-4.mp3";
                break;
            case "j":
                var audioFile = "sounds/crash.mp3";
                break;
            case "k":
                var audioFile = "sounds/kick-bass.mp3";
                break;
            case "l":
                var audioFile = "sounds/snare.mp3";
                break;
            default:
                // Default case if none of the above conditions are met
                return;
        }

        // Create the audio object and play the corresponding sound
        var audio = new Audio(audioFile);
        audio.play();
    });
}
// Add event listener outside the loop
document.addEventListener("keydown", function(event) {
    // Check if the key pressed corresponds to a drum sound
    switch (event.key) {
        case "w":
            playSound("sounds/tom-1.mp3");
            break;
        case "a":
            playSound("sounds/tom-2.mp3");
            break;
        case "s":
            playSound("sounds/tom-3.mp3");
            break;
        case "d":
            playSound("sounds/tom-4.mp3");
            break;
        case "j":
            playSound("sounds/crash.mp3");
            break;
        case "k":
            playSound("sounds/kick-bass.mp3");
            break;
        case "l":
            playSound("sounds/snare.mp3");
            break;
        default:
            // Do nothing if key doesn't correspond to a drum sound
            break;
    }
});

// Function to play the sound
function playSound(audioFile) {
    var audio = new Audio(audioFile);
    audio.play();
}
