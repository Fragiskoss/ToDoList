const mongoose = require("mongoose");

// Define the schema with properties like 'todo' and 'content'
const todoSchema = new mongoose.Schema(
  {
    todo: String,
  },
  {
    timestamps: true, // This option automatically adds 'createdAt' and 'updatedAt' fields to your documents
  }
);

// Create a model named 'Todo' using the defined schema
const Todo = mongoose.model("Todo", todoSchema);

// Export the 'Todo' model for use in your server.js file
module.exports = Todo;
