
import pixar from '../data/pixar/pixar.js';
console.log(pixar);
let nombre = window.prompt ("Ingresa tu nombre");

alert("Bienvenid@, " + nombre + " a jugar Memory-Match Pixar!" );

const App = () => {
  
  const container = document.createElement('div');
  container.className='container';
  const arrCards= generadorImagenes(pixar.items);
  arrCards.className='arrcards';
  for (let i = 0; i<arrCards.length; i++){
    container.appendChild(arrCards[i]);
  }

  return container;
};








//const aleatorio = () => {
  
//};



const generadorImagenes = (data) => {
  data.sort(() => Math.random() - 0.5);
  
  const arrCards = [];
  data.forEach(item => {
    const carta = document.createElement("div");
    carta.className='cartas'

    const front = document.createElement("div");
    front.className='front'
    const imgFront = document.createElement("img");
    imgFront.className='frontimg'
    imgFront.setAttribute('src', item.image);
    front.appendChild(imgFront);

    const back = document.createElement("div");

    carta.classList = "carta";
    front.classList = "front";
    back.classList = "back";

    carta.appendChild(front);
    carta.appendChild(back);

    arrCards.push(carta);
  });

  return arrCards;
};







export default App;