class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const nome = typeof prompt === "function" ? prompt("Digite seu nome:") : "Ana";
const idade = typeof prompt === "function" ? parseInt(prompt("Digite sua idade:"), 10) : 20;

const teste = new Pessoa(nome, idade);
teste.apresentar();
console.log(teste);