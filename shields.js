const axios = require("axios");

const apiUrl =
	"https://readme-code-quips-production.up.railway.app/quips/random";
const shieldsUrl = `https://img.shields.io/badge/Quip-${encodeURIComponent(
	"Loading..."
)}-blue`;

function generateBadgeUrl() {
	return axios
		.get(apiUrl)
		.then((response) => {
			const { setup, punchline } = response.data;
			const quip = `${setup} ${punchline}`;
			const shieldsQuip = `https://img.shields.io/badge/Quip-${encodeURIComponent(
				quip
			)}-blue`;
			return shieldsQuip;
		})
		.catch((error) => {
			console.error(error);
			return shieldsUrl;
		});
}

module.exports = {
	generateBadgeUrl,
};
