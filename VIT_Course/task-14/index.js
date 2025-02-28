function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthIndicator = document.getElementById("strengthIndicator");
    let message = document.getElementById("message");
    let strength = 0;

     

if (password.length >= 8) {
    strength = strength + 1;
}
if (password.match(/[A-Z]/)) {
    strength = strength + 1;
}
if (password.match(/[a-z]/)) {
    strength = strength + 1;
}
if (password.match(/[0-9]/)) {
    strength = strength + 1;
}
if (password.match(/[^A-Za-z0-9]/)) {
    strength = strength + 1;
}


    
    if (strength >= 5) {
        strengthIndicator.classList.add("stg");
        message.textContent = "Strong Password";
    } else if (strength === 3|strength === 4) {
        strengthIndicator.classList.add("med");
        message.textContent = "Medium Strength Password";
    } else {
        strengthIndicator.classList.add("wak");
        message.textContent = "Weak Password";
    }
}
