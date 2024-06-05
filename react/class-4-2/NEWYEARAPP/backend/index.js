const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "https://locaslhost:5174",
  })
);

app.use(express.json());
app.post("/todos", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent wrong input",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  console.log(todos);
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const completePayload = req.body;
  const parsedPayload = updateTodo.safeParse(completePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "you sent wrong input",
    });
    return;
  }
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo marked as completed",
  });
});

app.listen(3000);
