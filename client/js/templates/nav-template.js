"use strict";

/**
 * Creazione dei link per la barra di navigazione
 * @param {*} active - La sezione attiva
 * @returns {string} - Una stringa contenente i link di navigazione
 */

function createNavLinks(active) {
    return` 
    <a class="nav-link ${active==='navbar' ? 'active' : ''}" ${active==='navbar' ? 'aria-current="page"' : ''} href="/">Navbar</a>
    <a class="nav-link ${active==='profilo' ? 'active' : ''}" ${active==='profilo' ? 'aria-current="page"' : ''} href="/profilo">Profilo</a>
    <a class="nav-link ${active==='ordine' ? 'active' : ''}" ${active==='ordine' ? 'aria-current="page"' : ''} href="/ordine">Ordini</a>
    <a class="nav-link ${active==='carrello' ? 'active' : ''}" ${active==='carrello' ? 'aria-current="page"' : ''} href="/carrello">Carrello</a>
    <a class="nav-link ${active==='profumiUomo' ? 'active' : ''}" ${active==='profumiUomo' ? 'aria-current="page"' : ''} href="/profumiUomo">Profumi Uomo</a>
    <a class="nav-link ${active==='profumiDonna' ? 'active' : ''}" ${active==='profumiDonna' ? 'aria-current="page"' : ''} href="/profumiDonna">Profumi Donna</a>`
}

export default createNavLinks;