for (var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var audioo = new Audio("sounds/snare.mp3");
        audioo.play();
    });
} 