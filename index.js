const quips = require("./quips.json");
const { CONSTANTS, getRandomArrayElement } = require("./utils");
const { quipCard } = require("./renderQuipsCard");
const themes = require("./themes.json");

// Max cache age (Currently = 60 seconds)
const cacheSeconds = CONSTANTS.TEN_SECONDS;

module.exports = async (req, res) => {
	const index = Math.floor(Math.random() * Object.keys(quips).length);
	//const index = 168
	let renderQuip = "";

	let {
		borderColor,
		textColor,
		bgColor,
		codeColor,
		quoteColor,
		theme,
		hideBorder,
	} = req.query;

	theme = theme ? theme.toLowerCase() : theme;

	if (theme === "random") theme = getRandomArrayElement(Object.keys(themes));

	if (!themes[theme]) theme = "default";
	const colorTheme = themes[theme];
	borderColor = borderColor || colorTheme.borderColor;
	bgColor = bgColor || colorTheme.bgColor;
	quoteColor = quoteColor || colorTheme.quoteColor;
	codeColor = codeColor || colorTheme.codeColor;

	let quip = quips[index].quip;

	renderQuip = quipsCard(
		textColor || "#ffca3a",
		bgColor || "#242423",
		borderColor || "#8ac926",
		codeColor || "#f72585",
		quip,
		hideBorder
	);

	// Sets the type of content sent
	res.setHeader("Content-Type", "image/svg+xml");
	// Set the Cache type to public (Any cache can store the data) and the max-age
	res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
	res.send(renderQuip);
};
