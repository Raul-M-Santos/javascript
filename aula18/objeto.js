let amigo = {
  nome: "jose",
  sexo: "m",
  peso: 13,
  engordar(p = 0) {
    console.log("engordou");
    this.peso += p;
  },
};

amigo.engordar(2);

console.log(`Nosso amigo ${amigo.nome} pesa ${amigo.peso}`);
