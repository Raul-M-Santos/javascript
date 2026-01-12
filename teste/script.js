var btn = document.getElementById("btnCard");
btn.addEventListener("click", adc);

function adc() {
  var container = document.getElementById("cards");
  var card = document.createElement("p");
  var total = container.querySelectorAll("p").length + 1;
  card.innerHTML = "Card " + total;
  container.appendChild(card);
}
