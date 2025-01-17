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

DB = new sql3.Database(path.join(__dirname,'/database.db'),sqlite3.OPEN_READWRITE, connected)


const createTablePlatform = () =>{
    const sql = `CREATE TABLE IF NOT EXISTS platform(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password TEXT,
        username TEXT,
        id_user TEXT,
        connect INTEGER)`
    
    DB.run(sql, [], (err)=>{
        if(err) {
            console.log('error creating platform')
            return;
        }
        console.log('CREATED TABLE platform')
    });
}

const createTableType = () =>{
    const sql = `CREATE TABLE IF NOT EXISTS type(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL)`
    DB.run(sql, [], (err)=>{
        if(err) {
            console.log('error creating type')
            return;
        }
        console.log('CREATED TABLE type')
    });
}

const createTableKind = () =>{
    const sql = `CREATE TABLE IF NOT EXISTS kind(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                id_type INTEGER,
                description TEXT,
                FOREIGN KEY(id_type) REFERENCES type(id))`
    DB.run(sql, [], (err)=>{
        if(err) {
            console.log('error creating kind')
            return;
        }
        console.log('CREATED TABLE kind')
    });
}

const createTableObjective = () =>{
    const sql = `CREATE TABLE IF NOT EXISTS objective(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT)`
    DB.run(sql, [], (err)=>{
        if(err) {
            console.log('error creating objective')
            return;
        }
        console.log('CREATED TABLE objective')
    });
}

const createTableGame = () =>{
    const sql = `CREATE TABLE IF NOT EXISTS game(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_platform INTEGER,
                id_type INTEGER,
                id_kind INTEGER,
                name TEXT NOT NULL,
                description TEXT,
                note INTEGER,
                desire_play INTEGER,
                start_date TEXT,
                end_date TEXT,
                have_end INTEGER,
                finished INTEGER,
                time TEXT,
                abandoned INTEGER,
                reason_abandoned TEXT,
                image BLOB,
                FOREIGN KEY(id_platform) REFERENCES platform(id),
                FOREIGN KEY(id_type) REFERENCES type(id),
                FOREIGN KEY(id_kind) REFERENCES kind(id))`
    DB.run(sql, [], (err)=>{
        if(err) {
            console.log('error creating game')
            return;
        }
        console.log('CREATED TABLE game')
    });
}

const createTableObjectiveGame = () =>{
    const sql = `CREATE TABLE IF NOT EXISTS objectiveGame(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_game INTEGER,
                id_objective INTEGER,
                complete INTEGER,
                FOREIGN KEY(id_game) REFERENCES game(id),
                FOREIGN KEY(id_objective) REFERENCES objective(id))`
    DB.run(sql, [], (err)=>{
        if(err) {
            console.log('error creating objectiveGame')
            return;
        }
        console.log('CREATED TABLE objectiveGame')
    });
}

const insertPlatforms = () =>{
    var  data = ["XBOX", "Nintendo", "Steam", "Epic", "EA", "Gog", "Amazon", "PS"];
    const sql = `INSERT INTO platform (name, password, username, id_user, connect) VALUES (?, ?, ?, ?, ?)`
    data.forEach(element => {
        DB.run(sql, [element, '', '', '',0], () => {
            if (err) {
                console.log('erro to insert '+ element)
            }
            console.log('insert ' + element)
        });
    });   
}

const insertTypes = () =>{
    var  data = ["ação", "aventura", "corrida","luta","simulação"];
    const sql = `INSERT INTO type (name) VALUES (?)`
    data.forEach(element => {
        DB.run(sql, element, (err) => {
            if (err) {
                console.log('erro to insert '+ element)
            }
            console.log('insert ' + element)
        });
    })
}

const insertKinds = () =>{
    var  data = [
        {name: "narrativo", id_type: 2, description: ""},
        {name: "vida real", id_type: 5, description: ""},
    ]
    const sql = `INSERT INTO kind (name,id_type,description) VALUES (?, ?, ?)`

    data.forEach(element => {
        DB.run(sql, [element.name, element.id_type, element.description], (err) => {
            if (err) {
                console.log('erro to insert '+ element.name)
            }
            console.log('insert ' + element.name)
        });
    });
}

const createTables = () =>{
    createTablePlatform();
    createTableType();
    createTableKind();
    createTableObjective();
    createTableGame();
    createTableObjectiveGame();
}

const insertTables = () =>{
    insertPlatforms();
    insertTypes();
    insertKinds();
}
