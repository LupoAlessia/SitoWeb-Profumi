"use strict";

class Api {

    /**
     * Ottiene gli ordini associati all'ID dell'utente dal server
     * @param {*} user - L'ID dell'utente per cui recuperare gli ordini
     * @returns I dati degli ordini associati all'utente
     */
    static getOrdersByUsersId = async (user) => {
        try {
            let response = await fetch('/api/getOrdersByUsersId', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user}),
            });
            if(response.ok) {         
                const data = await response.json();
                return data;       
            }
            else {
                const errDetail = await response.json();
                throw errDetail.message;
            }
        }
        catch(err) {
            throw err;
        }
    }


    /**
     * Aggiunge un prodotto al carrello dell'utente
     * @param {*} user - L'utente a cui aggiungere il prodotto
     * @param {*} product - Il prodotto da aggiungere al carrello
     * @returns {boolean} - Restituisce true se l'operazione è andata a buon fine
     */
    static AddToCart = async (user, product) => {
        try {
            let response = await fetch('/api/addProductToCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({user, product}),
            });
            if(response.ok) {
                alert('Prodotto aggiunto al carrello con successo!');
                return true;
            }
            else {
                const errDetail = await response.json();
                throw errDetail.message;
            }
        }
        catch(err) {
            throw err;
        }
    }


    /**
     * Ottiene i dati del carrello dell'utente dal server
     * @param {*} user - L'utente di cui si vogliono ottenere i dati del carrello
     * @returns {Promise} Una Promise perchè effettua una richiesta al server per ottenere i dati del carrello dell'utente
     */
    static getCartData = async (user) => {
        let response = await fetch('/api/getCartData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        });
        if(response.ok) {
            const cartData = await response.json();
            return cartData;        
        }
        else {
            try {
                const errDetail = await response.json();
                throw errDetail.message;
            }
            catch(err) {
                throw err;
            }
        }
    }
    
    /**
     * Effettua il login dell'utente
     * @param {*} username - Il nome utente inserito dall'utente
     * @param {*} password - La password inserita dall'utente
     * @returns {Object} - Restituisce i dati dell'utente se il login ha successo
     */
    static doLogin = async (username, password) => {
        let response = await fetch('/api/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });
        if(response.ok) {
            const userData = await response.json();
            return userData;
        }
        else {
            try {
                const errDetail = await response.json();
                throw errDetail.message;
            }
            catch(err) {
                throw err;
            }
        }
    }

    /**
     * Effettua una richiesta di registrazione di un nuovo utente al server
     * @param {string} username - Il nome utente scelto dall'utente
     * @param {string} email - L'indirizzo email fornito dall'utente
     * @param {string} password - La password scelta dall'utente
     * @param {string} address - L'indirizzo fornito dall'utente durante la registrazione
     * @returns {Promise} - Restituisce una Promise che, se risolta con successo, conterrà i dati di registrazione. In caso di errore, verrà rigettata con un messaggio di errore
     */
    static doRegistration = async (username, email, password, address) => {
        let response = await fetch('/api/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, email, password, address}),
        });
        if(response.ok) {
            
            return true;
        }
        else {
            try {
                const errDetail = await response.json();
                throw errDetail.message;
            }
            catch(err) {
                throw err;
            }
        }
    }

    /**
     * Rimuove un prodotto dal carrello dell'utente
     * @param {*} user - L'utente da cui rimuovere il prodotto
     * @param {*} product - Il prodotto da rimuovere dal carrello
     * @returns {boolean} - Restituisce true se l'operazione è andata a buon fine
     */
    static removeProduct = async (user, product) => {
        let response = await fetch('/api/removeProductFromCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user, product }),
        });
    
        if (response.ok) {
            alert('Prodotto rimosso dal carrello con successo!');
            return true;
        } else {
            try {
                const errDetail = await response.json();
                throw errDetail.message;
            } catch (err) {
                throw err;
            }
        }
    }

    /**
     * Ottiene i dati dell'utente dal server.
     * @param {*} user - L'ID dell'utente per cui recuperare i dati.
     * @returns I dati dell'utente.
     */
    static getUserData = async (user) => {
        try {
            let response = await fetch('/api/getUserData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user }),
            });

            if (response.ok) {
                const userData = await response.json();
                return userData;
            } else {
                try {
                    const errDetail = await response.json();
                    throw errDetail.message;
                }
                catch (err) {
                    throw err;
                }
            }
        } catch (error) {
            throw error;
        }
    }

    
    /**
     * Esegue il logout dell'utente
     */
    static doLogout = async () => {
        await fetch('/api/sessions/current', { method: 'DELETE' });
    }
}

export default Api;