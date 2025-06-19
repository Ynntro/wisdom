document.getElementById("questionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const answers = [
        "Yes, definitely!",
        "No, not at all.",
        "Maybe, who knows?",
        "Ask again later.",
        "It is certain.",
        "What a silly question! Of course!",
        "NOOOOOOOO",
        "Of course no bru :skull:",
        "Nahhh ofc not",
        "Yeah..",
        "Nuh uh",
        "Fuck no.",
        "Hell yeah!",
        "Hmm I'm not sure...",
        "My wisdom is telling me to say yes.",
        "You will discover about it on Friday.",
        "I have no idea."
    ]; 

    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    document.getElementById("answerDisplay").innerText = randomAnswer;
});
