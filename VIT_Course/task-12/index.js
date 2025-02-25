
document.querySelector('.text_changer').addEventListener('click',function changetext(){
    document.querySelector('p').innerHTML="You changed me my dear friend, but not in a negative way! </br> Change is inevitable.  </br>Change is the way of life! </br> To change your life join roboVITics now!";
});

document.querySelector('h2').addEventListener('mouseover',function changec(){
    document.querySelector('h2').classList.add("colour")
});
document.querySelector('h2').addEventListener('mouseout',function changecd(){
    document.querySelector('h2').classList.remove("colour")
});

document.querySelector('.colour_changer').addEventListener('click',function changecolour(){
    if(confirm("do you want to change the colour of the webpage?")==true){
        document.querySelector('body').classList.add("bg");
    }
});

document.querySelector('.special_message').addEventListener('click',function splmessage(){
    alert("Join roboVITics now! We are the best club in VIT! ");
});

function displayInput() {
    const inputElement = document.getElementById("inputText");
    const outputElement = document.getElementById("output");
    outputElement.textContent = inputElement.value;
}