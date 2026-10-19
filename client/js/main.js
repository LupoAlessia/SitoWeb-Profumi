"use strict";

import App from './app.js';

const appContainer = document.querySelector('#app-container');  // Elemento HTML che fungerà da contenitore per l'app
const navLinks = document.querySelector('#nav-links');  // I link di navigazione


const app = new App(appContainer, navLinks);  // creazione dell'app
