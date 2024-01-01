require('dotenv').config()

const express = require("express")
const app =  express()

const bodyParser = require("body-parser")

app.use(bodyParser.json());

app.get('/',(req,res) => {

    console.log(req.header)
    res.send("webhooks")
})

app.post('/webhooks',(req,res) => {

    console.log(req.body);
    res.send({
        data: req.body
    })
})

app.listen(4000,() => {
    console.log(`PORT ${process.env.PORT}`)
})