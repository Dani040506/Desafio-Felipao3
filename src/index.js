// Classe do herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken",
    };

    const ataque = ataques[this.tipo];
    if (!ataque) {
      console.log(`tipo inválido: ${this.tipo}`);
      return;
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthas", 29, "guerreiro"),
  new Heroi("Tenzin", 40, "monge"),
  new Heroi("Hanzo", 27, "ninja"),
];

for (const h of herois) {
  h.atacar();
}