import express from 'express';
import TodoItem from '../models/ToDoItem'
const router = express.Router();

router.get('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: "test task"
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

export default router;   