"use strict";

const db = require('./db.js');

/**
 * Ottiene i dati dell'utente associato a un determinato ID.
 * @param {number} id - L'ID dell'utente da cercare nel database.
 * @returns {Promise} Una Promise che restituisce un oggetto contenente l'ID e l'username dell'utente.
 */
exports.getOrdersByUsersId = function(id) {
  return new Promise((resolve, reject) => {
      const sql = 'select o.ID_ORDINE, o.quantity, o.price,s.name  from [order] o  inner join products s on o.ID_PRODOTTO=s.id  inner join user u on o.ID_USER=u.id  where u.username= ? order by ID_ORDINE'
      db.all(sql, [id], (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        const orderData = rows.map( (row)=> ({ 
          ID_ORDINE: row.ID_ORDINE,
          quantity: row.QUANTITY,
          price: row.PRICE, 
          name: row.name
        }));       
        resolve(orderData);
      });
    })
};

