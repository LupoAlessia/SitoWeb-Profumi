"use strict";

/**
 * Crea e restituisce un blocco HTML che rappresenta la finestra modale di accesso
 * @returns {string} Una stringa che rappresenta il blocco HTML per la finestra modale
 */

function createModalLogIn() {
  return`
  <!-- SEZIONE LOGIN -->
  <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="loginModalLabel">Accedi al tuo account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Form di login -->
          <form method="POST" id="form-login" action="">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="username" class="form-control" id="username" name="username" required>
            </div>   
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Accedi</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="form-search-cancel">Esci</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  `;
}

export {createModalLogIn};