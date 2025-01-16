
const indexDB = require('./../indexDB.js');

exports.getAllPlatform = () => {
    //const db = indexDB.connectDB();
    const sql = `SELECT * FROM platform`;
    return 'aqui'
    //return db.prepare(sql).all();
}
/*platform = {
    name: '',
    id: 0,
}

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
