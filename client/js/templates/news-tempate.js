"use strict";

/**
 * Crea e restituisce un blocco HTML che contiene le nuove uscite
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createNews() {
    return `<!-- Contenuto della pagina -->
    <section class="container my-5 text-center">
        <h2 class="mb-4">NOVITÀ DEL MOMENTO</h2>
    
        <!-- Lista di profumi -->
        <div class="container text-center">
            <div class="row tex">
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/news09.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                        <h5 class="card-title">Rouge</h5>
                        <details>
                            <summary>Fumo di Legna: Profumo Intenso e Avvolgente per le Stagioni Invernali</summary>
                            <p class="card-text"><em>Un profumo cuoiato e fumoso che cattura l'essenza delle stagioni invernali. Le note robuste di cuoio si mescolano armoniosamente con accenti affumicati, creando un'atmosfera avvolgente e avventurosa. Questo profumo evoca una sensazione di calore e mistero, ideale per abbracciare l'atmosfera unica delle fredde giornate invernali.</em></p>
                        </details>
                        <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                        <p class="card-text"><small class="text-muted">€40,00</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/news10.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                        <h5 class="card-title">Private</h5>
                        <details>
                            <summary>Inverno Radioso</summary>
                            <p class="card-text"><em>Un profumo gioioso e corroborante che cattura l'essenza delle stagioni invernali. Le note vivaci e rinvigorenti si fondono armoniosamente, creando un bouquet che evoca una sensazione di calore e vitalità durante le fredde giornate invernali. Inverno Radioso è l'accompagnamento perfetto per celebrare la magia e la gioia di questa stagione unica.</em></p>
                        </details>
                        <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                        <p class="card-text"><small class="text-muted">€40,00</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </section>`;
}

export {createNews};
