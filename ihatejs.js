document.getElementById("questionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = [
        "Yes, definitely!",
        "No, not at all.",
        "Maybe, who knows?",
        "Ask again later.",
        "It is certain.",
        "I have no idea."
    ]; 

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    document.getElementById("answerDisplay").innerText = randomAnswer;
});