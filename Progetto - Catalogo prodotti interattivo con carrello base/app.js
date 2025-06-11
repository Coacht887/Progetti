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
let cart = [];

//Riferimento agli elementi del DOM
const catalogoDiv = document.getElementById("catalogo");
const carrelloDiv = document.getElementById("carrello");
const totaleSpan = document.getElementById("totale");
const checkoutButton = document.getElementById("checkout");
const clearCartButton = document.getElementById("clear-cart");
const checkoutMessage = document.getEloementById("checkout-message");
const searchInput = document.getElementById("search-input");
