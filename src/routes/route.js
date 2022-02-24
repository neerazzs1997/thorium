const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

let players= [ 
    {
    "name": "neerazz",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": ["swimming"],
    "bookings": [ ]
},

   {
     "name": "tonu",
     "dob": "1/1/1995",
     "gender": "male",
     "city": "jalandhar",
     "sports": ["swimming"],
      "bookings": []
  },
 {
    "name": "",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": ["swimming"],
    "bookings": []
  }
]

router.post("/player", function(req, res) {
  
    let element = req.body.nplayer.name;
    console.log(element)

    let element1 = req.body.nplayer
    console.log(element1)

    for (let i=0;i<players.length;i++){
        if(element === players[i].name ){
            console.log("player already exist")
            res.send("player already exists")
            
           
        }
       else if (i === players.length-1){
            players.push(element1)
            console.log(element1)
            res.send({data :players , status : true})
           
        }
      
    }
    
})

module.exports = router;