var botao = document.getElementById("botao");
botao.addEventListener("click", txt);

function txt() {
  var container = document.getElementById("container");
  var texto = document.createElement("p");
  texto.innerHTML = "Texto adicionado usando JS";
  container.appendChild(texto);
}
