const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    bookName : {type : String,required : true},
    authorName : {type : String,required : true},
    description : {type : String,required : true},
    poster : {type : String ,required : true}
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = { BookModel };
