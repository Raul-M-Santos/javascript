let bnt1 = document.getElementById("btn1");
let bnt2 = document.getElementById("btn2");
bnt1.addEventListener("click", fnc1);
bnt2.addEventListener("click", fnc2);
let valores = [];
let res2 = document.getElementById("res2");

function fnc1() {
  let num = Number(document.getElementById("num").value);
  let res = document.getElementById("res");

  if (num <= 0 || num > 100) {
    alert("adicione um numero maior que 0 e menor ou igual 100");
  } else {
    valores.push(num);
    let option = document.createElement("option");
    res.appendChild(option);
    option.innerHTML += `O valor ${num} foi adicionado`;
  }
  let p = document.createElement("p");
  res2.appendChild(p);
  res2.innerHTML = "";
}

function fnc2() {
  for (i = 0; )
  res2.innerHTML += `ao todo temos:`;
}
