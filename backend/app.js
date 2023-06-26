require("dotenv").config({path: `.env.${process.env.NODE_ENV}`})
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const morgan = require('morgan')
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000

/*
rutas
*/

app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`APP in http://localhost:${port}`)
})

dbConnect()