import pixar from "../data/pixar/pixar.js";
//console.log(pixar);
const imageback = pixar.ball[0].image;
//la imagen de la pelota, la que se ve al comienzo del juego
let selectedCards = []; //crear el arreglo vacio
let cantidadFinal = 0;

let validarFinJuego = () => {
  cantidadFinal++;
  if (cantidadFinal === 10) {
    document.getElementById("you-win").style.display = "block";
  }
};

const popup = document.querySelector("#popup");
const instrucciones = document.querySelector(".instrucciones");
const cerrar = document.querySelector(".boton2");
//funciones para crear el popUp

instrucciones.addEventListener("click", () => {
  popup.show();
});
cerrar.addEventListener("click", () => {
  popup.close();
}); //popup con las instrucciones de como jugar

let botonJuego = document.querySelector(".boton2"); //creamos la variables y buscamos el botón del html
botonJuego.addEventListener("click", () => {
  let audioUp = document.createElement("audio");
  audioUp.setAttribute("src", "./audio/sonido.mp3");
  audioUp.play(); // boton de audio para ir a juagar
});
const App = () => {
  const container = document.createElement("div"); //container es lo que se muestra en html
  container.className = "container"; //creamos la clase para modificarlo en CSS
  const arrCards = generadorImagenes(pixar.items); //arrCards contiene las imagenes
  arrCards.className = "arrcards";
  for (let i = 0; i < arrCards.length; i++) {
    /*recorremos el arrCards que contiene la imagenes, y 
  llama las imagenes al container para que se vean en el html */
    container.appendChild(arrCards[i]);
  }
  return container;
};
const generadorImagenes = (data) => {
  data.sort(() => Math.random() - 0.5); //se crea la funcion que mezcla las cartas
  const arrCards = [];
  let contadorDeIntentos = 7;
  let intentos = document.querySelector(".intentos");
  intentos.textContent = " Intentos : " + contadorDeIntentos;

  data.forEach((item) => {
    //Que recorra carta por carta
    const carta = document.createElement("div");
    carta.className = "cartas";
    const front = document.createElement("div");
    front.className = "front";
    const imgFront = document.createElement("img");
    imgFront.className = "frontimg";
    imgFront.setAttribute("src", imageback);
    imgFront.addEventListener("click", function () {
      selectedCards.push(imgFront);

      if (contadorDeIntentos > 0) {
        imgFront.setAttribute("src", item.image);
        if (selectedCards.length === 2) {
          //que tome dos cartas para luego hacer le "if"

          if (selectedCards[0].src === selectedCards[1].src) {
            //comparamos ambos
            selectedCards = [];
            validarFinJuego();
          } else {
            contadorDeIntentos--;
            intentos.textContent = "intentos:" + contadorDeIntentos;
            //console.log (contadorDeIntentos)
            if (contadorDeIntentos === 0) {
              document.getElementById("you-lose").style.display = "block";
            }
            setTimeout(() => {
              selectedCards[0].setAttribute("src", imageback);
              selectedCards[1].setAttribute("src", imageback);
              selectedCards = [];
            }, 1000);
            //que se devuelva a la imagen de la pelota
          }
          //cuando no sean iguales que vuelva a hacer el if desde el comienzo
          //que verifique que sean iguales y las deje, y si no son iguales que se devuelva a la imagen de la pelota
        }
      } else {
        //setTimeout(() => {
        selectedCards[0].setAttribute("src", imageback);
        selectedCards = [];
        //}, 1000);
      }
      //event.target.setAttribute("src", item.image);
      //si las imagenes son iguales se mantengas, de lo contrario que vuelva la imagen de la pelota
    });
    front.appendChild(imgFront);

    const back = document.createElement("div");

    carta.appendChild(front);
    carta.appendChild(back);

    arrCards.push(carta);
  });

  return arrCards;
};
export default App;
