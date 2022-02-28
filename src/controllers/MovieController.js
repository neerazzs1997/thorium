const MovieModel= require("../models/MovieModel")

const createMovie= async function (req, res) {
    let data= req.body
    let savedData= await MovieModel.create(data)
    res.send({msg: savedData})
}

const getMovieData= async function (req, res) {
    let allMovie= await MovieModel.find()
    res.send({msg: allMovie})
}

module.exports.createMovie= createMovie
module.exports.getMovieData= getMovieData