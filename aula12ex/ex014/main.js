function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora <= 12) {
    msg.innerHTML += " Bom dia!";
    img.src = "fotomanha.jpg";
    document.body.style.background = "#7085fd";
  } else if (hora >= 13 && hora <= 18) {
    msg.innerHTML += " Boa tarde!";
    img.src = "fototarde.jpg";
    document.body.style.background = "#9a6c36e9";
  } else {
    msg.innerHTML += " Boa noite!";
    img.src = "fotonoite.jpg";
    document.body.style.background = "#3C2844";
  }
}
