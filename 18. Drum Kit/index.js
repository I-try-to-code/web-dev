for (var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var audio= new Audio('sounds/snare.mp3');
        audio.play();
    });
}