"use strict";

/**
 * Crea e restituisce un blocco HTML che contiene informazioni riguardanti la sezione "About" dell'azienda
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createAbout() {
    return `
    <section id="about">
        <h2><strong>Chi Siamo</strong></h2>
        <p>Siamo un team appassionato di esperti del settore dei profumi, dedicati a fornire prodotti di alta qualità per uomini e donne. La nostra missione è creare fragranze che ispirino fiducia, stile e benessere.</p>
        <p>Ogni profumo che offriamo è stato creato con cura, utilizzando ingredienti pregiati e tecniche di produzione all'avanguardia. Siamo fieri di offrire una vasta selezione di fragranze, ognuna progettata per adattarsi a diverse personalità e occasioni.</p>
        <p>La tua soddisfazione è la nostra priorità. Siamo qui per aiutarti a trovare il profumo perfetto che si adatta al tuo stile di vita e alla tua personalità unica. Esplora la nostra collezione e scopri il profumo che fa per te.</p>
    </section>
    `;
}

export {createAbout};
