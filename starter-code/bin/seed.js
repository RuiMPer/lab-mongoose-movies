const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const DB_NAME = "lab-movies-project";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const celebrity = [
	{
		name: "Rui Pereira",
		occupation: "ironhacker",
		catchPhrase: "this is a catch phrase",
	},
	{
		name: "Zé Cabra",
		occupation: "singer",
		catchPhrase: "Do you wanna learn to sing",
	},
	{
		name: "DAB",
		occupation: "ironhacker",
		catchPhrase: "this is another catch phrase",
	},
];

Celebrity.create(celebrity, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Created ${celebrity.length} celebrities`);
});
