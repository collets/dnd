# Passaggio a ChatGPT Work — D&D repo

## Repository
https://github.com/collets/dnd (branch principale: `main`).

## Visione
Repository **generale** per D&D. Primo sottoprogetto: `apps/card-studio/`, un'app browser per creare e stampare carte riassuntive fronte singolo per **qualsiasi personaggio**. Kaladin è soltanto il primo dataset, non un vincolo architetturale.

## Requisiti approvati
- Formato Magic: The Gathering 63 × 88 mm
- 9 carte per A4, stampa su carta adesiva applicata su carte bianche rigide
- Un solo fronte; retro vuoto o generico, non parte del primo sprint
- HTML/CSS/JS, file versionati in GitHub, usabili da diversi PC
- Grande leggibilità in sessione; contenuti modulari e ampliabili con avanzamenti di livello
- Regole D&D 2024; non duplicare manuali coperti da copyright nel repo

## Stato dei file
- `apps/card-studio/index.html`: punto di ingresso
- `apps/card-studio/app.js`: renderer generico
- `apps/card-studio/styles.css`: tema e stampa
- `apps/card-studio/decks/kaladin.js`: 9 carte prototipo
- `characters/kaladin/README.md`: dati essenziali narrativi e meccanici
- `docs/card-printing.md`: dimensioni e specifiche di stampa

## Lavoro successivo
1. Aprire repository in Work (GitHub connesso) e verificare il rendering HTML e la stampa effettiva su A4.
2. Affinare il design insieme all'utente, prima di generare tutte le carte.
3. Separare i dati condivisi dei privilegi/incantesimi dalle personalizzazioni di PG, quando si passa a più personaggi.
4. Gestire la densità del testo per evitare overflow; valutare controlli automatici di layout e anteprime.
5. Ampliare il mazzo Kaladin a tutte le capacità e gli incantesimi previsti, verificando rigorosamente il manuale.
6. Evitare copie dei PDF del Player's Handbook nel repository.

## Nota
Le statistiche e il documento di passaggio del personaggio sono stati condivisi nella conversazione originale. La scheda PDF ufficiale aggiornata prevale su note più vecchie (CA 15, Colpo Accurato 1d6+3). Alcune descrizioni sono sintetiche e vanno revisionate per uso al tavolo.
