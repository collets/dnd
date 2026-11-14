# D&D — progetti e personaggi

Repository di lavoro per progetti legati a **Dungeons & Dragons**: strumenti, schede di supporto, materiali originali e note sui personaggi.

## Struttura

- [`apps/card-studio/`](apps/card-studio/) — generatore di carte di riferimento stampabili, **riutilizzabile per qualunque PG**.
- [`characters/`](characters/) — appunti e configurazioni dei singoli personaggi; la logica del generatore non va qui.
- [`docs/`](docs/) — specifiche tecniche e istruzioni di stampa.
- [`WORK_HANDOFF.md`](WORK_HANDOFF.md) — contesto e prossimi passi per continuare lo sviluppo in ChatGPT Work / desktop.

## Card Studio

Il primo mazzo di prova è dedicato a **Kaladin Laufvörður**, Druido Elfo dei Boschi di livello 1 (regole 2024). **È un dataset di esempio**, non il nome né il limite dell'app.

Apri [`apps/card-studio/index.html`](apps/card-studio/index.html) in un browser locale. Funziona senza framework, dipendenze o build step. Per la stampa usa il pulsante **Stampa**, formato A4, scala 100%, sfondi attivi.

## Principi

- Una **singola fonte di dati per mazzo**; layout e rendering condivisi.
- Carte **solo fronte**, formato MTG 63 × 88 mm, 9 carte per A4; retro vuoto.
- Stampa pensata per **carta adesiva**, da applicare su carte bianche esistenti.
- Testi sintetici originali come promemoria; verificare le regole ufficiali con il manuale/DM.
- Non pubblicare qui copie integrali di manuali protetti, schede private o materiale sensibile.

## Stato

**Prototipo iniziale.** Design e contenuti del mazzo Kaladin ancora da rifinire; non è una stampa finale validata.
