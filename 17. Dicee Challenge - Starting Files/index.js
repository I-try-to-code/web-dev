var random_number ;
random_number= Math.random();
random_number=random_number*7;
random_number= Math.floor(random_number);

if (random_number==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if (random_number==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if (random_number==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
else if (random_number==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
else if (random_number==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
else if (random_number==6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}

var random_number2;
random_number2= Math.random();
random_number2=random_number2*7;
random_number2= Math.floor(random_number2);



if (random_number2==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
else if (random_number2==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
else if (random_number2==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
else if (random_number2==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
else if (random_number2==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
else if (random_number2==6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
if (random_number>random_number2){
    document.querySelector("h1").textContent= "Player 1 Wins!";
}
else if(random_number==random_number2){
    document.querySelector("h1").textContent= "It's a DRAW!!";
}
}
else{
    document.querySelector("h1").textContent= "Player 2 Wins!";
}