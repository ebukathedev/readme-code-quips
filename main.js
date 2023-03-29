// const express = require("express");
// const cors = require("cors");
// const app = express();
// const { generateBadgeUrl } = require("./shields");
// const quips = require("./quips");
// const axios = require("axios");
// app.use(cors());

// // Get all the data
// app.get("/quips", (request, response) => {
// 	const data = { quips };
// 	response.json(data);
// });

// // Get one random data
// app.get("/quips/random", (request, response) => {
// 	const randomQuip = quips[Math.floor(Math.random() * quips.length)];
// 	response.json(randomQuip);

// 		// axios
// 		// 	.get(
// 		// 		"https://readme-code-quips-production.up.railway.app/quips/random"
// 		// 	)
// 		// 	.then((response) => {
// 		// 		response.send(response.data);
// 		// 		console.log("success");
// 		// 	})
// 		// 	.catch((error) => {
// 		// 		console.error(error);
// 		// 		response.send({ error: "Unable to get quip." });
// 		// 	});
// });


// // app.get("/badge", (req, res) => {
// // 	generateBadgeUrl()
// // 		.then((url) => {
// // 			res.redirect(url);
// // 		})
// // 		.catch((error) => {
// // 			console.error(error);
// // 			res.redirect(
// // 				`https://img.shields.io/badge/Quip-${encodeURIComponent(
// // 					"Error"
// // 				)}-red`
// // 			);
// // 		});
// // });

// const PORT = process.env.PORT || 3000; // Use environment variable or port 3000 as default

// app.listen(PORT, () => {
// 	console.log(`Server listening on port ${PORT}`);
// });
