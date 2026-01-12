var horas = new Date();
var hora = horas.getHours();

if (hora == 1) {
  console.log(`Agora são exatamente ${hora} hora`);
} else {
  console.log(`Agora são exatamente ${hora} horas`);
}

if (hora > 4 && hora <= 12) {
  console.log("Bom dia");
} else if (hora >= 13 && hora <= 18) {
  console.log("Boa tarde!");
} else if (hora >= 19 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Boa madrugada!");
}
