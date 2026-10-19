"use strict";

/**
 * Crea e restituisce un blocco HTML che rappresenta il carrello degli acquisti per un determinato utente
 * @param {Array} datiCarrello - Un array di oggetti che contiene i dettagli dei prodotti nel carrello
 * @param {string} user - Il nome utente associato al carrello
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createCarrello(datiCarrello,user) {
    const prodottiHTML = datiCarrello.map(prodotto => `
        <div class="prodotto">
            <div class="dettagli">
                <h4>${prodotto.name}</h4>
                <p>Quantità: ${prodotto.quantity}</p>
                <p>Prezzo: €${parseFloat(prodotto.price).toFixed(2)}</p>
                <button class="rimuovi" nome='${prodotto.name}' quantity= '${prodotto.quantity}' prezzo = '${parseFloat(prodotto.price).toFixed(2)}' user ='${user}'>Rimuovi dal Carrello</button>
            </div>
        </div>
     `).join('');

     const totaleProdotti = datiCarrello.reduce((acc, prodotto) => acc + prodotto.quantity, 0);
     const totalePrezzo = datiCarrello.reduce((acc, prodotto) => acc + (parseFloat(prodotto.price) * prodotto.quantity), 0).toFixed(2);

     return `
     <div class="contenitoreCarrello">
         <h1>Il tuo Carrello</h1>

         <section class="carrello">
             ${prodottiHTML}
         </section>

         <section class="riepilogo">
             <h2>Riepilogo Ordine</h2>
             <p>Totale prodotti: ${totaleProdotti}</p>
             <p>Totale: €${totalePrezzo}</p>
             <a id="procedi" class="btn btn-dark" href="/home" role="button">Procedi all'Acquisto</a>
         </section>
     </div>
     <footer id="footerCarrello">
         <p>&copy; 2023 <em>Prefume Boutique</em></p>
     </footer>
 `;
}
export {createCarrello};
