module.exports = app => {
    const TodosDatabase = require('../database/todos'); 
    const Todo = require('../controllers/todos');

    //for creating the table
    app.get("/createtbltodos", TodosDatabase.createTable);


    //for api
    app.post('/todos', Todo.create);
    app.get('/todos', Todo.findAll);
    app.get('/todos/:id', Todo.findOne);
    app.delete('/todos/:id', Todo.delete);

}