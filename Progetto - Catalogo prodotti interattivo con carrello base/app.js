// Dati: array di oggetti prodotto
const prodotti = [
  { id: 1, nome: 'Penna', prezzo: 1.5 },
  { id: 2, nome: 'Taccuino', prezzo: 3.0 },
  { id: 3, nome: 'Matita', prezzo: 0.8 },
  { id: 4, nome: 'Eraser', prezzo: 0.5 }
];

// Array del carrello: contiene oggetti con quantità
const carrello = [];

// Selezioni DOM
const containerProd = document.getElementById('productContainer');
const containerCarrello = document.getElementById('cartContainer');
const totaleEl = document.getElementById('total');

// Funzione per creare e mostrare i prodotti nel DOM
function mostraProdotti() {
  prodotti.forEach(prod => {
    // Creiamo elemento div per ogni prodotto
    const divProd = document.createElement('div');
    divProd.className = 'prod';

    // Creiamo elementi HTML per nome e prezzo
    divProd.innerHTML = `
      <h3>${prod.nome}</h3>
      <p>Prezzo: € ${prod.prezzo.toFixed(2)}</p>
    `;

    // Bottone per aggiungere al carrello
    const btnAggiungi = document.createElement('button');
    btnAggiungi.innerText = 'Aggiungi al carrello';

    // Evento click
    btnAggiungi.addEventListener('click', () => {
      aggiungiAlCarrello(prod);
    });

    divProd.appendChild(btnAggiungi);
    containerProd.appendChild(divProd);
  });
}

// Funzione per aggiungere prodotto al carrello
function aggiungiAlCarrello(prod) {
  // Verifica se già nel carrello
  const item = carrello.find(p => p.id === prod.id);
  if (item) {
    item.quantità++; // incremento quantità
  } else {
    // aggiungi nuovo oggetto con quantità
    carrello.push({ ...prod, quantità: 1 });
  }
  aggiornaCarrello();
}

// Funzione per aggiornare visualizzazione carrello
function aggiornaCarrello() {
  // Pulisci il contenuto precedente
  containerCarrello.innerHTML = '';

  let totale = 0;

  // Ciclo array carrello
  for (const item of carrello) {
    // Creo elemento per ogni item
    const divItem = document.createElement('div');

    // Uso template literal
    divItem.innerHTML = `
      <span>${item.nome} x ${item.quantità}</span>
      <span>€ ${(item.prezzo * item.quantità).toFixed(2)}</span>
    `;

    // Bottone per rimuovere
    const btnRimuovi = document.createElement('button');
    btnRimuovi.innerText = 'Rimuovi';

    btnRimuovi.addEventListener('click', () => {
      rimuoviDaCarrello(item.id);
    });

    divItem.appendChild(btnRimuovi);
    containerCarrello.appendChild(divItem);

    // Aggiornamento totale
    totale += item.prezzo * item.quantità;
  }

  // Aggiorna totale
  totaleEl.innerText = `Totale: € ${totale.toFixed(2)}`;
}

// Funzione per rimuovere prodotto dal carrello
function rimuoviDaCarrello(id) {
  // Trova indice
  const index = carrello.findIndex(p => p.id === id);
  if (index !== -1) {
    carrello.splice(index, 1);
    aggiornaCarrello();
  }
}

// Inizializza
mostraProdotti();