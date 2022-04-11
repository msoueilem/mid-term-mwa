const express = require("express")
const route = express.Router()

const GradesControllers = require("../controllers/grade.controller")

route.route("/grades").get(GradesControllers.getAll)
route.route("/grades/:gradeId").get(GradesControllers.getOne)

module.exports = route