# Specifiche di stampa delle carte

**Obiettivo:** carte solo fronte da applicare come adesivo a supporti di formato MTG.

- Carta: 63 × 88 mm.
- A4: 210 × 297 mm.
- Griglia: 3 × 3 = 9 carte.
- Ingombro griglia: 193 × 270 mm (3×63 + 2×2; 3×88 + 2×3).
- Margini layout: 8,5 mm laterali, 13,5 mm verticali.
- Altezza carta gestita tramite CSS in **mm**, non mediante conversione di pixel.
- Per lo schermo: px CSS equivalenti teorici a 96 dpi → circa 238,11 × 332,60 CSS px; **per la stampa prevalgono i mm**.

Stampa con scala 100%, nessun margine aggiunto dal browser, sfondi attivi, intestazioni e piè disattivati. Verificare tolleranze meccaniche della stampante e possibile area non stampabile. Se necessario, introdurre nel prossimo sprint impostazioni di offset, bleed o crop marks. Non assumere che il layout di stampa sia già calibrato per tutte le stampanti.
