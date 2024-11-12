class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque padrão";
    }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Criando instâncias de heróis
const mago = new Heroi("Gandalf", 2000, "mago");
const guerreiro = new Heroi("Conan", 30, "guerreiro");

// Chamando o método atacar
mago.atacar(); // Saída: O mago Gandalf atacou usando magia
guerreiro.atacar(); // Saída: O guerreiro Conan atacou usando espada