import App from './components/App.js';
document.getElementById('root').appendChild(App());
let botonJuego = document.querySelector(".instrucciones")
botonJuego.addEventListener("click", () => {
    let audioUp = document.createElement("audio")
    audioUp.setAttribute("src","sonido.mp3")
    audioUp.play();
})