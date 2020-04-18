const express = require('express');
const router  = express.Router();

const Celebrity = require("../models/celebrity.js")
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req,res, next) => {
  const celebrityId = req.query.celebrity_id
  Celebrity.find()
  .then((retrieveAllCelebrities) => {
    // if(err) {
    //   throw err
    // } else {
      console.log(retrieveAllCelebrities)
      res.render("../celebrities/index", {
				celebrities: retrieveAllCelebrities,
			});
  }) 
})

module.exports = router;
