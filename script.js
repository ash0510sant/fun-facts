const facts = [
    "I am 20 years old and full of youthful energy.",
    "I have a passion for mountains and enjoy exploring them.",
    "I love outdoor adventures and the serenity of nature.",
    "I am always eager to learn and experience new things.",
    "I appreciate the beauty and challenge that mountains offer."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
