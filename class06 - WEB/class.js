class Banco { //Exemplo de criação de classe
    constructor() {
        this.saldo = 0;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito realizado: R$ ${valor}. Saldo atual: R$ ${this.saldo}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para sacar.");
            return;
        }

        this.saldo -= valor;
        console.log(`Saque realizado: R$ ${valor}. Saldo atual: R$ ${this.saldo}`);
    }

    investir(valor, taxa, tempo) {
        let montante = valor * (1 + (taxa / 100)) ** tempo;
        console.log(`Seu investimento de R$ ${valor} renderá R$ ${montante.toFixed(2)} em ${tempo} meses.`);
    }

    simulacao(val, taxa, tempo) {
        let res = val * (1 + (taxa / 100)) ** tempo;
        console.log(`Seu saldo simulado será de R$ ${res.toFixed(2)} em ${tempo} meses.`);
    }

    pagarConta(divida, metodo = "pix") {
        if (divida > this.saldo) {
            console.log("Você não tem dinheiro para pagar a conta.");
            return;
        }

        this.saldo -= divida;
        console.log(`Seu saldo é R$ ${this.saldo} e a conta foi paga no ${metodo}.`);
    }
}

const conta = new Banco();
conta = parseInt(prompt("Digite seu valor :"))
conta.depositar(2000);
conta.pagarConta(500, "pix");
conta.investir(1000, 2, 12);
conta.simulacao(1000, 2, 12);
conta.sacar(200);