let valores = [1, 2, 3, 4, 5, 6]



for (s in valores) {
    console.log(valores[s])
}

let sa = valores.indexOf(9)

if (sa == -1) {
    console.log(`O valor não existe`)
}else {
    console.log(`O valor ${sa}, está na chave ${valores.indexOf(sa)}`)
}

console.log()