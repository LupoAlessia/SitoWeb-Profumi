"use strict";

const db = require('./db.js');  // importa modulo db

/**
 * Restituisce i dettagli di un prodotto in base al suo nome
 * @param {*} productName - Il nome del prodotto
 * @returns {Promise} - Restituisce una Promise che si risolve con l'oggetto del prodotto, o null se il prodotto non esiste
 */
exports.getProductValue = function(productName) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE name = ? ';
    db.get(sql, [productName], (err, row) => {
      if (err) {
        reject(err);
      } else if (row === undefined) {
        resolve({ product: null });
      } else {
        const product = {
          name: row.name,
          description: row.description,	
          price:	row.price,
          quantity:row.quantity,	
          gender:row.gender,
          sale:row.sale,
          isNew:row.isNew,	
          id:row.id	
           };       
        resolve( product );
      }
    });
  });
};