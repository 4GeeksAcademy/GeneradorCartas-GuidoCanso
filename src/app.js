window.onload = function() {

let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palos = ["♦", "♥", "♠ ", "♣"];

let randomCardNumber = Math.floor(Math.random() * cardNumber.length)
let randomPalosNumber = Math.floor(Math.random() * palos.length)

let randomCard = cardNumber[randomCardNumber]
let randomPalos = palos[randomPalosNumber]

let paloSup = document.getElementById("paloSuperior")
let numero = document.getElementById("numero")
let paloInf = document.getElementById("paloInferior")

paloSup.innerHTML = randomPalos
numero.innerHTML = randomCard
paloInf.innerHTML = randomPalos

if (randomPalos == "♦" || randomPalos == "♥") {
  paloSup.classList.add("rojo")
  paloInf.classList.add("rojo")
}
}


