const express = require('express');
const router = express.Router();
const allController= require("../controllers/allController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor",allController.createAuthor)
router.get("/createPublisher", allController.createPublisher)
router.get("/createBook1", allController. createBook1)
router.get("/createBook", allController. createBook)

router.get("/getBooks", allController.getBooks)

module.exports = router;