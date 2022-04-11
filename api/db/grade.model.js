const mongoose = require("mongoose")

const ScoresSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true

    }
})

const GradesSchema = mongoose.Schema({
    student_id: {
        type: Number,
        required: true
    },
    scores: [ScoresSchema],
    class_id: {
        type: Number,
        required: true
    },
})

mongoose.model(process.env.GRADES_MODEL, GradesSchema, process.env.COLLECTION_NAME)