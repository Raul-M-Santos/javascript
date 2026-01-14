var btn = document.getElementById("btn");
btn.addEventListener("click", taboada);

function taboada() {
  var num = document.getElementById("num").value;
  var res = document.getElementById("res");
  res.innerHTML = "";

  if (num.length == 0) {
    alert("Digite um numero");
  }

  n1 = Number(num);

  for (n = 1; n <= 10; n++) {
    var option = document.createElement("option");
    res.appendChild(option);
    option.innerHTML += `${n1} x ${n} = ` + n * n1;
  }
}
