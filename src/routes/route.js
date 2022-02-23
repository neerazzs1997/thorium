const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})




router.get('/movies',function(req,res){
    const movie = ['Spiderman','Batman','Uncharted','Deadpool']
     res.send(movie);

})





router.get('/movies/:index',function(req,res){

const movie = ['Spiderman','Batman','Uncharted','Deadpool']
let moviename =req.params.index;

if(moviename>movie.length-1){
    res.send('Use valid index')
}
else if(moviename<movie.length){

    let x = movie[moviename]
    res.send(x)
}


})
 



router.get('/films', function(req,res){

const film = [

    {
        "id":1, "name":"Spiderman"
    },
   
    {
        "id":2, "name":"Batman"   
     },

     {
         "id":3, "name":"Uncharted"


     },

     {
        
        "id":4 , "name":"Deadpool"

     }


]
res.send(film)

})



router.get('/films/:filmsid', function(req,res){
      

    let fi=req.params.filmsid;
    const film = [
    
        {
            "id":1, "name":"Spiderman"
        },
       
        {
            "id":2, "name":"Batman"   
         },
    
         {
             "id":3, "name":"Uncharted"
    
    
         },
    
         {
            
            "id":4 , "name":"Deadpool"
    
         }
    
    
    ]

    if(fi>film.length){

        res.send("invalid id")
    }
    else {

        for(let i=0;i<film.length;i++){
            if(film[i].id==fi){

                res.send(film[i])
            }

        }
    }
   

    res.send(film)
    
    })




module.exports = router;
