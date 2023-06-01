const express = require("express")
const { getBook, addBook, getAllBooks, deletedBook, updateBook } = require("../controllers/book")

const BookRouter = express.Router()

BookRouter.get("/search/:id",getBook)

BookRouter.post("/addbook",addBook)

BookRouter.get("/allbooks",getAllBooks)

BookRouter.delete("/:id",deletedBook)

BookRouter.put("/:id",updateBook)

module.exports = {BookRouter}