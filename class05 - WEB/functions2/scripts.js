// Função + switch case
const calculadora = (num, num2, operação) => {
    switch (operação) {
        case "+":
            return num + num2;
        case "-":
            return num - num2;
        case "*":
            return num * num2;
        case "/":
            return num / num2;
    }
}

var num =  parseInt(prompt("Digite um número: "));
var num2 =  parseInt(prompt("Digite outro número: "));
var operação = prompt("Escolha uma operação: \n 1. + \n 2. - \n 3. * \n 4. /");

let resultado = calculadora(num, num2, operação);
alert(`O resultado da operação é: ${resultado}`);