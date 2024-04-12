var no_of_drums = document.querySelectorAll(".drum").length;
for (var i = 0; i < no_of_drums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var audioFile = "sounds/tom-1.mp3"; // Dynamically select the audio file based on the index
        var audio = new Audio(audioFile);
        audio.play();
    });
}
