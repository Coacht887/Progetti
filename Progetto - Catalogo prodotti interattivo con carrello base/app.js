// Dati Prodotti
const productCatalog = [
  {
    id: 1,
    nome: "Formula 1 2025",
    descrizione:
      "La nuova stagione di Formula 1 con le ultime novità e aggiornamenti.",
    prezzo: 59.99,
    image: "assets/formula1.webp",
  },
  {
    id: 2,
    nome: "Death Stranding 2",
    descrizione:
      "L'attesissimo sequel di Death Stranding, con nuove avventure e personaggi.",
      prezzo: 69.99,
      image: "assets/death.webp",
  },
  {
    id: 3,
    nome: "Astrofox",
    descrizione:
      "Un gioco di avventura spaziale con grafica mozzafiato e gameplay coinvolgente.",
    prezzo: 49.99,
    image: "assets/astro.webp",
  },
  {
    id: 4,
    nome: "Metal Gear Solid Delta",
    descrizione:
      "Il ritorno di uno dei giochi più iconici della storia, con grafica rimasterizzata e nuove funzionalità.",
    prezzo: 59.99,
    image:"assets/metalgear.webp",
  }
  
];
// Carrello
let carrello= [];

//Riferimento agli elementi del DOM
const catalogoDiv = document.getElementById("catalogo");
const carrelloDiv = document.getElementById("carrello");
const totaleSpan = document.getElementById("totale");
const checkoutButton = document.getElementById("checkoutButton");
const clearCartButton = document.getElementById("clearCartButton");
const checkoutMessage = document.getElementById("checkoutMessage");
const searchInput = document.getElementById("searchInput");

// Funzione per visualizzare il catalogo prodotti
function mostraProdotti(listaProdotti) {
  catalogoDiv.innerHTML = "";
  for (let i = 0; i < listaProdotti.length; i++) {
    const prodotto = listaProdotti[i];

    const card = document.createElement("div");
    card.classList.add("prodotto");
    card.innerHTML = `
      <img src="${prodotto.image}" alt="${prodotto.nome}">
      <h3>${prodotto.nome}</h3>
      <p>${prodotto.descrizione}</p>
      <p>Prezzo: €${prodotto.prezzo.toFixed(2)}</p>
      <button onclick="aggiungiAlCarrello(${prodotto.id})">Aggiungi al Carrello</button>
    `;
    catalogoDiv.appendChild(card);
  }
}
//Funzione aggiungi prodotto al carrello
function aggiungiAlCarrello(id) {
  const prodotto = productCatalog.find(p => p.id === id);
  if (prodotto) {
    carrello.push(prodotto);
    aggiornaCarrello();
  }
}
// Funzione aggiorna il carrello
function aggiornaCarrello() {
  carrelloDiv.innerHTML = "";
  let totale = 0;
  carrello.forEach((item) => {
    totale += item.prezzo;
    const div = document.createElement("div");
    div.textContent = `${item.nome} - €${item.prezzo.toFixed(2)}`;
    carrelloDiv.appendChild(div);
  });

totaleSpan.textContent = totale.toFixed(2);
}
// Funzione per il checkout
function checkout() {
  if (carrello.length === 0) {
    alert("Il carrello è vuoto!");
    return;
  }
  checkoutMessage.textContent = "Grazie per il tuo acquisto!";
  carrello = [];
  aggiornaCarrello();
}
// Funzione per svuotare il carrello
function svuotaCarrello() {
  carrello = [];
  aggiornaCarrello();
  checkoutMessage.textContent = "Il carrello è stato svuotato.";
}
// Funzione per ricercare prodotti
function ricercaProdotti() {
  const query = searchInput.value.toLowerCase();
  const risultati = productCatalog.filter(prodotto =>
    prodotto.nome.toLowerCase().includes(query) ||
    prodotto.descrizione.toLowerCase().includes(query)
  );
  mostraProdotti(risultati);
}
// Tasti interazione
checkoutButton.addEventListener("click", checkout);
clearCartButton.addEventListener("click", svuotaCarrello);
searchInput.addEventListener("input", ricercaProdotti);

// Avvio iniziale
mostraProdotti(productCatalog);