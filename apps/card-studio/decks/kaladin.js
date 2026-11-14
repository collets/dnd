/* First example deck. Add new decks without changing app.js or styles.css. */
window.DND_DECKS = window.DND_DECKS || [];
window.DND_DECKS.push({
 id:"kaladin",name:"Kaladin Laufvörður · Druido 1",character:"Kaladin Laufvörður",rules:"D&D 2024",
 cards:[
 {category:"SPECIE",series:"Elfo",title:"Tratti Elfici",subtitle:"Elfo · livello 1",tone:"forest",rune:"✧",traits:[
 ["Scurovisione","18 m."],["Retaggio Fatato","Vantaggio ai TS per evitare o terminare Affascinato."],["Trance","Completi il riposo lungo meditando per 4 ore."],["Sensi Acuti","Competenza in Sopravvivenza (+5)."]
 ],footer:"Tratti passivi"},
 {category:"SPECIE",series:"Lignaggio",title:"Elfo dei Boschi",subtitle:"Tratti del lignaggio · livello 1",tone:"forest",rune:"❧",traits:[
 ["Velocità","10,5 m (35 ft)."],["Druidismo","Conosci il trucchetto Artificio Druidico (Druidcraft)."],["Al livello 3","Passo Veloce (non ancora disponibile)."],["Al livello 5","Passare Senza Tracce (non ancora disponibile)."]
 ],footer:"Gli effetti futuri non si usano al livello 1"},
 {category:"BACKGROUND",series:"Approvato",title:"Guardiano della Foresta",subtitle:"Background personalizzato",tone:"amber",rune:"◈",traits:[
 ["Caratteristiche","+2 Saggezza, +1 Costituzione (inclusi nella scheda)."],["Abilità","Arcano (+6) e Percezione (+5)."],["Strumenti","Competenza negli strumenti da conciatore."],["Talento","Iniziato alla Magia (Mago)."]
 ],footer:"Difendere natura e libero arbitrio"},
 {category:"CLASSE",series:"Druido 1",title:"Magia Druidica",subtitle:"Privilegio di classe · livello 1",tone:"teal",rune:"✦",stats:[["SAG","16"],["ATT","+5"],["CD","13"],["SLOT 1","2"]],traits:[
 ["Preparati","Parola Guaritrice, Onda Tonante, Bacche Benefiche, Intralciare."],["Slot","2 slot di 1° livello condivisi tra gli incantesimi."],["Trucchetti","Lancio senza consumare slot."]
 ],footer:"Slot recuperati al riposo lungo"},
 {category:"CLASSE",series:"Druido 1",title:"Druidico",subtitle:"Lingua segreta e magia rituale",tone:"teal",rune:"⌁",traits:[
 ["Lingua","Conosci il Druidico."],["Parlare con gli Animali","Sempre preparato; non conta tra le scelte di preparazione."],["Rituale","Puoi lanciarlo come rituale senza consumare uno slot."],["Altre lingue","Comune, Elfico, Silvano."]
 ],footer:"Rituale: aggiungi 10 minuti al lancio"},
 {category:"CLASSE",series:"Druido 1",title:"Ordine Primordiale: Mago",subtitle:"Magician · privilegio di classe",tone:"teal",rune:"✺",traits:[
 ["Trucchetto extra","Ottieni un ulteriore trucchetto da Druido."],["Conoscenze naturali","Aggiungi SAG (+3) alle prove di Arcano e Natura."],["Arcano","INT +1 + competenza +2 + SAG +3 = +6."],["Natura","INT +1 + competenza +2 + SAG +3 = +6."]
 ],footer:"Bonus passivo"},
 {category:"TALENTO",series:"Origine",title:"Iniziato alla Magia",subtitle:"Lista Mago · livello 1",tone:"violet",rune:"✵",traits:[
 ["Colpo Accurato","Trucchetto ottenuto dal talento."],["Stretta Folgorante","Trucchetto ottenuto dal talento."],["Trova Famiglio","Un lancio gratuito per riposo lungo; puoi usare anche slot."],["Caratteristica magica","Saggezza, come scelta del talento."]
 ],footer:"Trova Famiglio resta la scelta attuale"},
 {category:"TRUCCHETTO",series:"Combattimento",title:"Colpo Accurato",subtitle:"True Strike · azione Magia",tone:"violet",rune:"⚝",stats:[["ATT","+5"],["1 MANO","1d6+3"],["2 MANI","1d8+3"]],traits:[
 ["Attacco","Usi SAG al posto di FOR per colpire e per i danni."],["Danno","Puoi infliggere danni radiosi oppure del tipo normale dell'arma."],["Componenti","Somatiche e materiali (arma usata)."],["Con scudo","Bastone a una mano · CA 15."]
 ],footer:"I dadi aggiuntivi arrivano dal livello 5"},
 {category:"REGOLA",series:"Promemoria",title:"Concentrazione",subtitle:"Regola di gioco",tone:"slate",rune:"◇",traits:[
 ["Una alla volta","Puoi mantenere un solo incantesimo a concentrazione."],["Se subisci danni","TS Costituzione: CD 10 o metà dei danni subiti, il maggiore."],["Kaladin","Bonus al TS Costituzione: +3, senza competenza."],["Termina","Con un'altra concentrazione, Incapacitato o morte."],["Esempio","Intralciare richiede concentrazione."]
 ],footer:"Nessuna azione per mantenere concentrazione"}
 ]
});
