"use strict";

/**
 * Crea e restituisce un blocco HTML che contiene i prodotti in promozione
 * @returns {string} Una stringa che rappresenta il blocco HTML
 */

function createPromo() {
    return `<!-- Contenuto della pagina -->
    <section class="container my-5 text-center">
        <h2 class="mb-4">PROFUMI IN PROMO</h2>
    
        <!-- Lista di profumi -->
        <div class="container text-center">
            <div class="row tex">
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/promo07.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                        <h5 class="card-title">Absolute</h5>
                        <details>
                            <summary>Spezie Estive: Scintille di Aromi per l'Estate</summary>
                            <p class="card-text"><em>Una fragranza speziata pensata per le giornate estive più calde. Le note vivaci di spezie esotiche si mescolano armoniosamente con accenti freschi e agrumati, creando un'atmosfera energica e avvolgente. Questo profumo evoca una sensazione di vitalità e audacia, perfetta per chi ama sperimentare e lasciare un'impronta indelebile ovunque vada durante le calde giornate estive.</em></p>
                        </details>
                        <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                        <p class="card-text"><small class="text-muted">€15,00</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/promo08.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                        <h5 class="card-title">Vanille</h5>
                        <details>
                            <summary>Fiori Estivi: La Freschezza dei Petali per l'Estate</summary>
                            <p class="card-text"><em>Questa fragranza incarna l'essenza vivace dei fiori in piena fioritura durante le calde giornate estive. Le note principali di petali freschi e leggere si fondono armoniosamente, creando un bouquet floreale che evoca un senso di leggerezza e gioia. Questo profumo è l'accompagnamento perfetto per le giornate assolate, diffondendo un'atmosfera di freschezza e vitalità ovunque tu vada.</em></p>
                        </details>
                        <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                        <p class="card-text"><small class="text-muted">€15,00</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </section>`;
}

export {createPromo};
