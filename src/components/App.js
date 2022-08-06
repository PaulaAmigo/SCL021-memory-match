import pixar from "../data/pixar/pixar.js";
//console.log(pixar);

let botonJuego = document.querySelector(".instrucciones");
botonJuego.addEventListener("click", () => {
  let audioUp = document.createElement("audio");
  audioUp.setAttribute("src", "sonido.mp3");
  audioUp.play();
}); // boton de audio


const imageback = pixar.ball[0].image; //variable de la imagen del balon de pixar, que se creo en pixar.js

const App = () => {
  const container = document.createElement("div");
  //container es lo que se muestra en html
  container.className = "container";
  //creamos la clase para modificarlo en CSS
  const arrCards = generadorImagenes(pixar.items);
  //arrCards contiene las imagenes
  arrCards.className = "arrcards";
  for (let i = 0; i < arrCards.length; i++) {
    container.appendChild(arrCards[i]);
  }
  /*recorremos el arrCards que contiene la imagenes, y 
llama las imagenes al container para que se vean en el html */
  return container;
};

//const aleatorio = () => {
//};

const generadorImagenes = (data) => {
  data.sort(() => Math.random() - 0.5);
  //se crea la funcion que mezcla las cartas
  const arrCards = [];
  //
  data.forEach((item) => {
    const carta = document.createElement("div");
    carta.className = "cartas";

    const front = document.createElement("div");
    front.className = "front";
    const imgFront = document.createElement("img");
    imgFront.className = "frontimg";
    imgFront.setAttribute("src", imageback);
    imgFront.addEventListener("click", function (event) {
      event.target.setAttribute("src", item.image);
    });
    front.appendChild(imgFront);

    const back = document.createElement("div");

    carta.classList = "carta";
    front.classList = "front";
    back.classList = "back";

    carta.appendChild(front);
    carta.appendChild(back);

    carta.addEventListener("click", () => {
      //Run our flip animation
     back.classList.toggle("toggleCard");
      front.classList.toggle("toggleCard");
    });

    arrCards.push(carta);
  });

  return arrCards;
};
export default App;
