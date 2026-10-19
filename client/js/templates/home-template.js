"use strict";

/**
 * Crea e restituisce un blocco HTML che rappresenta la homepage del sito
 * @returns {string} Una stringa che rappresenta il blocco HTML 
 */

function createHomePage() {
  return`
  <div id="immagine">
    <img src="./Immagini/image2.jpg" alt="immagine non disponibile">
  </div>

  <!-- Promo e novità -->
  <section class="sezione-icone bg-light text-center">
      <div class="container">
          <div class="row">
              <div class="col-md promo-container" id="sezione-promo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
                  <h2>Promo Speciale</h2>
                  <p class="mb-4">Approfitta della nostra offerta limitata!</p>
                  <a href="/promo" class="promo-link " id="promo-link">Scopri di più</a>
              </div>
              <div class="col-md promo-container" id="sezione-news">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>             
                  <h2>Ultime Novità</h2>
                  <p class="mb-4">Scopri i nostri nuovi arrivi di profumi.</p>
                  <a href="/news" class="promo-link " id="news-link">Scopri di più</a>
              </div>
          </div>
      </div>
  </section>  


  <!-- Registrazione -->
  <section class="sezione-button bg-light text-center" id="registrazioneSection">
      <div class="container">
        <div id="border-registrazione">
            <div class="d-grid gap-2 col-6 mx-auto">
              <h3>Benvenuto nel nostro servizio di registrazione</h3>
              <p class="mb-4">Sei nuovo, allora che stai aspettando registrati subito!</p>
              <a href="#registrazioneForm" class="btn btn-outline-danger" id="registratiBtn" data-bs-toggle="modal" data-bs-target="#SigUpModal">Registrati</a>
            </div>
        </div>
    </div>
  </section>


  <!-- Contatti e FAQ -->
  <footer class="footer bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 h-100 text-center text-lg-left">
          <ul class="list-inline mb-2">
            <li class="list-inline-item"><a href="/about">About</a></li>
            <li class="list-inline-item"><a href="/customer">Customer service</a></li>
            <li class="list-inline-item"><a href="/privacy">Privacy policy</a></li>
          </ul>
          <p class="text-muted small mb-4 mb-lg-0">© Your Website 2023. All Rights Reserved</p>
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-right">
          <ul class="list-inline mb-0">
            <li class="list-inline-item mr-3"><a href="mailto:20040191@studenti.uniupo.it" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                </svg>
                </a></li>
            <li class="list-inline-item mr-3"><a href="https://www.instagram.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                </a></li>
            <li class="list-inline-item mr-3"><a href="tel:+39347364705">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                </a></li>
          </ul>
        </div>
      </div>
    </div>
  <p>


  <!-- Validatori -->
  <a href="http://validator.w3.org/check/referer">
    <img width="70" src="https://upload.wikimedia.org/wikipedia/commons/b/bb/W3C_HTML5_certified.png" alt="Valid HTML5!">
  </a>
  </p>
  <p>

  <!-- Validatori -->
  <a href="http://jigsaw.w3.org/css-validator/check/referer">
    <img width="70" src="http://jigsaw.w3.org/css-validator/images/vcss" alt="Valid CSS!">
  </a>
  </p>
  </footer>

  <!-- Scroll -->
  <button onclick="window.scrollTo(0,0)" id="back-to-top">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
  </svg>
  </button>



  <!-- SEZIONE REGISTRAZIONE -->
  <div class="modal fade" id="SigUpModal" tabindex="-1" aria-labelledby="SigUpModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="SigUpModalLabel">Registrazione del tuo account</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <!-- Form di registrazione -->
                  <form method="POST" id="form-registrazione" action="">
                      <div class="mb-3">
                          <label for="username" class="form-label">Username</label>
                          <input type="text" class="form-control" id="username" name="username" required>
                      </div>
                      <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input type="text" class="form-control" id="email" name="email" required>
                      </div>
                      <div class="mb-3">
                          <label for="password" class="form-label">Password</label>
                          <input type="text" class="form-control" id="password" name="password" required>
                      </div>
                      <div class="mb-3">
                          <label for="address" class="form-label">Indirizzo</label>
                          <input type="text" class="form-control" id="address" name="address" required>
                      </div>
                      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" >Registra</button>
                      <button type="button" class="btn btn-danger" data-bs-dismiss="modal" id="form-search-cancel">Esci</button>
                  </form>
              </div>
          </div>
      </div>
  </div>

`;
}

export {createHomePage};