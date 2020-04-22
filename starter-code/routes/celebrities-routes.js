const express = require('express');
const router = express.Router();

const Celebrity = require("../models/celebrity.js")


router.get("/celebrities", (req, res) => {
	Celebrity.find()
		.then((allTheCelbsRetrieveFromDB) => {
			console.log(allTheCelbsRetrieveFromDB)
			res.render("celebrities/celebrities", {celebrities: allTheCelbsRetrieveFromDB})
		}).catch((err) => {
			console.log("An error occured", err)
		})
})


router.get("/celebrities/new", (req, res) => {
	res.render("celebrities/new-celebrity")
})

router.get("celebrities/create", (req,res) => {
	res.render("new-celebrity")
})

router.post("celebrities/new", (req, res) => {
	const { name, occupation, catchPhrase } = req.body

	const newCelebrity = new Celebrity({ name, occupation, catchPhrase })

	newCelebrity.save()
		.then(() => {
			res.redirect("/celebrities")
		}).catch((err) => {
			console.log(err)
			res.render("celebrities/new-celebrity")
		})
})


module.exports = router;