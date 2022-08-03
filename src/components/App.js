import pixar from "../data/pixar/pixar.js";
console.log(pixar);

const App = () => {
  const container = document.createElement("div");
  container.className = "container";
  const arrCards = generadorImagenes(pixar.items);
  for (let i = 0; i < arrCards.length; i++) {
    container.appendChild(arrCards[i]);
  }

  return container;
};
const generadorImagenes = (data) => {
  data.sort(() => Math.random() - 0.5);

  const arrCards = [];
  data.forEach((item) => {
    const card = document.createElement("div");

    const front = document.createElement("div");
    const imgFront = document.createElement("img");
    imgFront.classList = "imgFront";
    imgFront.setAttribute("src", item.image);
    front.appendChild(imgFront);

    const back = document.createElement("div");

    card.classList = "carta";
    front.classList = "front";
    back.classList = "back";

    card.appendChild(front);
    card.appendChild(back);

    arrCards.push(card);
  });

  return arrCards;
};
export default App;
