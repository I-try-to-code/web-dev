function calc(op) {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let res = "Invalid input";
    
    if (!isNaN(n1) && !isNaN(n2)) {
        res = op === '/' && n2 === 0 ? "Cannot divide by zero!" : eval(n1 + op + n2);
    }
    
    document.getElementById("res").innerText = "Result: " + res;
}
