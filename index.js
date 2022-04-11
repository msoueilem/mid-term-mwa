require("dotenv").config()
require("./api/db/db")
const express = require("express")
const path  = require("path")
const bodyparser = require("body-parser")
const router = require("./api/routes/main")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use("/api", router)
// app.use("/", function(req,res){
//     res.status(200).sendFile(path.join(__dirname,"api/public/index.html"))
// })

const server = app.listen(process.env.PORT, function() {
    console.log(process.env.LISTEN_MESSAGE+server.address().port);
})