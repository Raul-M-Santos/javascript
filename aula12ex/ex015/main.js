var ver = document.getElementById("ver");
ver.addEventListener("click", verificar);

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("num").value;
  var res = document.getElementById("res");

  if (fano.length == 0 || Number(fano) > ano) {
    alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano);
    res.innerHTML = `idade calculada: ${idade}`;
    var genero = "";
    var img = document.createElement("p");
    img.setAttribute("id", "text");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade <= 12) {
        img.innerHTML = "Criança";
      } else if (idade < 21) {
        img.innerHTML = "Jovem";
      } else if (idade < 50) {
        img.innerHTML = "Adulto";
      } else {
        img.innerHTML = "Idoso";
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 12) {
        img.innerHTML = "Criança";
      } else if (idade < 21) {
        img.innerHTML = "Jovem";
      } else if (idade < 50) {
        img.innerHTML = "Adulto";
      } else {
        img.innerHTML = "Idoso";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Você é um(a) ${genero} de ${idade} anos`;
    res.appendChild(img);
  }
}
