const sqlite3 = require('sqlite3');
const sql3 = sqlite3.verbose();


const path = require('path');

function connected(err){
    if(err){
        console.log(err.message);
        return
    }
    console.log('Connected to the DB or SQLITE DB does already exist')
}

exports.DB = new sql3.Database(path.join(__dirname,'/database.db'),sqlite3.OPEN_READWRITE, connected)
/*
const sql = 'SELECT * FROM platform'
    DB.all(sql,[],(err,rows) =>{
            if(err){
                console.log(err)
            }
            console.log(rows)
        })*/