const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema( {
   movieName:String,
   director:String,
   category:String,
   producer:String,
   year:Number,
   
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema) 


