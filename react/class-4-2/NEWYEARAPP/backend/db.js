const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://saideepreddy65:54ylKakEMvUQihnR@cluster0.82vcev7.mongodb.net/todos"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
