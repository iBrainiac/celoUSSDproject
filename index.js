require('./services')
const express = require("express")
require('dotenv').config()
const connectDB = require('./config')

const port = process.env.PORT

const app = express()

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
    connectDB()
})

