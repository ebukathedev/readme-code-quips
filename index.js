const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const quips = [
	{ quip: "I code, therefore I am" },
	{ quip: "Coding is my superpower" },
	{
		quip: "Debugging is like being a detective in a crime movie where you are also the murderer",
	},
	{ quip: "Code like a boss" },
	{ quip: "Never trust a programmer who doesn't drink coffee" },
	{ quip: "In code we trust" },
	{ quip: "I have a coding problem, and I'm not afraid to use it" },
	{ quip: "I'm not lazy, I'm just in debug mode" },
	{ quip: "Code is poetry in motion" },
	{ quip: "Eat, sleep, code, repeat" },
	{
		quip: "Simplicity is the ultimate sophistication (and also the ultimate goal of my code)",
	},
	{
		quip: "Real programmers don't comment their code. It was hard to write, it should be hard to understand",
	},
	{
		quip: "My code doesn't always work, but when it does, I'm the only one who understands why",
	},
	{ quip: "Code. Test. Repeat." },
	{ quip: "A bug is not a bug. It's an undocumented feature" },
	{ quip: "Life is short, but my code is even shorter" },
	{ quip: "I don't always write code, but when I do, I prefer JavaScript" },
	{
		quip: "I'm not arguing, I'm just explaining why I'm right (about my code)",
	},
	{ quip: "The best way to predict the future is to code it" },
	{ quip: "May the code be with you" },
	{ quip: "Coding is my cardio" },
	{ quip: "Code today, debug tomorrow, cry on Monday" },
	{ quip: "I'm not procrastinating, I'm just prioritizing my code" },
	{
		quip: "My code is like a fine wine - it only gets better with age (and testing)",
	},
	{ quip: "If at first you don't succeed, try coding" },
	{ quip: "Code with passion, debug with patience" },
	{ quip: "Behind every great code is a great coder" },
	{ quip: "There's no such thing as too much code (except when there is)" },
	{ quip: "Coding is not just a job, it's an adventure" },
	{ quip: "My code is my art, and my keyboard is my brush" },
];

app.get("/quips", (request, response) => {
	const data = { quips };
	response.json(data);
});

app.get("/quips/random", (request, response) => {
	const randomQuip = quips[Math.floor(Math.random() * quips.length)];
	response.json(randomQuip);
});

const PORT = process.env.PORT || 3000; // Use environment variable or port 3000 as default

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
