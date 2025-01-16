const Database = require('better-sqlite3');
//const db = new sqlite('./database.db');
//exports.db = db;
const path = require('path');

exports.connectDB = () => {
    return Database(
        path.join(__dirname, 'database.db'),
        { verbose: console.log, fileMustExist: true },
    );
}
