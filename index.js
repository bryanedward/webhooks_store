require('dotenv').config()

const express = require("express")
const app =  express()

const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.post('/',(req,res) => {

    res.send({
        data: req.body
    })
})

app.listen(4000,() => {
    console.log(`PORT ${process.env.PORT}`)
})