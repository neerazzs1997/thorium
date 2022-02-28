const express = require('express');
const router = express.Router();
const MovieModel= require("../models/MovieModel.js")
const MovieController= require("../controllers/MovieController")

router.get("/Movies", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createMovie", MovieController.createMovie  )

router.get("/getMovieData", MovieController.getMovieData)

module.exports = router;