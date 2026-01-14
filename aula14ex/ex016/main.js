var btn = document.getElementById("btn");
btn.addEventListener("click", start);

function start() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var passo = document.getElementById("passo").value;
  var res = document.getElementById("res");

  if (num1.length == 0 || num1 > num2) {
    alert("Digite um numero para o Inicio, ele precisa ser menor que o fim");
    return;
  }

  if (num2 <= 0) {
    alert("Digite um numero maior que 0 para o fim");
    return;
  }

  if (passo.length == 0) {
    alert("Digite um numero para o passo considerando 1");
    passo = 1;
  }

  n1 = Number(num1);
  n2 = Number(num2);
  p = Number(passo);

  res.innerHTML = "";

  for (n = n1; n <= n2; n += p) {
    res.innerHTML += n + " ";
  }
}
