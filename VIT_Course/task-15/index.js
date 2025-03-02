function validateInputs() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const hexColor = document.getElementById("hexColor").value.trim();
    let errors = [];

    // Full Name: Two to three words, each capitalized
    const namePattern = /^[A-Z][a-z]+(\s[A-Z][a-z]+){1,2}$/;
    if (!namePattern.test(fullName)) {
        errors.push("❌ Full Name must have 2-3 words, each starting with a capital letter.");
    }

    // VIT Student Email Format
    const emailPattern = /^[a-z]+[a-z0-9]*\.\d{4}@vitstudent\.ac\.in$/;
    if (!emailPattern.test(email)) {
        errors.push("❌ Invalid VIT student email format.");
    }

    // Username: Alphanumeric and underscore, starts with letter, 5-15 chars
    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/;
    if (!usernamePattern.test(username)) {
        errors.push("❌ Username must start with a letter and be 5-15 characters long (letters, numbers, underscores allowed).");
    }

    // Hex Color Code Validation (#FFF, #FFFFFF, #123ABC)
    const hexPattern = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
    if (!hexPattern.test(hexColor)) {
        errors.push("❌ Invalid Hex Color Code (Use formats like #FFF or #FFFFFF).");
    }

    const resultElement = document.getElementById("result");
    if (errors.length > 0) {
        resultElement.innerHTML = errors.join("<br>");
        resultElement.className = "error";
    } else {
        resultElement.innerHTML = "✅ All inputs are valid!";
        resultElement.className = "success";
    }
}