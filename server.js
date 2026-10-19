"use strict";

// imports
const express = require('express'); // creazione del server
const morgan = require('morgan'); // logging middleware
const userDao = require('./user-dao.js');
const cartDao = require('./Cart-dao.js');
const orderDao= require('./order-dao.js');
const path = require('path'); // gestione dei percorsi dei file
const passport = require('passport'); // middleware per l'autenticazione
const LocalStrategy = require('passport-local').Strategy; // autenticazione tramite username  password
const session = require('express-session'); // gestione delle sessioni
const FileStore = require('session-file-store')(session); // la sessione invece di essere mantenuta nella memoria del server, la voglio memorizzare in uno store locale 


/**
 * Configurazione della strategia di login "username e password"
 * definendo una funzione per verificare username e password
 */
passport.use(new LocalStrategy(
  function(username,  password, done) {
    userDao.getUserByUsername(username, password).then(({ user, passwordCheck }) => {
      if (!user) {
        return done(null, false, { message: 'Nome utente non valido' });
      }
      if (!passwordCheck) {
        return done(null, false, { message: 'Password non valida' });
      }
      
      return done(null, user);
    })
    .catch(err => done(err));
  }
));


/**
 * Serializza l'utente per la sessione
 * @param {Object} user - L'oggetto utente da serializzare
 * @param {function} done - Funzione di callback per segnalare il completamento
 */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});


/**
 * Deserializza l'utente durante la sessione
 * @param {number} id - L'ID dell'utente da deserializzare
 * @param {function} done - Funzione di callback per segnalare il completamento
 */
passport.deserializeUser(function(id, done) {
  userDao.getUserById(id).then(user => {
    done(null, user);
  });
});


const app = express();  // Inizializza l'applicazione Express.
const port = 3000;  //creazione dell'app con porta 3000

app.use(morgan('tiny'));  // Configura il middleware


/**
 * Verifica se una determinata richiesta proviene da un utente autenticato
 * @param {*} req - Oggetto della richiesta
 * @param {*} res - Oggetto della risposta
 * @param {*} next - Funzione di callback per passare la richiesta al prossimo middleware
 * @returns 
 */
const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    return res.status(401).json({"statusCode" : 401, "message" : "non autenticato"});
}


app.use(express.static('client'));  // Serve i file statici dalla cartella 'client'
app.use(express.json());  //Interpretare i parametri codificati in formato JSON

/**
 * Configurazione della sessione
 */
app.use(session({
    store: new FileStore(), // Usa un memstore locale per tracciare le sessioni
    secret: 'a secret sentence not to share with anybody and anywhere, used to sign the session ID cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { sameSite: 'lax' }
  }));


app.use(passport.initialize()); //Inizializza Passport per l'autenticazione
app.use(passport.session());  //Utilizza le sessioni di Passport per l'autenticazione

// === REST API  === //

/**
 * Ottiene i dati dell'utente dal server
 */
app.post('/api/getUserData', isLoggedIn, (req, res) => {
  const user = req.body.user; // Ottieni l'utente dalla richiesta
  userDao.getUserData(user) // Chiamare una funzione che ottiene i dati dal database
  .then(data => res.json(data))
  .catch(error => res.status(500).json(error));
});


/**
 * Ottiene i dati del carrello dell'utente dal server
 */
app.post('/api/getCartData', isLoggedIn, (req,res)=>{
  const user = req.body.user; // Ottieni l'utente dalla richiesta
  cartDao.getCartData(user) // Chiamare una funzione che ottiene i dati dal database
  .then(data => res.json(data))
  .catch(error => res.status(500).json(error));
});


/**
 * Aggiunge un prodotto al carrello dell'utente
 */
app.post('/api/addProductToCart', isLoggedIn, (req,res)=>{
    cartDao.addProductToCart(req.body.user,req.body.product)  // Chiamare una funzione che aggiunge un prodotto al carrello dell'utente nel database
    .then(data => res.json(data))
    .catch(error => res.status(500).json(error));
});


/**
 * Rimuove un prodotto dal carrello dell'utente
 */
app.post('/api/removeProductFromCart', isLoggedIn, (req,res)=>{
  cartDao.removeProductFromCart(req.body.user,req.body.product) // Chiamare una funzione che rimuove un prodotto dal carrello dell'utente dal database
  .then( success => {
      if (success) {
          res.json({ message: "Prodotto rimosso dal carrello con successo." });
      } else {
          res.status(500).json({ error: "Si è verificato un errore durante la rimozione del prodotto dal carrello." });
      }
  })
  .catch(error => res.status(500).json(error));
});

/**
 * Registra un nuovo utente
 */
app.post('/api/registration', function(req, res) {
  // Creare un oggetto utente dai dati della richiesta
  const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address
  };
  userDao.createUser(user)  // Chiamare una funzione che crea un nuovo utente nel database
  .then((result) => res.status(201).header('Location', `/user/${result}`).end())
  .catch((err) => res.status(503).json({ error: 'Errore di database durante la registrazione'}));
});

/**
 * Gestisce l'autenticazione dell'utente
 */
app.post('/api/sessions', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) {
            return res.status(401).json(info);  // Mostrare messaggi di login errati
        }
        // Successo, esegui il login
        req.login(user, function(err) {
          if (err) { return next(err); }
          return res.json(req.user.username); // req.user contiene l'utente autenticato
        });
    })(req, res, next);
  });


/**
 * Esegue il logout dell'utente
 */
app.delete('/api/sessions/current', function(req, res){
    req.logout(function(err) {
        if (err) { return res.status(503).json(err); }
      });
    res.end();
  });

/**
 * Gestisce la richiesta POST per ottenere gli ordini di un utente.
 */
app.post('/api/getOrdersByUsersId', isLoggedIn, (req,res)=>{
  orderDao.getOrdersByUsersId(req.body.user)  // Chiamare una funzione che aggiunge un prodotto al carrello dell'utente nel database
  .then( orderData => res.json(orderData))
  .catch( error => res.status(500).json(error));
});

/**
 * Tutte le altre richieste GET devono essere gestite dall'applicazione client.
 */
app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'client/index.html'));
});

/**
 * Avvia il server
 */
app.listen(port, () => console.log(`server listening at http://localhost:${port}`));