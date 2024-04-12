var no_of_drums=document.querySelectorAll(".drum").length;
for (var i=0;i<no_of_drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var audioo = new Audio("sounds/tom-3.mp3");
        audioo.play();
    });
}   