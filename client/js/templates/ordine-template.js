"use strict";

/**
 * Crea e restituisce un blocco HTML che rappresenta gli ordini effettuati
 * @returns {string} Una stringa che rappresenta il blocco HTML degli ordini
 */

let ordiniHTML ="";

let logMapElements= function(value, key, map) {
    ordiniHTML+= `
    <div class="ordine">
        <h4>Ordine ID: ${value[0].ID_ORDINE}</h4>`
    let totOrdine=0;
    value.forEach(e=>{
        let totCarrello
        ordiniHTML+=  `
            <p>Prodotto: ${e.name}</p>
            <p>Quantità: ${e.quantity}</p>
            <p>Prezzo: €${parseFloat(e.price).toFixed(2)}</p>`
        totCarrello=e.quantity*e.price
        ordiniHTML+=  `<p>Totale prodotto: €${totCarrello}</p>`
        totOrdine+=totCarrello
    })
    ordiniHTML+= `    
        <p id="totaleOrdine">Totale Ordine: €${totOrdine}</p>
     </div>`
}
function createOrdine(ordini) {
    ordiniHTML='';
    ordini.forEach(logMapElements);
    return `
        <div class="contenitoreOrdini">
            <h1>I Tuoi Ordini</h1>
            <section class="ordini">
                ${ordiniHTML}
            </section>
        </div>
        <footer id="footerOrdini">
            <p>&copy; 2023 <em>Prefume Boutique</em></p>
        </footer>
    `;
}

export {createOrdine};