let bnt1 = document.getElementById("btn1");
let bnt2 = document.getElementById("btn2");
bnt1.addEventListener("click", fnc1);
bnt2.addEventListener("click", fnc2);
let valores = [];
let res2 = document.getElementById("res2");

function fnc1() {
  let res = document.getElementById("res");
  let num = Number(document.getElementById("num").value);
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
  if (valores == 0) {
    alert("adicione um numero do campo acima");
  } else {
    valores.sort();
    let maior = valores[valores.length - 1];
    let menor = valores[0];
    let soma = 0;
    for (n = 0; n < valores.length; n++) {
      soma += valores[n];
    }
    let media = soma / valores.length;

    res2.innerHTML = "";
    res2.innerHTML += `ao todo temos: ${valores.length}`;
    res2.innerHTML += `<p> O maior valor informado foi  ${maior}</p>`;
    res2.innerHTML += `<p> O menor valor informando foi ${menor} </p>`;
    res2.innerHTML += `<p> Somando todos os valores temos  ${soma}</p>`;
    res2.innerHTML += `<p> A média dos valores digitados é ${media}</p>`;
  }
}
