"use strict";

/**
 * Crea e restituisce un blocco HTML che rappresenta la pagina dei Profumi da Uomo
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createProfumoUomo() {
    return `
    <!-- Contenuto della pagina -->
    <section class="container my-5 text-center">
        <h2 class="mb-4">PROFUMI DA UOMO</h2>

        <!-- Lista di profumi -->
        <div class="container text-center">
            <div class="row">
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/uomo01.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Megamare</h5>
                            <details>
                                <summary>Oceanica: Profumo di Libertà Estiva</summary>
                                <p class="card-text"><em>Cattura l'essenza rinfrescante e avvolgente del mare in una fragranza unica. Le note di testa di agrumi sprizzanti si mescolano con l'aroma rilassante del sale marino, creando un'atmosfera che evoca immediatamente la brezza dell'oceano. I toni mediterranei di lavanda e rosmarino conferiscono al profumo una profondità che richiama i paesaggi costieri. Onda Oceanica è l'incarnazione di una giornata estiva perfetta, un'ode alla libertà e alla serenità che solo il mare può offrire.</em></p>
                            </details>
                            <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                            <p class="card-text"><small class="text-muted">€20,00</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/uomo02.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Malibu</h5>
                            <details>
                                <summary>Fiori di Primavera Radiosa </summary>
                                <p class="card-text"><em>È una fragranza fruttata che cattura l'essenza della primavera in piena fioritura. Le note principali di frutti freschi come pesca e melograno si mescolano armoniosamente con sentori di petali di rosa e fiori di pesco. Questo profumo evoca una sensazione di gioia e vitalità, come passeggiare in un giardino in fiore durante una luminosa giornata primaverile. Fiori di Primavera Radiosa è la scelta perfetta per coloro che desiderano avvolgersi in una fragranza fresca e vivace che celebra la bellezza della stagione primaverile.</em></p>
                            </details>
                            <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                            <p class="card-text"><small class="text-muted">€35,00</small></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm p-0">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="./Immagini/uomo03.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-title">Valentino</h5>
                            <details>
                                <summary>Essenza Invernale di Cedro Profondo</summary>
                                <p class="card-text"><em>Offre un'esperienza sensoriale avvolgente, perfetta per le fredde giornate invernali. Le note principali di cedro, arricchite da accenti di patchouli e sandalo, creano un bouquet intenso e avvolgente. Questo profumo evoca la sensazione di camminare in una foresta di alberi di cedro imponenti e maestosi, con il suolo croccante sotto i piedi. L'Essenza Invernale di Cedro Profondo è una scelta sofisticata per chi cerca un aroma che incornici con eleganza la magia delle stagioni fredde.</em></p>
                            </details>
                            <button title="AddToCart" class="btn btn-dark">Aggiungi al carrello</button>
                            <p class="card-text"><small class="text-muted">€30,00</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export {createProfumoUomo};
