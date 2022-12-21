const express = require('express')
const request = require('request-promise')
const helmet = require('helmet')


// @dotenv configuration
require('dotenv').config()

// mounting application
const app = express()

// Mouting middlewares
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Views folder use
app.set(__dirname + "/views")

// Envirnomental variables
const PORT = process.env.PORT || 2000

// Route folder use
const Path = require("./routes/products")
app.use("/products/", Path)


// Main get welcome message
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

// Server listening
app.listen(PORT, () => console.log(`App is running [port: ${PORT}]`))