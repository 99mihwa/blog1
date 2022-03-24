const mongoose = require("mongoose");

const WritingSchema = new mongoose.Schema({
      postNumber: {
        type: Number,
        unique: true
      },
      date: {
        type: Date, 
      },      
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true
      },
      content: {
        type: [String],
        required: true
      },
      postPassword: {
        type: String,
        required: true,
        trim: true
      }
    });

    module.exports = mongoose.model("Writing", WritingSchema,);
  