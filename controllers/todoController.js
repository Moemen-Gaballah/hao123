const todosModel = require('../models/todosModels')

exports.getList = (req, res, next) => {
    todosModel.getAllTodos().then(todos => {
        res.render('todos', {
            todos
        });
    });
}

exports.getAddTodo = (req, res, next) => {
    res.render('add-todo')
}

exports.postAddTodo = (req, res, next) => {
    todosModel.addNewTodo(req.body.title).then(() => {
        res.redirect('/todo')
    }).catch(err => {

        next(err);
    });
}

exports.updateTodo = (req, res, next) => {
    todosModel.updateTodo(req.body.id).then(() => {
        res.redirect('/todo')
    }).catch(err => {

        next(err);
    });
}