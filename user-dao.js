"use strict";

const db = require('./db.js');
const bcrypt = require('bcrypt');


/**
 * Crea un nuovo utente nel database.
 * @param {Object} user - Oggetto contenente i dati dell'utente (username, email, password, address).
 * @returns {Promise} Una Promise che restituisce l'ID dell'utente appena creato.
 */
exports.createUser = function(user) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO user(username, email, password, address) VALUES (?, ?, ?, ?)';
    // Crea l'hash come chiamata asincrona, dato che l'operazione può essere intensiva in termini di CPU (e non vogliamo bloccare il server)
    bcrypt.hash(user.password, 10).then((hash => {      
      db.run(sql, [user.username, user.email, hash, user.address], function(err) {
        if (err) {
          reject(err);
        } else {
          resolve(this.lastID);
        }
      });
    }));
  });
}

/**
 * Ottiene i dati dell'utente associato a un determinato ID.
 * @param {number} id - L'ID dell'utente da cercare nel database.
 * @returns {Promise} Una Promise che restituisce un oggetto contenente l'ID e l'username dell'utente.
 */
exports.getUserById = function(id) {
  return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM user WHERE id = ?';
      db.get(sql, [id], (err, row) => {
          if (err) 
              reject(err);
          else if (row === undefined)
              resolve({error: 'User not found.'});
          else {
              const user = {id: row.id, username: row.username}
              resolve(user);
          }
      });
  });
};


/**
 * Ottiene i dati dell'utente associato a un determinato nome utente e verifica la password.
 * @param {string} username - Il nome utente dell'utente da cercare nel database.
 * @param {string} password - La password associata all'utente.
 * @returns {Promise} Una Promise che restituisce un oggetto contenente i dati dell'utente (id, username, password) e un flag di verifica della password.
 */
exports.getUserByUsername = function(username, password) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM user WHERE username = ? ';
    db.get(sql, [username], (err, row) => {
      if (err) {
        reject(err);
      } else if (row === undefined) {
        resolve({ user: null, check: false });
      } else {
        const user = { id: row.username, username: row.username, password: row.password };
        const passwordCheck = bcrypt.compareSync(password, row.password);
        resolve({ user, passwordCheck });
      }
    });
  });
};


/**
 * Ottiene i dati dell'utente associato a un determinato nome utente dal database interno.
 * @param {string} username - Il nome utente dell'utente da cercare nel database.
 * @returns {Promise} Una Promise che restituisce un oggetto contenente i dati dell'utente (username, email, indirizzo, id).
 */
exports.getUserByUsernameInternal = function(username) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM user WHERE username = ? ';  
    db.get(sql, [username], (err, row) => {
      if (err) {
        reject(err);
      } else if (row === undefined) {
        resolve({ user: null, check: false });
      } else {
        const user = { username: row.username, email: row.email,address: row.address,id: row.id };             
        resolve( user );
      }
    });
  });
};


/**
 * Ottiene i dati dell'utente associato a un determinato nome utente
 * @param {string} username - Il nome utente dell'utente da cercare nel database
 * @returns {Promise} Una Promise che restituisce un oggetto contenente i dati dell'utente (nome, email, indirizzo)
 */
exports.getUserData = function(username) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM user WHERE username = ? ';
    db.get(sql, [username], (err, row) => {
      if (err) {
        reject(err);
      } else if (row === undefined) {
        resolve({ user: null });
      } else {
        const user = {
          nome: row.username,
          email: row.email,
          indirizzo: row.address,
        };       
        resolve( user );
      }
    });
  });
};


