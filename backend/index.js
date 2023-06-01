const express = require("express")
const { BookRouter } = require("./routers/book.router")
const { connection } = require("./config/db")
require("dotenv").config()
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use("/book",BookRouter)


app.listen(process.env.PORT || 8080,async()=>{
    try {
        await connection;
        console.log("Connected to DB")
        console.log(`Listening on PORT ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})