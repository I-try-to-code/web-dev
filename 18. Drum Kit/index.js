for (var i=0,i<7,i++){
    document.querySelector(".drum")[i].addEventListener(click,function (){
        var audio= new Audio('snare.mp3');
        audio.play();
    })
}