import db from '../database';

export var platform = {
    name: '',
    id: 0,
}
export const insertPlatform = (platform) => {
    const sql = `INSERT INTO platform (name) VALUES (?)`
    db.prepare(sql).run(platform.name)
}
export const updatePlatform = (platform) => {}
export const deletePlatform = (id) => {}
export const getAllPlatform = () => {}
export const getPlatformById = (id) => {}
