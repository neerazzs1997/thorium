const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get("/test-me", function (req, res,next) {
    res.send("My first ever api!")
     next()
})



function user(req,res,next){
   let time = new Date().toLocaleTimeString()
  let  curDate = new Date().toLocaleDateString()
   console.log(`${time} ${curDate}`)
   next()
   
}

function IP(req,res,next){
   let ip = "https://api.ipify.org/?format=json"
   console.log(ip)
   next()
}


function API(req,res,next){
  console.log(req.url)

}




router.get("/createUser",user, IP, API,   UserController.createUser  )









// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

module.exports = router;