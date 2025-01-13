import db from '../database';
import { kind } from './kindService';
import { objective } from './objectiveService';
import { platform } from './platformService';
import { type } from './typeService';

export var game = {
    name: '',
    id: 0,
    description: '',
    platform: '',
    type:'',
    kind: '',
    objectives: [],
    note: 0,
    desire_play: false,
    start_date: '',
    end_date: '',
    have_end: false,
    finished: false,
    time: '',
    abandoned: false,
    reason_abandoned: '',
    image:'',
}
export const insertGame = (game) => {}
export const updateGame = (game) => {}
export const deleteGame = (id) => {}
export const getAllGame = () => {}
export const getGameById = (id) => {}