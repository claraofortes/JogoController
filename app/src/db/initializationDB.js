const db = require('better-sqlite3')('database.db')

const createTablePlatform = () =>{
    const sql = `CREATE TABLE platform(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL)`
    db.prepare(sql).run()
}

const createTableType = () =>{
    const sql = `CREATE TABLE type(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL)`
    db.prepare(sql).run()
}

const createTableKind = () =>{
    const sql = `CREATE TABLE kind(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                id_type INTEGER,
                description TEXT,
                FOREIGN KEY(id_type) REFERENCES type(id))`
    db.prepare(sql).run()
}

const createTableObjective = () =>{
    const sql = `CREATE TABLE objective(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT)`
    db.prepare(sql).run()
}

const createTableGame = () =>{
    const sql = `CREATE TABLE game(
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
    db.prepare(sql).run()
}

const createTableObjectiveGame = () =>{
    const sql = `CREATE TABLE objectiveGame(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_game INTEGER,
                id_objective INTEGER,
                complete INTEGER,
                FOREIGN KEY(id_game) REFERENCES game(id),
                FOREIGN KEY(id_objective) REFERENCES objective(id))`
    db.prepare(sql).run()
}

const insertPlatforms = () =>{
    var  data = ["computador", "switch"];
    const sql = `INSERT INTO platform (name) VALUES (?)`
    data.forEach(element => {
        db.prepare(sql).run(element)
    });    
}

/*const sql = `CREATE TABLE IF NOT EXISTS platform(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL)`

DB.run(sql, [], (err)=>{
    if(err) {
        console.log('error creating platform')
        return;
    }
    console.log('CREATED TABLE platform')
});


var  data = ["computador", "switch"];
    const sql = `INSERT INTO platform (name) VALUES (?)`
    data.forEach(element => {
        DB.run(sql, element, (err) => {
            if (err) {
                console.log('erro to insert '+ element)
            }
            console.log('insert ' + element)
        });
    });  
    */

const insertTypes = () =>{
    var  data = ["ação", "aventura", "corrida","luta","simulação"];
    const sql = `INSERT INTO type (name) VALUES (?)`
    data.forEach(element => {
        db.prepare(sql).run(element)
    });
}

const insertKinds = () =>{
    var  data = [
        {name: "narrativo", id_type: 2, description: ""},
        {name: "vida real", id_type: 5, description: ""},
    ]
    const sql = `INSERT INTO kind (name,id_type,description) VALUES (?, ?, ?)`

    data.forEach(element => {
        db.prepare(sql).run(element.name,element.id_type,element.description)
    });
}

const inicialization = () =>{
    createTablePlatform();
    createTableType();
    createTableKind();
    createTableObjective();
    createTableGame();
    createTableObjectiveGame();
    insertPlatforms();
    insertTypes();
    insertKinds();
}

inicialization();