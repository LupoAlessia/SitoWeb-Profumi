"use strict";

/**
 * Crea e restituisce un blocco HTML che rappresenta la finestra modale di inserimento credenziali di pagamento
 * @returns  Il markup HTML per la finestra modale
 */

function createPagamento(){
    return `  
    <div class="modal fade" id="modalPagamento" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Inserisci Credenziali di Pagamento</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="numeroCarta">Numero di Carta</label>
                            <input type="text" class="form-control" id="numeroCarta" placeholder="Inserisci il numero di carta">
                        </div>
                        <div class="form-group">
                            <label for="scadenza">Scadenza</label>
                            <input type="text" class="form-control" id="scadenza" placeholder="MM/AA">
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" class="form-control" id="cvv" placeholder="Inserisci il CVV">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" id="pagamento">Pagamento</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="form-search-cancel">Esci</button>         
                </div>
            </div>
        </div>
    </div>
`;
}

export {createPagamento};