// Exemplo 1: for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Exemplo 2: tabuada
let num = parseInt(prompt("Digite o número e veja a tabuada do mesmo! :"));

for (let a = 1; a <= 10; a++) {
    let resultado = num * a;
    console.log(`${num} x ${a} = ${resultado}`);
}

// Exemplo 3: while
let repetir = true;

while (repetir) {
    console.log("Vai Neymarrrrr!!!");
    repetir = false;
}

// Exemplo 4: while com entrada do usuário
let entrada = prompt("Digite um dado ou 'sair' para encerrar:");

while (entrada !== 'sair') {
    alert("Usuário inseriu: " + entrada);
    entrada = prompt("Digite um novo dado ou 'sair' para encerrar:");
}

// Exemplo 5: switch com nome
let newData = prompt("Insira um nome:");

while (newData !== 'Sair') {
    switch (newData) {
        case "Ana":
            alert("Olá, Ana!");
            break;
        case "João":
            alert("Olá, João!");
            break;
        default:
            alert("Nome não cadastrado.");
            break;
    }

    newData = prompt("Insira um nome ou digite 'Sair' para encerrar:");
}