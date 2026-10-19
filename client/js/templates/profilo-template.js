"use strict";

/**
 * Crea e restituisce un blocco HTML che rappresenta la pagina del Profilo di un utente
 * @param {Object} datiProfilo - Oggetto contenente i dati del profilo utente (nome, email, indirizzo)
 * @returns {string} Una stringa che rappresenta il blocco HTML
 */

function createProfilo(datiProfilo) {
    const {nome, email, indirizzo} = datiProfilo;

    return `  
        <div class="contenitoreProfilo">
            <h1>Benvenuto nel tuo Profilo</h1>
            <section class="profilo">
                <h2>Dati Utente</h2>
                <div class="informazioni-personali">
                    <div class="mb-3">
                        <label for="inp_name" class="form-label">Nome</label>
                        <span id="nome">${nome}</span><br>
                        <div class="form-text">Nome dell'utente registrato</div>
                    </div>
                    <div class="mb-3">
                        <label for="inp_email" class="form-label">Email</label>
                        <span id="email">${email}</span><br>
                        <div class="form-text">Non condivideremo la tua email con nessun'altro.</div>
                    </div>
                    <div class="mb-3">
                        <label for="inp_indirizzo" class="form-label">Indirizzo</label>
                        <span id="indirizzo">${indirizzo}</span><br>
                        <div class="form-text">Indirizzo dell'utente registrato</div>
                    </div>
                </div>
            </section>
        </div>
        <footer id="footerProfilo">
            <p>&copy; 2023 <em>Prefume boutique</em></p>
        </footer>`;
}

export {createProfilo};