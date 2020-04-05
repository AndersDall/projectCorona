const express = require('express');
const router = express.Router();
const Todo = require("../models/handleTodo");



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Todo',
        subtitle: 'Her kan du lave todos'
    });
});

/* GET todo page. */
router.get('/todo', function(req, res, next) {
  res.render('todo', {
      title: 'Todo',
      subtitle: 'Skriv din todoliste her',
      read: 'anders '//req.sessions.user
  });
});

router.post('/todo/:todoer', async function(req, res, next) {
    let todo = await ​Todo.upsertTodo(req);
    console.log(todo);
    res.redirect('/todo')
});


module.exports = router;
