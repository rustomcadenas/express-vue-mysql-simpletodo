const sql = require('../dbConnection');
const { v4: uuidv4 } = require('uuid');

const Todo = function(todo){
    this.todo = todo.name
    this.id = uuidv4()
}

Todo.create = (newTodo, result) => {

    const query = `
    insert into todos set ?
    `;
    sql.query(query, newTodo, (err) => {
        if(err){
            console.log(err);
            result(err, null);
            return
        }else{
            console.log('created Todos: ', {...newTodo});
            result(null, {...newTodo});
        }
    });
    
}

Todo.getAll = result => {
    const query = `
        select * from todos order by created_at desc
    `;
    sql.query(query, (err, res) => {
        if(err){
            console.log(err);
            result(err, null);
            return
        }else{
            console.log("Todos: ", res);
            result(null, res);
        }
    });
}

Todo.getOne = (id, result) => {
    const query = `
        select * from todos where id = '${id}'
    `;
    sql.query(query, (err, res) => {
        if(err){
            console.log(err);
            result(err, null);
            return
        }
        if(res.length){
            console.log("Found Todo: ", res[0]);
            result(null, res[0]);
            return;

        }else{ 
            result({message: "todo not found"}, null);
        }
    });
}


module.exports = Todo;