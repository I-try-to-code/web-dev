function calculateGrade() {
    let scores = [];
    for (let i = 1; i <= 5; i++) {
        let score = document.getElementById(`subject${i}`).value;
        if (score === "" || score < 0 || score > 100) {
            alert("Please enter valid scores between 0 and 100 for all subjects.");
            return;
        }
        scores.push(parseInt(score));
    }

    let total = scores.reduce((sum, score) => sum + score, 0);
    let average = total / scores.length;
    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `
        <p>Numerical Average: <strong>${average.toFixed(2)}</strong></p>
        <p>Letter Grade: <strong>${grade}</strong></p>
    `;
}
