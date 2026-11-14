/* Global deck registry: add other characters as new entries in window.DND_DECKS. */
const decks = window.DND_DECKS || [];
const select = document.querySelector("#deck");
const sheets = document.querySelector("#sheets");
const clean = v => String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function cardHTML(card, number, total) {
 const traits=(card.traits||[]).map(([name,description])=>`<li><b>${clean(name)}</b> · ${clean(description)}</li>`).join("");
 const stats=(card.stats||[]).map(([name,val])=>`<div><span>${clean(name)}</span><b>${clean(val)}</b></div>`).join("");
 return `<article class="card tone-${clean(card.tone || 'forest')}">
  <div class="inner">
  <header><div class="category">${clean(card.category)} <span>· ${clean(card.series || '')}</span></div><h2>${clean(card.title)}</h2><p class="subtitle">${clean(card.subtitle||'')}</p></header>
  <div class="art" aria-hidden="true"><div class="rings"></div><span>${clean(card.rune || '✦')}</span></div>
  <div class="content">${stats ? `<div class="stats">${stats}</div>` : ''}<ul>${traits}</ul></div>
  <footer><em>${clean(card.footer||'')}</em><small>${String(number).padStart(2,'0')}/${String(total).padStart(2,'0')}</small></footer>
  </div></article>`;
}
function render(deck) {
 sheets.innerHTML="";
 (deck.cards||[]).forEach((_,i)=>{if(i%9===0){const page=document.createElement("section"); page.className="sheet";page.innerHTML='<div class="grid"></div>';sheets.append(page)} const grid=sheets.lastElementChild.firstElementChild;grid.insertAdjacentHTML("beforeend",cardHTML(deck.cards[i],i+1,deck.cards.length))});
}
for(const d of decks){let o=document.createElement("option");o.value=d.id;o.textContent=d.name;select.append(o)}
select.addEventListener("change",()=>render(decks.find(d=>d.id===select.value)));
document.querySelector("#guides").addEventListener("change",e=>document.body.classList.toggle("hide-guides",!e.target.checked));
document.querySelector("#print").addEventListener("click",()=>window.print());
if(decks.length) render(decks[0]);
