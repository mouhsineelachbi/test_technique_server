const mysql = require('mysql');
const config = require('./config');

function list(name) {
    let sql = "select * from "+name
    const con =  mysql.createConnection(config.db);
    const result =  con.query(sql,  function(err, rows){
        if(err) throw err;
        return rows;
    });
    return result;
}


module.exports = {
    list
};