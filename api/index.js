const express = require("express");
const cors = require("cors");
const app = express();
const quips = require("../quips.json");

app.use(cors());

const { v4 } = require("uuid");

app.get("/api", (req, res) => {
	const path = `/api/item/${v4()}`;
	res.setHeader("Content-Type", "text/html");
	res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
	res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

// Get all the quips
app.get("/api/quips", (request, response) => {
	const data = { quips };
	response.json(data);
});

// Get only one random quip
app.get("/api/quips/random", (request, response) => {
	const randomQuip = quips[Math.floor(Math.random() * quips.length)];
	response.json(randomQuip);
});

const PORT = process.env.PORT || 3000; // Use environment variable or port 3000 as default

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

modules.export = app;
