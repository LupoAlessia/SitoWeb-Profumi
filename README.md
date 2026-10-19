# SitoWeb-Profumi
Applicazione web Fullstack sviluppata con Node.js, Express e SQLite per la gestione di un e-commerce. Include autenticazione utenti, gestione carrello, catalogo prodotti e storico ordini. Architettura backend basata su pattern DAO (Data Access Object) con interfaccia client integrata.

# 🌸 Perfume Boutique - E-Commerce Web Application

Applicazione Web Fullstack **Single Page Application (SPA)** per la vendita online di profumi e fragranze, sviluppata in **Node.js**, **Express** e **SQLite**.  
L'architettura separa nettamente il backend (gestito tramite il pattern **DAO - Data Access Object**) da un'interfaccia client reattiva e modulare basata su **JavaScript ES6 Modules**.

---

## 👤 Autore
* **Alessia Lupo** 

---

## 🛠️ Stack Tecnologico

* **Backend:** Node.js, Express.js
* **Database:** SQLite3 con pattern **DAO** (*Data Access Object*) per il disaccoppiamento dell'accesso ai dati
* **Autenticazione & Sessioni:** Express-Session, Passport.js, gestione password e sessioni utente
* **Frontend:** HTML5, CSS3 (`customs.css`), JavaScript ES6 (Moduli e Template Literals per il rendering dinamico delle viste)

---

## 🚀 Funzionalità Principali

- **Autenticazione Utenti (`user-dao.js`):** Registrazione di nuovi account, login e gestione della sessione.
- **Catalogo Profumi (`products-dao.js`):** Gestione dinamica dei prodotti divisi per categorie (Uomo, Donna, Novità e Promo Speciali).
- **Carrello Acquisti (`Cart-dao.js`):** Aggiunta, modifica, rimozione articoli e calcolo automatico in tempo reale dei totali.
- **Gestione Ordini & Checkout (`order-dao.js`):** Form di pagamento modale, invio dell'ordine e storico delle transazioni utente.
- **Frontend Modulare SPA:** Interfaccia dinamica senza ricaricamento della pagina, sviluppata con componenti e template JS separati (`client/js/`).

---
