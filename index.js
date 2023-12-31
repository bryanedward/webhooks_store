require('dotenv').config()

const express = require("express")
const app =  express()

const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send("ok")
})

app.listen(4000,() => {
    console.log(`PORT ${process.env.PORT}`)
})