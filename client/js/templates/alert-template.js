"use strict";

/**
 * Crea e restituisce un blocco HTML per un messaggio di avviso per l'utenticazione 
 * @param {string} message - Il messaggio da visualizzare nell'alert
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createAlert(message) {
  return `    
<div class="modal fade" id="ErrorModal" data-bs-backdrop="static"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header"style="background: #0077b6">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Avviso!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${message}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`;
}

export {createAlert};