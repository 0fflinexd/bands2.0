/* 
To start a new projekct 
npm init -y 
npm install better-sqlite3
*/

// 1. Import the database driver
const dataBaseDriver = require ('better-sqlite3');

// 2. Connect to the database
const db = dataBaseDriver('bands2.0.db');

/* 
    Prepare a statment, excecute statment
*/

// 3. Send our first query, prepare a statment
let statment = db.prepare('SELECT * FROM bands');

// 4. Execute statment, recive reults
let results = statment.all();

// 5. Check the reults
//console.log(results); 

// 6. using parameters

let statment2 = db.prepare
(`
    SELECT * FROM bands WHERE genre = ? 
`);
let result2 = statment2.all('Metal');

//console.log(result2[0]);

// Using named parameters
let statment3 = db.prepare(`
SELECT * FROM bands WHERE genre = :genre`);

let result3 = statment3.all({
    genre:'Rock'
});
//console.log(result3);
let table = 'bands';
// Insert something into the database
let insetrStatment = db.prepare (`
    INSERT INTO ${table} (name, genre) VALUES (:name, :genre)
`);

let resultOfInsert = insetrStatment.run({
    name: 'Bathorny',
    genre: 'Metal'
});

console.log(resultOfInsert);

