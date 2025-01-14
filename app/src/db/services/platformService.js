import db from '../indexDB.js';
//const db = require('better-sqlite3')('../database.db')

export default platform = {
    name: '',
    id: 0,
}
export const insertPlatform = (platform) => {
    const sql = `INSERT INTO platform (name) VALUES (?)`
    db.prepare(sql).run(platform.name)
}
export const updatePlatform = (platform) => {
    const sql = `UPDATE platform SET name = ? WHERE id = ?`
    db.prepare(sql).run(platform.name, platform.id)
}
export const deletePlatform = (id) => {
    const sql = `DELETE FROM platform WHERE id = ?`
    db.prepare(sql).run(id)
}
export const getAllPlatform = () => {
    const sql = `SELECT * FROM platform`
    return db.prepare(sql).all()
}

export const getPlatformById = (id) => {
    const sql = `SELECT * FROM platform WHERE id = ?`
    return db.prepare(sql).all(id)[0]
}