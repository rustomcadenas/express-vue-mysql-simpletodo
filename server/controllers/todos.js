const Todo = require('../models/todos');

exports.create = (req, res) => {
    if(!req.body.name){
        return res.status(400).send({
            type: 'error',
            message: 'Content Cannot be empty'
        });
    }

    const todo = new Todo({
        name: req.body.name
    });

    Todo.create(todo, (err, data) => {
        if(err){
            res.status(500).send({
                type: "error",
                message: err.message || "Something went wrong."
            });
        }else{
            res.send({
               data
            });
        }

    });
}

exports.findAll = (req, res) => {
    Todo.getAll((err, data) => {
        if(err){
            console.log(err);
            res.status(500).send({
                type: 'error',
                message: err.message || 'Something went wrong.'
            });
        }else{
            res.send(data);
        }
    });
}

exports.findOne = (req, res) => {
    Todo.getOne(req.params.id, (err, data) => {
        if(err){
            console.log(err);
            res.status(500).send({
                type: 'error',
                message: err.message || 'Something went wrong.'
            });
        }else{
            res.send(data);
        }
    });
}