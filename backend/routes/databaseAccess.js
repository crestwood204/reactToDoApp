import express from 'express';
import TodoItem from '../models/ToDoItem'
const router = express.Router();

router.post('/add', (req, res) => {
  var testTodo = new TodoItem({
    task: req.body.task.taskText
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