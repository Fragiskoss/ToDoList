const express = require("express");
const app = express();
const port = 3000;


const mongoose = require("./connection.js");
const todoModel = require("./todoModel.js");
const cors = require("cors");
app.use(cors());


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/todos", async (req, res) => {
  try {
    const allTodos = await todoModel.find();
    res.json(allTodos);
  } catch (error) {
    console.error("Error occurred while fetching todos:", error);
    res.status(500).json({ error: "Failed to retrieve todos" });
  }
});


app.post("/todo/create", async (req, res) => {
  try {
    const newTodo = req.body; 
    const createdTodo = await todoModel.create(newTodo);
    res.status(201).json(createdTodo); 
  } catch (error) {
    console.error("Error occurred while creating todo:", error);
    res.status(500).json({ error: "Failed to create a new todo" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
