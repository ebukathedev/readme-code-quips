const express = require("express");
const cors = require("cors");
const app = express();
const quips = require("./quips.json");

app.use(cors());

app.get("/", (request, response) => {
	response.send(`<a href="/quips">All Quips</a>`);
});

// Get all the quips
app.get("/quips", (request, response) => {
	const data = { quips };
	response.json(data);
});

// Get only one random quip
app.get("/quips/random", (request, response) => {
	const randomQuip = quips[Math.floor(Math.random() * quips.length)];
	response.json(randomQuip);
});

const PORT = process.env.PORT || 3000; // Use environment variable or port 3000 as default

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
