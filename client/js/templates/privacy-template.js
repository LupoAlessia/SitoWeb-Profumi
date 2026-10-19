"use strict";


/**
 * Crea e restituisce un blocco HTML che rappresenta la sezione "Privacy policy" della sito
 * @returns {string} Una stringa che rappresenta il blocco HTML
 */

function createPrivacy() {
    return `
    <section id="privacy">
        <h2><strong>Politica sulla Privacy</strong></h2>
        <p>La tua privacy è importante per noi. Di seguito, spieghiamo quali tipi di dati personali raccogliamo e come vengono utilizzati.</p>
        <p>Raccogliamo informazioni come nome, indirizzo e email al momento della registrazione. Questi dati vengono utilizzati esclusivamente per fornire i nostri servizi e non vengono condivisi con terze parti senza il tuo consenso.</p>
        <p>Per ulteriori dettagli sulla nostra politica sulla privacy, ti invitiamo a contattarci direttamente.</p>
    </section>
    `;
}

export {createPrivacy};
