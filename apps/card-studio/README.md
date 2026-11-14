# D&D Card Studio

Generatore sperimentale di carte-reference **per qualsiasi personaggio**, non soltanto Kaladin.

## Uso
Apri `index.html` in un browser (anche offline). Seleziona il mazzo e stampa.

## Aggiungere un personaggio
1. Crea `decks/nome-personaggio.js` seguendo la struttura di `decks/kaladin.js`.
2. Inserisci un nuovo elemento in `window.DND_DECKS` con `id`, `name`, `character`, `rules` e `cards`.
3. Collega il file con uno `<script src="decks/nome-personaggio.js"></script>` in `index.html`, prima di `app.js`.

Categorie e colori sono generici; contenuti e numeri sono specifici del personaggio. Le carte del primo mazzo sono un **prototipo**, non un riferimento esaustivo o completamente revisionato.

## Stampa
- Card MTG: **63 × 88 mm**
- Foglio **A4 verticale**: 3 colonne × 3 righe (9 carte)
- Margini del browser: nessuno; scala: 100%; intestazioni/piedi: disattivati; grafica di sfondo: attiva
- Stampa di prova su carta comune e misura una carta prima di usare carta adesiva
- Un solo lato stampato, retro lasciato vuoto
- Non usare «Adatta alla pagina» o riduzioni automatiche

## Architettura
- `decks/*.js`: dataset autonomi, uno per personaggio
- `app.js`: registry, rendering e suddivisione in pagine
- `styles.css`: design system e `@media print`
- `index.html`: UI e selezione mazzi

Nessuna dipendenza o asset esterno, così l'output di stampa è riproducibile offline.
