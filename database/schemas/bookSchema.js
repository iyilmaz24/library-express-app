const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, 
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
    },
    date: () => Date.now(),
})

const BookModel = mongoose.model("item", bookSchema);


module.exports = BookModel;
