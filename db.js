"use strict";

const sqlite = require('sqlite3');  // Interfaccia con il database SQlite

/**
 *  Creazione di una connessione al database SQlite
 */
const db = new sqlite.Database('database.db', (err) => {
  if (err) throw err;
});

module.exports = db;  //  Esporta l'oggetto della connessione al database affinché possa essere utilizzato in altri moduli