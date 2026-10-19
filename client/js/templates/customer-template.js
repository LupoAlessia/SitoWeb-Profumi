"use strict";

/**
 * Crea e restituisce un blocco HTML che contiene la sezione "Custumer service" ovvero informazioni sul Servizio Clienti
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createCustomer() {
    return `
    <section id="customer">
        <h2><strong>Servizio Clienti</strong></h2>
        <p>Il nostro servizio clienti è qui per aiutarti con qualsiasi domanda o problema tu possa avere. Siamo disponibili tramite telefono, email e social.</p>
        <p>Orari di apertura:</p>
        <p>Lunedì - Venerdì: 9:00 - 18:00</p>
        <p>Sabato - Domenica: Chiuso</p>
    </section>
    `;
}

export {createCustomer};

