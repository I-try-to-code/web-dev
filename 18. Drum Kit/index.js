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
for (var i = 0; i < no_of_drums; i++) {
    document.addEventListener("keydown", function (event) {

        switch (event.key) {
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