const { BookModel } = require("../models/book.model");

exports.getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    if (book) {
      res.status(200).send({ msg: `Book with id - ${id}`, data: book });
    } else {
      res.status(404).send({ msg: `No book with id - ${id}` });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

exports.addBook = async (req, res) => {
  try {
    const { bookName, authorName,description,poster } = req.body;
    const book = await new BookModel({bookName, authorName,poster,description});
    book.save();
    res.status(200).send({ msg: "New Book Added" });
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const {limit} = req.query
    if(limit){
      const books = await BookModel.find().limit(limit);
      res.status(200).json({ msg: "Books", data: books });
    }else{

      const books = await BookModel.find();
      res.status(200).json({ msg: "All Books", data: books });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

exports.deletedBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    if (book) {
      await BookModel.findByIdAndDelete(id);
      res.status(200).send({ msg: `Book with id - ${id} deleted sucessfully` });
    } else {
      res.status(404).send({ msg: `No book with id - ${id} found` });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const {bookName, authorName,description,poster } = req.body;
    const book = await BookModel.findById(id);
    if (book) {
      book.bookName = bookName;
      book.authorName = authorName;
      book.description = description
      book.poster = poster
      await book.save();
    } else {
      res.status(404).send({ msg: `No book with id - ${id} found` });
    }
  } catch (error) {
    res.status(500).send({ msg: error.message });
  }
};
