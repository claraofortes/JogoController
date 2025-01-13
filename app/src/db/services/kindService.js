import db from '../database';
import { type } from './typeService';

export var kind = {
    name: '',
    id: 0,
    description: '',
    type: ''
}
export const insertKind = (kind) => {
    const sql = `INSERT INTO kind (name, id_type, description) VALUES (?)`
    db.prepare(sql).run(kind.name, kind.type.id, kind.description)
}
export const updateKind = (kind) => {}
export const deleteKind = (id) => {}
export const getAllKind = () => {}
export const getKindById = (id) => {}
