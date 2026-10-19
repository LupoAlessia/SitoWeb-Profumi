"use strict";


/**
 * Crea e restituisce un blocco HTML che rappresenta la pagina dei Profumi da Donna
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createProfumoDonna() {
    return `<!-- Contenuto della pagina -->
    <section class="container my-5 text-center">
        <h2 class="mb-4">PROFUMI DA DONNA</h2>

        <!-- Lista di profumi -->
        <div class="container text-center">
            <div class="row">
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/donna04.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Amber</h5>
                            <details>
                                <summary>Amber: L'Eleganza dell'Autunno in una Fragranza</summary>
                                <p class="card-text"><em>Immergiti nell'atmosfera avvolgente dell'autunno con Amber, una fragranza che incarna l'essenza di questa stagione magica. Le note iniziali di foglie di quercia e bacche di ginepro si intrecciano armoniosamente con un cuore di cannella calda e patchouli terrosi, creando un bouquet olfattivo ricco e avvolgente. Le note di fondo di vaniglia e ambra conferiscono un tocco di eleganza e mistero, rendendo Amber l'accompagnamento ideale per le giornate fresche e le serate accoglienti dell'autunno. Indossa questa fragranza e lasciati trasportare in un viaggio sensoriale attraverso i colori e gli odori della stagione autunnale.</em></p>
                            </details>
                            <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                            <p class="card-text"><small class="text-muted">€25,00</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/donna05.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Tiffany</h5>
                            <details>
                                <summary>Tiffany: Dolcezza Incantata dell'Inverno</summary>
                                <p class="card-text"><em> Esplora l'incanto dell'inverno con Tiffany, un profumo dolce che cattura l'essenza di questa stagione magica. Le note di testa di mandarino vivace e vaniglia cremosa si fondono dolcemente con un cuore di miele dorato e orchidea bianca, creando un bouquet olfattivo avvolgente e invitante. Le note di fondo di legno di sandalo e ambra conferiscono un tocco di eleganza e calore, rendendo Tiffany l'accompagnamento perfetto per le fredde giornate invernali e le serate incantate davanti al camino. Indossa questo profumo e lasciati trasportare in un viaggio sensoriale attraverso i colori e gli odori della stagione invernale.</em></p>
                            </details>
                            <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                            <p class="card-text"><small class="text-muted">€30,00</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/donna06.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Fiorito</h5>
                            <details>
                                <summary>Fiorito: Euforia Estiva al Profumo di Bergamotto</summary>
                                <p class="card-text"><em>Esplora l'euforia dell'estate con Fiorito, un profumo al bergamotto che cattura l'essenza di questa stagione vibrante. Le note di testa sprizzanti di bergamotto italiano e limone si fondono armoniosamente con un cuore di fiori d'arancio e gelsomino, creando un bouquet olfattivo fresco e vivace. Le note di fondo di legno di cedro e muschio bianco conferiscono un tocco di eleganza e leggerezza, rendendo Fiorito l'accompagnamento ideale per le giornate calde e le notti stellate dell'estate. Indossa questo profumo e lasciati trasportare in un viaggio sensoriale attraverso i colori e gli odori della stagione estiva.</em></p>
                            </details>
                            <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                            <p class="card-text"><small class="text-muted">€35,00</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

export {createProfumoDonna};
