const connection = require('../dbConnection');
const table = 'todos';

exports.createTable = (req, res) => {

    const sql =`
    create table ${table} 
    (
        id varchar(255) not null unique,
        todo varchar(255) not null,
        completed int(3) default 0,
        created_at timestamp default current_timestamp,
        updated_at datetime default current_timestamp on update current_timestamp
    )`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
            res.send(err);
        }else{
            console.log("table Created");
            res.send("table Created");
        }
    });
    
}


