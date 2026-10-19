"use strict";

// Import del modulo Api e delle funzioni 
import Api from './api.js';
import createNavLinks from './templates/nav-template.js';
import {createHomePage} from './templates/home-template.js';
import {createCarrello} from './templates/carrello-template.js';
import {createProfilo} from './templates/profilo-template.js';
import {createProfumoUomo} from './templates/profumoUomo-template.js';
import {createProfumoDonna} from './templates/profumoDonna-template.js';
import {createPromo} from './templates/promo-template.js';
import {createNews} from './templates/news-tempate.js';
import {createAbout} from './templates/about-template.js';
import {createPrivacy} from './templates/privacy-template.js';
import {createCustomer} from './templates/customer-template.js';
import {createAlert} from './templates/alert-template.js';
import {createModalLogIn} from './templates/modal-LogIn-template.js';
import {createPagamento} from './templates/pagamento-template.js';
import {createOrdine} from './templates/ordine-template.js';
import page from "//unpkg.com/page/page.mjs";

class App {
    
    constructor(appContainer, navLinks) {
        this.user;
        this.appContainer = appContainer;
        this.navLinks = navLinks;
        this.logoutLink = document.querySelector('#logout');
        this.loginLink = document.querySelector('#login');
        this.profilo = document.querySelector('#profilo');
        this.ordine = document.querySelector('#ordine');
        this.logoutLink.addEventListener('click', this.logout);
        page('/home', () => {
            
            this.appContainer.innerHTML = createHomePage();
            this.appContainer.innerHTML+= createModalLogIn();
            document.getElementById('form-registrazione').addEventListener('submit', this.onRegistrationSubmitted);
            document.getElementById('form-login').addEventListener('submit', this.onLoginSubmitted);
            
              });
        page('/carrello', this.showCarrello);
        page('/profilo', this.showProfilo);
        page('/ordine', this.showOrdine);
        page('/profumoUomo', this.showProfumoUomo);
        page('/profumoDonna', this.showProfumoDonna);
        page('/promo', this.showPromo);
        page('/news', this.showNews);
        page('/about', this.showAbout);
        page('/customer', this.showCustomer);
        page('/privacy', this.showPrivacy);
        page('*', () => this.appContainer.innerHTML = 'Pagina non trovata!'); //errore 404 pagina non trovata 
        page();
        page.redirect('/home');
    }

    /**
     * Mostra la pagina del carrello
     * @param {*} carrello
     */
    showCarrello = async () => { 
        try {
            let datiCarrello=[];
            if(this.user && this.user!=""){
                datiCarrello = await  Api.getCartData(this.user); 
            }             
            const carrelloHTML = createCarrello(datiCarrello,this.user);
            this.appContainer.innerHTML = carrelloHTML;    
            this.appContainer.innerHTML+= createModalLogIn();
            this.appContainer.innerHTML += createPagamento();  
            var buttons = document.getElementsByTagName('button');
            for (var i =0;i< buttons.length;i++){
                buttons[i].addEventListener('click', this.rimuoviProdotto);
            }
            document.getElementById('form-login').addEventListener('submit', this.onLoginSubmitted);
            // Aggiungi l'evento click per il pulsante "Conferma Pagamento"
            document.getElementById('procedi').addEventListener('click', this.confermaPagamento);
        } catch(error) {
            page.redirect('/');
        }
    }

    /**
     * Gestisce la conferma del pagamento
     * @param {*} event - L'evento associato all'azione di conferma pagamento
     */
    confermaPagamento = async (event) => {
        event.preventDefault();
        const myModalAlternative = bootstrap.Modal.getOrCreateInstance('#modalPagamento');                
        myModalAlternative.show();
        document.getElementById('pagamento').addEventListener('click', this.convalidaPagamento);
   }

    /**
     * Convalida l'informazione di pagamento
     * @param {*} event - L'evento associato all'azione di convalida pagamento
     * @returns 
     */
    convalidaPagamento= async (event) => {
        event.preventDefault();
        const numeroCarta = document.getElementById('numeroCarta');
        const scadenza = document.getElementById('scadenza');
        const cvv = document.getElementById('cvv');
    
        const regexNumero = /^\d+$/;
        const regexScadenza = /^(0[1-9]|1[0-2])\/\d{2}$/;
    
        if (!numeroCarta.value.match(regexNumero) ) {
            alert('Per favore, completa correttamente il numero della carta di credito.');
            return;
        }
        if (!cvv.value.match(regexNumero) ) {
            alert('Per favore, completa correttamente il numero del CVV');
            return;
        }
        if ( !scadenza.value.match(regexScadenza)) {
            alert('Per favore, completa correttamente la scadenza della carta di credito');
            return;
        }
    
        alert('Pagamento confermato!');
        $('#modalPagamento').modal('hide'); // Chiude la modale dopo la conferma
    }

    /**
     * Rimuove un prodotto dal carrello dell'utente
     * @param {*} elem - L'elemento che ha scatenato l'azione
     */
    rimuoviProdotto = async (elem) => {
        var nomeprodotto = elem.target.getAttribute("nome");
        var username = elem.target.getAttribute("user");
        try {      
            const user = await Api.removeProduct(username,nomeprodotto); // Chiamata API per rimuovere il prodotto al carrello
            page.redirect('/carrello');
        } catch (error) {
            if (error) {
                const errorMsg = error;
                alertMessage.innerHTML = createAlert(errorMsg);
                const myModalAlternative = bootstrap.Modal.getOrCreateInstance('#ErrorModal');
                myModalAlternative.show();
            }
        }
    }

    /**
     * Mostra i dati del profilo dell'utente nell'interfaccia
     * @param {*} profilo - I dati del profilo dell'utente
     */
    showProfilo = async () => { 
        try {
            const datiProfilo = await Api.getUserData(this.user); 
            const profiloHTML = createProfilo(datiProfilo);
            this.appContainer.innerHTML = profiloHTML; 
        } catch(error) {
            page.redirect('/home');
        }
    }

    /**
     * Raggruppa gli elementi di una lista in base a una chiave specificata
     * @param {*} list - La lista di elementi da raggruppare
     * @param {*} keyGetter - Una funzione che restituisce la chiave per l'elemento dato
     * @returns Una mappa contenente gli elementi raggruppati per chiave
     */
    groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
             const key = keyGetter(item);
             const collection = map.get(key);
             if (!collection) {
                 map.set(key, [item]);
             } else {
                 collection.push(item);
             }
        });
        return map;
    }

    /**
     * Mostra la pagina degli ordini per l'utente corrente
     */
    showOrdine = async () => {
        try {    
            const datiOrdine = await Api.getOrdersByUsersId(this.user);
            const grouped = groupBy(datiOrdine, ordine => ordine.ID_ORDINE  );
            const ordiniHTML = createOrdine(grouped); 
            this.appContainer.innerHTML = ordiniHTML;       
        } catch(error) {
            page.redirect('/');
        }
    }
    
    /**
     * Mostra la pagina dei profumi da uomo
     * @param {*} profumoUomo
     */
    showProfumoUomo = async () => { 
        try {            
            this.appContainer.innerHTML = createProfumoUomo();
            this.appContainer.innerHTML+= createModalLogIn();
            let elements=document.querySelectorAll('[title="AddToCart"]');
            for(let i=0;i<elements.length;i++){
                elements[i].addEventListener('click', this.onAddToCart);
            }           
            document.getElementById('form-login').addEventListener('submit', this.onLoginSubmitted);
      
        } catch(error) {
            page.redirect('/home');
        }
    }
    
    /**
     * Mostra la pagina dei profumi da donna
     * @param {*} profumoDonna
     */
    showProfumoDonna = async () => { 
        try {            
            this.appContainer.innerHTML = createProfumoDonna();
            this.appContainer.innerHTML+= createModalLogIn();
            let elements=document.querySelectorAll('[title="AddToCart"]');
            for(let i=0;i<elements.length;i++){
                elements[i].addEventListener('click', this.onAddToCart);
            }           
            document.getElementById('form-login').addEventListener('submit', this.onLoginSubmitted);     
        } catch(error) {
            page.redirect('/home');
        }
    }

    /**
     * Mostra la pagina dei profumi in promozione
     * @param {*} promo
     */
    showPromo = async () => {
        try {
            this.appContainer.innerHTML = createPromo();
            this.appContainer.innerHTML+= createModalLogIn();
            let elements=document.querySelectorAll('[title="AddToCart"]');
            for(let i=0;i<elements.length;i++){
                elements[i].addEventListener('click', this.onAddToCart);
            }
            document.getElementById('form-login').addEventListener('submit', this.onLoginSubmitted);   
        } catch(error) {
            page.redirect('/home');
        }
    }

    /**
     * Mostra la pagina delle novità
     * @param {*} news
     */
    showNews = async () => {
        try {
            this.appContainer.innerHTML = createNews();
            this.appContainer.innerHTML+= createModalLogIn();
            let elements=document.querySelectorAll('[title="AddToCart"]');
            for(let i=0;i<elements.length;i++){
                elements[i].addEventListener('click', this.onAddToCart);
            }
            document.getElementById('form-login').addEventListener('submit', this.onLoginSubmitted);   
        } catch(error) {
            page.redirect('/home');
        }
    }


    /**
     * Mostra la pagina about 
     * @param {*} about
     */
    showAbout = async () => {      
        try {    
            this.appContainer.innerHTML = createAbout();
        } catch(error) {
            page.redirect('/home');
        }
    }
    
    /**
     * Mostra la pagina customer service 
     * @param {*} customer
     */
    showCustomer = async () => {
        try {
            this.appContainer.innerHTML = createCustomer();
        } catch(error) {
            page.redirect('/home');
        }
    }

    /**
     * Mostra la pagina  privacy policy 
     * @param {*} privacy
     */
    showPrivacy = async () => {
        try {
            this.appContainer.innerHTML = createPrivacy();   
        } catch(error) {
            page.redirect('/home');
        }
    }


    /**
     * Renderizza la barra di navigazione e mostra il link di logout
     */
    renderNavBar = (active) => {
        this.navLinks.innerHTML = '';
        this.navLinks.insertAdjacentHTML('beforeend', createNavLinks(active));
        this.logoutLink.classList.remove('invisible');
        this.profilo.classList.remove('invisible');
        this.ordine.classList.remove('invisible');
    };

    /**
     * Aggiorna la visualizzazione del carrello
     * @param {boolean} active - Indica se il carrello è attivo o meno
    */
    renderCarrello = (active) => {
        this.navLinks.innerHTML = '';
        this.navLinks.insertAdjacentHTML('beforeend', createNavLinks(active));
        this.logoutLink.classList.remove('invisible');
        this.profilo.classList.remove('invisible');
        this.ordine.classList.remove('invisible');
    };

    /**
     * Esegui il logout
     */
    logout = async () => {
        this.logoutLink.classList.add('invisible');
        this.profilo.classList.add('invisible');
        this.ordine.classList.add('invisible');
        this.loginLink.classList.remove('invisible');
        await Api.doLogout();
        this.user=""
        page.redirect('/home');
    }

    /**
     * Gestisce l'evento di clic sul pulsante "Aggiungi al carrello"
     * @param {*} event - L'evento di clic
     */
    onAddToCart = async (event) => {
        event.preventDefault();
        const alertMessage = document.getElementById('alert-message');
        try {
            let nomeProdotto = event.srcElement.parentElement.getElementsByTagName("h5")[0].innerText; // Ottieni il nome del prodotto dalla struttura del DOM
            const user = await Api.AddToCart(this.user, nomeProdotto); // Chiamata API per aggiungere il prodotto al carrello

        } catch (error) {
            if (error) {
                const errorMsg = error;

                alertMessage.innerHTML = createAlert(errorMsg); // Aggiungi un messaggio di avviso nel DOM
                const myModalAlternative = bootstrap.Modal.getOrCreateInstance('#ErrorModal'); // Mostra errore
                myModalAlternative.show();
            }
        }
    }   

    /**
     * Gestisce l'evento di sottomissione del form di login
     * @param {*} event - L'evento di sottomissione del form
     */
    onLoginSubmitted = async (event) => {
        event.preventDefault();
        const form = event.target;
        const alertMessage = document.getElementById('alert-message');

        if (form.checkValidity()) {
            try {
                this.user = await Api.doLogin(form.username.value, form.password.value);
                this.logoutLink.classList.remove('invisible');
                this.profilo.classList.remove('invisible');
                this.ordine.classList.remove('invisible');
                this.loginLink.classList.add('invisible');
               
                // Benvenuto all'utente
                const welcomeMessage = 'Benvenuto!';
                alertMessage.innerHTML = createAlert(welcomeMessage);  // Aggiungi un messaggio di avviso nel DOM
                const myModalAlternative = bootstrap.Modal.getOrCreateInstance('#ErrorModal');                
                myModalAlternative.show();

                page.redirect('/profilo');
            } catch (error) {
                if (error) {
                    const errorMsg = error;

                    alertMessage.innerHTML = createAlert( errorMsg);            
                    const myModalAlternative = bootstrap.Modal.getOrCreateInstance('#ErrorModal');                
                    myModalAlternative.show();
                }
            }
        }
    }

    /**
     * Event listener per la sottomissione del modulo di Registrazione. Gestisce la Registrazione di un nuovo utente
     * @param {*} event 
     */
    onRegistrationSubmitted = async (event) => {
        event.preventDefault();
        const form = event.target;
        const alertMessage = document.getElementById('alert-message');
    
        if (form.checkValidity()) {
            try {
                await Api.doRegistration(form.username.value, form.email.value, form.password.value, form.address.value);
                this.logoutLink.classList.remove('invisible');
                
                // Benvenuto all'utente
                const welcomeMessage = 'Registrazione Effettuata!';
                alertMessage.innerHTML = createAlert(welcomeMessage);
                const myModalAlternative = bootstrap.Modal.getOrCreateInstance('#ErrorModal');                
                myModalAlternative.show();

            } catch (error) {
                    if (error) {
                        const errorMsg = error;
                        alertMessage.innerHTML = createAlert('danger', errorMsg);
                    }
                }
            }
        }
    }

    /**
     * Raggruppa gli elementi di una lista in base a una chiave specificata
     * @param {*} list - La lista di elementi da raggruppare
     * @param {*} keyGetter - Una funzione che restituisce la chiave per l'elemento dato
     * @returns Una mappa contenente gli elementi raggruppati per chiave
     */
    function groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    
export default App;