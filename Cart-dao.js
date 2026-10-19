"use strict";

const db = require('./db.js');
const userDao = require('./user-dao.js');
const productsDao = require('./products-dao.js');
const cartDao = require('./Cart-dao.js');

/**
 * Verifica se un determinato prodotto esiste nel carrello di un utente
 * @param {*} userId - L'ID dell'utente
 * @param {*} productId - L'ID del prodotto
 * @returns {Promise} - Una Promise che restituisce un array di oggetti con le informazioni sul carrello
 */
exports.ExistProductForUser = function (userId,productId) { 
    return new Promise((resolve, reject) => {
        const sql = 'select * from Cart where ID_PRODOTTO=? and id_user=?';
        db.all(sql, [productId,userId], (err,rows) => {
            if (err) {
                reject(err);
                return;
            }
            const cartData = rows.map( (row)=> ({ 
                ID_PRODOTTO: row.ID_PRODOTTO, 
                ID_USER: row.ID_USER,
                Data: row.Data
            }));
            resolve(cartData);
        });
    })
};


/**
 * Aggiunge un prodotto al carrello dell'utente nel database
 * @param {*} username - Il nome utente dell'utente a cui aggiungere il prodotto
 * @param {*} productName - Il nome del prodotto da aggiungere al carrello
 * @returns {boolean} - Restituisce true se l'operazione è andata a buon fine, altrimenti false
 */
exports.addProductToCart = async function (username,productName) {
 try{
    const user=await userDao.getUserByUsernameInternal(username)
    const product=await productsDao.getProductValue(productName)
    const Cart =await cartDao.ExistProductForUser(user.id,product.id)
    
    if(Cart==undefined||Cart.length==0){
      const sql = 'insert into Cart (ID_PRODOTTO,ID_USER,Number,Data) VALUES (?,?,?,DATE(\'now\'))';
      db.run(sql,[product.id,user.id,1], (err,rows) => {
          if (err) {
              return false;
          }
      });
      return true;
    }
    else{
        // se il prodotto per quell'utente esite già, va incrementato il contatore
        const sql = 'update  Cart set  Number=Number+1 where ID_PRODOTTO=? and id_user=? ';
        db.run(sql,[Cart[0].ID_PRODOTTO, Cart[0].ID_USER], (err,rows) => {
            if (err) {
                return false;
            }
        });
            return true;
        }
    } catch (error) {
        
        return error;
    }
};


/**
 * Ottiene i dati del carrello dell'utente dal database
 * @param {*} user - L'utente di cui ottenere i dati del carrello
 * @returns {Promise} - Una Promise che restituisce un array di oggetti con le informazioni del carrello
 */
exports.getCartData = function (user) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT c.Number, p.name,p.price FROM cart c inner join user u on c.ID_USER= u.id inner join products p on c.ID_PRODOTTO= p.id  WHERE u.username = ?';
        db.all(sql, [user], (err,rows) => {
            if (err) {
                reject(err);
                return;
            }
            const cartData = rows.map( (row)=> ({ 
                name: row.name, 
                quantity: row.Number,
                price: row.price
            }));
            resolve(cartData);
        });
    })
};


/**
 * Rimuove un prodotto dal carrello di un utente
 * @param {*} username - Il nome utente
 * @param {*} productName - Il nome del prodotto
 * @returns {boolean} - Restituisce true se l'operazione è andata a buon fine, altrimenti false
 */
exports.removeProductFromCart = async function (username, productName) {
    try {
        const user = await userDao.getUserByUsernameInternal(username);
        const product = await productsDao.getProductValue(productName);

        const sql = 'DELETE FROM Cart WHERE ID_PRODOTTO = ? AND id_user = ?';
        db.run(sql, [product.id, user.id]);

        return true;
    } catch (error) {
        return false;
    }
};

