const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MiddleWare = require("../MiddleWare")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",MiddleWare.mid1, userController.getUserData)

router.put("/users/:userId", userController.updateUser)

module.exports = router;