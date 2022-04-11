const mongoose= require("mongoose")
const Grade = mongoose.model(process.env.GRADES_MODEL)

module.exports.getAll = function(req,res){
    const offset = parseFloat(process.env.OFFSET,10)
    const count = parseFloat(process.env.COUNT,10)
    console.log("Get all called");
    Grade.find().limit(offset).skip(count).exec(function(err,grades){
        if(err){
            console.log(err);
            res.status(500).json(err)
        }else{
            console.log(grades);
            res.status(200).json(grades)
        }
    })
}

module.exports.getOne = function(req,res){
    console.log("Get one called");
    const gradeId = req.params.gradeId
    if(!mongoose.isValidObjectId(gradeId)){
        res.status(400).json("grade id is not valid")
    }else{
        Grade.findById(gradeId).exec(function(err,grade){
            if(err){
                res.status(400).json(err)
            }else{
                res.status(200).json(grade)
            }
        })
    }
}