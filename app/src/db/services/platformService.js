const connect = require('./../connect.js');

exports.getAllPlatform = async () => {
    const db = connect.DB;
    const sql = 'SELECT * FROM platform';
    return new Promise((resolve, reject) => {
        db.all(sql,[],(err,rows) =>{
            if(err) reject(err);

            resolve(rows);
        })
    })
}

exports.getPlatformById = async (id) => {
    const db = connect.DB;
    const sql = 'SELECT * FROM platform WHERE id=?';
    return new Promise((resolve, reject) => {
        db.all(sql,[id],(err,rows) =>{
            if(err) reject(err);
            resolve(rows[0]);
        })
    })
}
/*

const insertPlatform = (platform) => {
    const db = connectDB();
    const sql = `INSERT INTO platform (name) VALUES (@name)`
    db.prepare(sql).run(platform)
}

const updatePlatform = (platform) => {
    const db = connectDB();
    const {name, id} = platform
    const sql = `UPDATE platform SET name = @name WHERE id = @id`
    db.prepare(sql).run({name, id})
}

const deletePlatform = (id) => {
    const db = connectDB();
    const sql = 'DELETE FROM todos WHERE id = @id'
    db.prepare(sql).run({id})
}

const getAllPlatform = () => {
    const db = connectDB();
    const sql = `SELECT * FROM platform`
    return db.prepare(sql).all() 
}

const getPlatformById = (id) => {
    const db = connectDB();
    const sql = `SELECT * FROM platform WHERE id = @id`
    return db.prepare(sql).get({id});
}*/
